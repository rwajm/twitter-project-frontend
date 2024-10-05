const Header = () => {
    return (
        <div className="relative h-14">
        <header role="banner" className="absolute -top-16 h-16 w-full flex flex-col items-center justify-center border-solid border-b-[1px] border-b-tlightgray">
            <svg viewBox="0 0 24 24" aria-label="아래로 당겨서 새로 고침" role="img" className="duration-200 transform rotate-180 size-8 fill-tgray">
                <path d="M13 3v13.59l5.043-5.05 1.414 1.42L12 20.41l-7.457-7.45 1.414-1.42L11 16.59V3h2z" />
            </svg>
        </header>
        </div>
    );
};

export default Header;