const Dropdown = () => {
    return (
        <div role="menu" className="max-w-[75%] shad">
            <div>
                <div className="flex flex-wrap shadow w-fit">
                    <div className="flex flex-col w-fit">
                        <div role="menuitem" tabIndex="0" className="flex px-4 py-3 shrink hover:bg-tlightgray tgray">
                            <div className="pr-3">
                                <svg viewBox="0 0 24 24" className="size-5">
                                    <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z">
                                    </path>
                                </svg>
                            </div>
                            <div className="break-words shrink">
                                <div className="">
                                    <span className="font-bold">링크 복사하기ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㅁㅁ</span>
                                </div>
                            </div>
                        </div>
                        <div role="menuitem" tabIndex="0" className="flex px-4 py-3 shrink hover:bg-tlightgray">
                            <div className="pr-3">
                                <svg viewBox="0 0 24 24" className="size-5">
                                    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                                </svg>
                            </div>
                            <div className="">
                                <div className="">
                                    <span className="font-bold">게시물 공유하기</span>
                                </div>
                            </div>
                        </div>
                        <div role="menuitem" tabIndex="0" className="flex px-4 py-3 shrink hover:bg-tlightgray">
                            <div className="pr-3">
                                <svg viewBox="0 0 24 24" className="size-5">
                                    <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
                                </svg>
                            </div>
                            <div className="">
                                <div className="">
                                    <span className="font-bold">쪽지로 보내기</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dropdown;