import React from "react";
import "../App.css";

function Compose() {
    const submitHandler = (e) => {
        
    };

    return (
        <>
            <div className="flex flex-row-reverse items-center w-full px-4 h-14">
            <button role="button" type="button" aria-disabled="true" disabled="" className="h-8 px-4 text-sm font-bold text-white rounded-full bg-tblue" onClick={submitHandler()}>게시하기</button>
            </div>
            <textarea placeholder="무슨 일이 일어나고 있나요?" className="text-xl resize-none text-wrap min-h-24 size-full"></textarea>
            <button>
                <label>
                    <div dir="ltr" className="size-5 text-[rgb(29, 155, 240)]">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className=" fill-tblue">
                            <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z" />
                        </svg>
                    </div>
                    <input accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/quicktime" type="file" className="invisible"></input>
                </label>
            </button>
        </>
    );
}

export default Compose;