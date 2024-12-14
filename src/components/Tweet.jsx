import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

//임시 데이터

//context api로 로그인 정보
const loggedUser = { id: 'a' };

const Tweet = ({
    tweetId,
    date,
    userId,
    userName,
    userProfile,
    text,
    // images,
    // mentions,
    // retweet,
    // likes,
    // views,
    // prevTweet,
    likeData,
}) => {

    const location = useLocation();
    const navigate = useNavigate();

    const tweetRef = useRef(null);
    const textRef = useRef(null);

    const [isOverflowing, setIsOverflowing] = useState(false);
    const [liked, setLiked] = useState(false);

    // 더보기 버튼 구현
    const checkOverflowing = () => {
        const tweet = textRef.current;
        setIsOverflowing(tweet.scrollHeight > tweet.clientHeight);
    };

    useEffect(() => {
        checkOverflowing();
    }, []);

    // 좋아요 버튼 구현; 의존성 문제 추후 확인
    useEffect(() => {
        setLiked(likeData);
    }, [liked, likeData]);

    // // 임시 핸들러
    // const likeHandler = (e) => {
    //     setLiked(liked ? false : true);
    // }

    const likeHandler = async (e) => {

        const likeInfo = {
            tweetId: tweetId,
            LikedUser: loggedUser.id,  //myself
        };

        // {tweetId}/like 라우터로 데이터 보냄
        if (liked) {
            axios.delete(`tweets/${tweetId}/like`, likeInfo)
                .then((res) => {
                    // 마음에 들어요 취소 성공 코드 200을 받으면 표시
                    switch (res.status) {
                        case 204:
                            setLiked(false); // 말고 리렌더
                            break;
                        case 404:
                            console.log("마음에 들어요 기록 존재하지 않음");
                            setLiked(false); // 말고 리렌더
                            break;
                        case 501:
                            alert("잘못된 api 호출. uri가 잘못되었을 수 있습니다.");
                            // 홈으로...?
                            break;
                        default:
                            alert(res.status);
                            break;
                    }
                })
                .catch((err) => {
                    alert(`좋아요 취소 요청 실패 ; ${err}`);
                });
        } else {
            axios.post(`tweets/${tweetId}/like`, likeInfo)
                .then((res) => {
                    console.log(res);
                    // 마음에 들어요 저장 성공 코드 200을 받으면 표시
                    switch (res.status) {
                        case 200:
                            setLiked(true); // 말고 리렌더
                            break;
                        case 409:
                            console.log("중복된 마음에 들어요 요청");
                            break;
                        case 501:
                            alert("잘못된 api 호출. uri가 잘못되었을 수 있습니다.");
                            // 홈으로...?
                            break;
                        default:
                            alert(res.status);
                            break;
                    }
                })
                .catch((err) => {
                    alert(`좋아요 요청 실패 ; ${err}`);
                });
        }
    }

    // 트윗 작성 후 경과시간
    const checkElapsedTime = (date) => {
        let tweetedDT = new Date(date);
        let currentDT = new Date();

        let timeDiff = Math.floor((currentDT.getTime() - tweetedDT.getTime()) / 1000);

        const min = 60;
        const hour = min * 60;
        const day = hour * 24;
        const week = day * 7;

        // 시간차 값 기준
        if (timeDiff < min) { return timeDiff + '초'; }
        if (timeDiff < hour) { return Math.floor(timeDiff / min) + '분'; }
        if (timeDiff < day) { return Math.floor(timeDiff / hour) + '시'; }
        if (timeDiff < week) { return Math.floor(timeDiff / day) + '일'; }

        // 작성일자 연도 기준
        if (currentDT.getFullYear() - tweetedDT.getFullYear() > 0) {
            return tweetedDT.getFullYear().toString().slice(-2) + '년 ' + (tweetedDT.getMonth() + 1) + '월 ' + (tweetedDT.getDate()) + '일';
        } else {
            return (tweetedDT.getMonth() + 1) + '월 ' + (tweetedDT.getDate()) + '일';
        }
    }

    return (
        <div className='relative w-full'>
            <div ref={tweetRef} className="tweet flex-row justify-start pt-3 border-solid border-b-[1px] border-b-tlightgray w-full m-0 p-0">
                <article className="px-4">
                    <div className="flex w-[100%-2rem]">
                        <div className='flex-none mr-2'>
                            <Link to={`/${userId}`} onClick={(e) => e.stopPropagation()}>
                                <div className='relative profile bg-tlightgray'>
                                    <div className='absolute duration-200 size-10 hover:bg-opacity-15 hover:bg-black' />
                                    <div className="size-10">
                                        <img
                                            alt=""
                                            src={userProfile}
                                            onError={(e) => (e.target.className += ' hidden')}
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-col items-start flex-grow flex-shrink pb-3">
                            <div className='flex flex-wrap'>
                                <div className='pr-1 overflow-hidden text-nowrap text-tblack'>
                                    <Link to={`/${userId}`} className='font-bold hover:underline' onClick={(e) => e.stopPropagation()}>
                                        {userName}
                                    </Link>
                                </div>
                                <div className='text-tdarkgray'>
                                    <div className='flex'>
                                        <div className='flex-1 overflow-hidden'>
                                            <Link to={`/${userId}`} className='hover:no-underline' onClick={(e) => e.stopPropagation()}>
                                                <div
                                                //화면을 극단적으로 줄였을 때의 반응 컨트롤을 위함... 추후 손보기
                                                //트윗 반응바도 함께 편집
                                                >
                                                    <span>@{userId}</span>

                                                </div>
                                            </Link>
                                        </div>
                                        <div className='px-1'>
                                            <span>·</span>
                                        </div>
                                        <div>
                                            <span>
                                                <time dateTime={date}>{checkElapsedTime(date)}</time>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-left">
                                <span ref={textRef} className={`text-left break-all whitespace-pre-wrap pointer-events-auto ${location.pathname === "/home" ? "text-ellipsis line-clamp-10" : ""} z-1`}>
                                    {text}
                                </span>
                                {isOverflowing && (
                                    <Link to={`/${userId}/status/${tweetId}`} className="text-tblue hover:underline" onClick={(e) => e.stopPropagation()}>
                                        더 보기
                                    </Link >
                                )}
                            </div>
                            <div className='flex justify-between w-full h-5 gap-1 mt-3'>
                                <div role='button' className='button blue'>
                                    <div>
                                        {/*웹 트위터에서는 link가 아니다? 버튼으로 어떻게 할 수 있을지 고민*/}
                                        <Link to={'/compose/post'} state={{ mentionTo: tweetId }} className='flex flex-row items-center' onClick={(e) => e.stopPropagation()}>
                                            <div className="m-[-8px] button-effect">
                                                <svg viewBox="0 0 24 24" className="size-5 fill-tdarkgray">
                                                    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" />
                                                </svg>
                                            </div>
                                            <span className='px-1 text-sm '>1</span>
                                        </Link>
                                    </div>
                                </div>
                                <div role='button' className='button red'>
                                    <button className="flex flex-row items-center" onClick={(e) => { e.stopPropagation(); likeHandler(); }} >
                                        <div className="m-[-8px] button-effect">
                                            <svg viewBox="0 0 24 24" className={`size-5 fill-tdarkgray ${liked ? "fill-tpink" : null}`}>
                                                <path d={liked ? ("M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z") : ("M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z")} />
                                            </svg>
                                        </div>
                                        <span className={`px-1 text-sm ${liked ? "text-tpink" : null} `}>123</span>
                                    </button>
                                </div>
                                <div role='button' className='button blue'>
                                    <Link aria-label="5784 조회수" className='flex flex-row items-center' onClick={(e) => e.stopPropagation()}>
                                        <div className="m-[-8px] button-effect">
                                            <svg viewBox="0 0 24 24" className='size-5 fill-tdarkgray'>
                                                <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" />
                                            </svg>
                                        </div>
                                        <span className='px-1 text-sm '>5.7천{/*이것도 숫자 자르기 짜야 함*/}</span>
                                    </Link>
                                </div>
                                <div role='button' className='button blue'>
                                    <button>
                                        <div className="p-2 m-[-8px] button-effect">
                                            <svg viewBox="0 0 24 24" className='size-5 fill-tdarkgray'>
                                                <path d="M17 4c-1.1 0-2 .9-2 2 0 .33.08.65.22.92C15.56 7.56 16.23 8 17 8c1.1 0 2-.9 2-2s-.9-2-2-2zm-4 2c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4c-1.17 0-2.22-.5-2.95-1.3l-4.16 2.37c.07.3.11.61.11.93s-.04.63-.11.93l4.16 2.37c.73-.8 1.78-1.3 2.95-1.3 2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4c0-.32.04-.63.11-.93L8.95 14.7C8.22 15.5 7.17 16 6 16c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.17 0 2.22.5 2.95 1.3l4.16-2.37c-.07-.3-.11-.61-.11-.93zm-7 4c-1.1 0-2 .9-2 2s.9 2 2 2c.77 0 1.44-.44 1.78-1.08.14-.27.22-.59.22-.92s-.08-.65-.22-.92C7.44 10.44 6.77 10 6 10zm11 6c-.77 0-1.44.44-1.78 1.08-.14.27-.22.59-.22.92 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div >
        </div>
    );
};

export default Tweet;
