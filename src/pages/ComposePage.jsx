import React, { useCallback, useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { throttle } from "lodash";
import axios from "axios";

import "../App.css";

// 임시 데이터
const loggedUser = { id: 'a' };

// 받을 props: mentionTo, prevTweet
function Compose(props) {
    const { register, handleSubmit, watch } = useForm();
    const { ...textRegister } = register("text", { maxLength: 280 });

    // 추후 동영상 첨부 가능하게
    const [medias, setMedias] = useState([]);

    // useEffect(() => {
    //     console.log(medias);
    // }, [medias]);

    const fileInputRef = useRef(null);
    const handleFileInputButton = () => {
        fileInputRef?.current?.click();
    };

    // 파일 크기 제한 필요
    const handleSelectFiles = (e) => {
        const selectedFiles = Array.from(e.target.files);

        const filteredFiles = selectedFiles.filter((item) =>
            item.type.slice(0, item.type.indexOf("/")) === ("image" || "video"));
        if (selectedFiles.length !== filteredFiles.length)
            alert("이미지 또는 동영상 파일만 첨부할 수 있습니다.");
        if (filteredFiles.length === 0) return;

        const newItems = filteredFiles.map((file) => {
            return {
                'file': file,
                'url': URL.createObjectURL(file),
            }
        });
        setMedias((prev) => prev.concat(newItems));
        e.target.value = "";
    };

    const removeFile = (media) => {
        setMedias((prev) => prev.filter((item) => item !== media));
        URL.revokeObjectURL(media.url);
    };

    // clear!! -할 것 1: 첨부한 이미지 미리보기-
    // clear!! -할 것 1-1: 이미지 미리보기에 이미지 없애기 (x) 버튼-
    // 할 것 1-2: 웹화면 이미지 미리보기 목록 좌우로 넘겨볼 수 있는 화살표 버튼
    // clear!! -할 것 2: 파일 형식 등 폼 데이터 유효성 검증 (첨부시, post시)-
    // 할 것 3: 이미지 base64 인코딩?
    // 할 것 4: 답글 기능 (+ tweet 컴포넌트 멘션 버튼 기능 함께 구현)
    // 추후 추가할 것 1: 동영상 첨부, 동영상 미리보기
    // 추후 추가할 것 2: 텍스트(@)로 멘션

    // textarea 높이 content에 따라 변동
    const textareaRef = useRef(null);
    const handleTextareaResize = useCallback(() => {
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, []);

    // textarea size에 화면 resize 반영
    useEffect(() => {
        window.addEventListener("resize", throttle(() => { handleTextareaResize() }, 200));
    }, [handleTextareaResize]);

    // 글자 수 실시간 체크 + 우하단 progressbar 표시
    // 트위터 글자수 제한은 한중일 140자, 그 외 280자
    // utf8기준 1~2바이트 1, 그외 2로 구현 (한글환경이므로 표시는 140자 제한)
    const text = watch({ id: "text" }).text;
    const textLength = text ? text.normalize('NFC').replace(/[0-\u07ff]|(.)/g, "$&$1").length : 0;

    const onSubmit = (formData) => {
        formData = {
            ...formData,
            medias: medias.map((item) => item.file),
            user_id: loggedUser.id,
            prev_tweet_id: /** 임시 */props.value?? null,
        };

        try {
            const textLength = formData.text ? formData.text.normalize('NFC').replace(/[0-\u07ff]|(.)/g, "$&$1").length : 0;
            if (textLength > 280)
                throw new Error("텍스트 길이 제한 초과");
            formData.medias.forEach((item) => {
                const fileType = item.name.toLowerCase().slice(item.name.lastIndexOf(".") + 1);
                switch (fileType) {
                    case "png":
                    case "jpeg":
                    case "jpg":
                    case "gif":
                    case "webp":
                        break;
                    default:
                        throw new Error("잘못된 형식의 파일 포함");
                }
            })
        } catch (err) {
            alert(err);
            return;
        }

        axios
            .post(`tweets`, formData)
            .then((res) => {
                if (res.data) {
                    alert(res.data.msg);
                } else {
                    alert(res.data.msg);
                }
                Navigate("/home");
            })
            .catch((err) => {
                alert("전송 실패 : " + err);
            });
    }

    return (
        <div className="relative h-dvh">
            <div className="flex flex-row items-center justify-between w-full h-14 bg-white/85 backdrop-blur-md border-solid border-b-[1px] border-b-tlightgray z-50 px-4">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5"> <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
                </svg>
                <button form="tweet-form" type="submit" aria-disabled="true" disabled={(!text && medias.length === 0) || textLength > 280 ? true : false} className="h-8 px-4 text-sm font-bold text-white rounded-full bg-tblue disabled:opacity-50" onClick={handleSubmit(onSubmit)}>게시하기</button>
            </div>
            <div className="relative">
                <form className="flex flex-col px-4" id="tweet-form" onSubmit={handleSubmit(onSubmit)}>
                    {props.mentionTo ? <span>{props.mentionTo}님에게 보내는 답글</span> : <></> /*변수명은 임시*/}
                    <textarea id="text" placeholder="무슨 일이 일어나고 있나요?" onInput={handleTextareaResize} className="focus:outline-none relative text-xl border-none outline-none resize-none text-wrap min-h-[3lh] max-h-full" {...textRegister} ref={(e) => { textRegister.ref(e); textareaRef.current = e; }} />
                    <div className="flex flex-row overflow-scroll scrollbar-hide">
                        {
                            medias.map((item, idx) => (
                                <div key={idx} className={`shrink-0 ${medias.length > 1 ? "w-1/2 pr-2 " : "w-full"}`}>
                                    <div className={`relative overflow-hidden rounded-2xl ${medias.length > 1 ? "aspect-[3/4]" : "w-full max-h-[110svw]"}`}>
                                        <img src={item.url} alt={`첨부한 이미지 미리보기 ${idx + 1}`} className="object-cover object-center size-full" />
                                        <button type="button" className="absolute flex items-center justify-center rounded-full opacity-75 size-8 backdrop-blur-sm bg-tblack top-1 right-1" onClick={() => removeFile(item)}>
                                            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-white">
                                                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex justify-between">
                        <nav>
                            <div className="">
                                <button type="button" className="flex items-center justify-center size-8" onClick={handleFileInputButton}>
                                    <div className="size-5 text-[rgb(29, 155, 240)]">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className=" fill-tblue">
                                            <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z" />
                                        </svg>
                                    </div>
                                </button>
                                {/** 동영상 첨부 허용 시 accept에 video/mp4,video/quicktime 추가 */}
                                <input accept="image/jpeg,image/png,image/webp,image/gif" type="file" multiple className="absolute hidden" ref={fileInputRef} onInput={handleSelectFiles} />
                            </div>
                        </nav>
                        <div>
                            <div className="flex items-center justify-center size-8">
                                {/**접근성 설정 나중에 필요하면 공통css클래스 만들기 */}
                                {(textLength < 260) ||
                                    <div aria-live="polite" className="absolute overflow-hidden size-[1px] -m-[1px]">{(textLength > 280) ? `${Math.floor((textLength - 280) * 0.5)} 글자 초과했습니다.` : `${Math.floor((280 - textLength) * 0.5)} 글자 남았습니다.`}</div>
                                }
                                <div role="progressbar" className="flex items-center justify-center size-8" aria-valuemax={100} aria-valuenow={Math.round(5 / 14 * (textLength))}>
                                    {(textLength < 260) ||
                                        <div className={"absolute items-center text-xs " + ((textLength < 280) ? "text-tdarkgray" : "text-tred")}>{Math.floor((280 - textLength) * 0.5)}</div>
                                    }

                                    <svg className={"duration-200 overflow-visible -rotate-90 " + ((textLength < 260) ? "size-[20px] " : "size-[30px] ")} viewBox={(textLength < 260) ? "0 0 20 20" : "0 0 30 30"}>
                                        <defs>
                                            <clipPath id="0">
                                                <rect height="100%" width="0" x="0"></rect>
                                            </clipPath>
                                        </defs>
                                        <circle cx="50%" cy="50%" fill="none" r={(textLength < 260) ? "10" : "15"} stroke="#EFF3F4" strokeWidth="2"></circle>
                                        <circle cx="50%" cy="50%" fill="none" r={(textLength < 260) ? "10" : "15"} stroke={(textLength < 280) ? (textLength < 260) ? "#1D9BF0" : "#FFD400" : "#F4212E"} pathLength="280" strokeDasharray="280" strokeDashoffset={Math.max((280 - textLength), 0)} strokeLinecap="round" strokeWidth="2"></circle>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Compose;