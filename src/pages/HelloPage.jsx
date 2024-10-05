import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";


// context api로 로그인 정보
// 임시 데이터
const loggedUser = null;
// const loggedUser = { id: 'a' };

function Hello() {
    const isLoggedIn = loggedUser ? true : false;
    const navigate = useNavigate();

    useEffect(() => {
        console.log(`${isLoggedIn}, ${isLoggedIn ? loggedUser.id : "null"}`);
        if (isLoggedIn == true) {
            navigate('/home');
        }
    }, [isLoggedIn, navigate]);

    return (
        <>
            <div className="flex flex-col min-h-[640px] max-[360px]:justify-start justify-center size-full">
                <div className="flex max-[360px]:justify-start justify-center flex-grow">
                    <div className="flex flex-row items-center max-lg:justify-center justify-end flex-grow max-w-screen-2xl max-md:space-x-0 max-lg:space-x-[5%] space-x-[8%]">
                        <svg className="max-w-[25%] grow max-md:hidden" viewBox="0 0 2048 2048">
                            <g>
                                <path className="fill-tblue" d="M1908.7,884.3C1908.7,396,1512,0,1023.6,0S139.3,396,139.3,884.3s421.7,837.8,884.3,837.8v325.8c537.4-272.5,885.1-711.1,885.1-1163.7Z" />
                                <path className="fill-white" d="M1574.1,598.3c-32.1,14.2-65.9,24.3-100.4,30.2h0c33.5-26.1,58.6-61.8,71.8-102.6h0v-11.6c-41.7,24.7-87.2,42.1-134.7,51.5-80.3-85.4-214.7-89.5-300.1-9.2-44.7,41.9-68.4,100.6-66.8,160.5h0c-.4,14,.6,28,3,42-169.7-9.2-327.7-89.6-434.9-221.5-20.5,35.2-29.7,74.1-28.6,112.2-1.8,64,25.4,127.2,77,169.8h0c-27.7-3.1-54.5-11.7-79-25.3v11.6h0v2.7c0,92.5,59.6,173.1,145.7,201.4-23.6,3.6-47.8,3-71.3-1.5v11.6h0c26.3,81.8,99.1,139.2,183.7,146.6-72.4,52.1-159.6,80.2-249,80.1-16.9,0-33.7-1-50.5-3v11.6c97.1,62.2,209.9,95.3,325.2,95.1v.2c390.2,0,603.6-323.3,603.6-603.6s0-8.3,0-8.3c0-1.1,0-14.1-.1-19.5,41.3-30,77-67,105.3-109.5h0v-11.6h0Z" />
                            </g>
                        </svg>
                        <div className="flex-none w-[55%] py-4 max-lg:w-fit max-md:max-w-full max-md:mx-auto max-md:h-full">
                            <div className="flex flex-col p-5 justify-between min-w-[360px] max-w-fit max-md:max-w-[360px] max-md:h-full max-md:max-h-[680px] max-md:space-y-0 space-y-10">
                                <svg className="hidden size-12 max-md:block" viewBox="0 0 2048 2048">
                                    <g>
                                        <path className="fill-tblue" d="M1908.7,884.3C1908.7,396,1512,0,1023.6,0S139.3,396,139.3,884.3s421.7,837.8,884.3,837.8v325.8c537.4-272.5,885.1-711.1,885.1-1163.7Z" />
                                        <path className="fill-white" d="M1574.1,598.3c-32.1,14.2-65.9,24.3-100.4,30.2h0c33.5-26.1,58.6-61.8,71.8-102.6h0v-11.6c-41.7,24.7-87.2,42.1-134.7,51.5-80.3-85.4-214.7-89.5-300.1-9.2-44.7,41.9-68.4,100.6-66.8,160.5h0c-.4,14,.6,28,3,42-169.7-9.2-327.7-89.6-434.9-221.5-20.5,35.2-29.7,74.1-28.6,112.2-1.8,64,25.4,127.2,77,169.8h0c-27.7-3.1-54.5-11.7-79-25.3v11.6h0v2.7c0,92.5,59.6,173.1,145.7,201.4-23.6,3.6-47.8,3-71.3-1.5v11.6h0c26.3,81.8,99.1,139.2,183.7,146.6-72.4,52.1-159.6,80.2-249,80.1-16.9,0-33.7-1-50.5-3v11.6c97.1,62.2,209.9,95.3,325.2,95.1v.2c390.2,0,603.6-323.3,603.6-603.6s0-8.3,0-8.3c0-1.1,0-14.1-.1-19.5,41.3-30,77-67,105.3-109.5h0v-11.6h0Z" />
                                    </g>
                                </svg>
                                <div className="flex flex-wrap max-md:text-[48px] text-[56px] font-bold leading-snug">
                                    <span className="text-balance">Twitout</span>&nbsp;
                                    <span className="text-balance">시작하기</span>
                                </div>
                                <div className="max-w-xs">
                                    <div className="w-full mb-5 text-2xl font-bold">
                                        <span>지금 가입하세요.</span>
                                    </div>
                                    <div data-testid="google_sign_in_container" className="">
                                        <div className="w-full h-10 bg-tlightgray">
                                            <iframe src="https://accounts.google.com/gsi/button?theme=outline&size=large&shape=circle&logo_alignment=center&text=signup_with&width=266&client_id=49625052041-kgt0hghf445lmcmhijv46b715m2mpbct.apps.googleusercontent.com&iframe_id=gsi_960735_395285&as=a4YYOo0tz3X%2BvtsMdTawxg&hl=ko" allow="identity-credentials-get" id="gsi_960735_395285" title="Google 계정으로 로그인 버튼">
                                            </iframe>
                                        </div>
                                    </div>
                                    <div className="w-full my-1">
                                        <div className="flex items-center w-full before:grow before:h-[1px] before:bg-tlightgray before:content-['']  after:grow after:h-[1px] after:bg-tlightgray after:content-['']">
                                            <span className="mx-2">또는</span>
                                        </div>
                                    </div>
                                    <Link to="/signup" role="link" data-testid="signupButton" className="flex">
                                        <div className="flex items-center justify-center w-full h-10 mb-2 rounded-full bg-tblue">
                                            <span className="font-bold text-white">
                                                <span>계정 만들기</span>
                                            </span>
                                        </div>
                                    </Link>
                                    <div className="w-full text-sm">
                                        <span>
                                            가입하시려면 쿠키 사용을 포함해 개인정보 처리방침에 동의해야 합니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="max-w-xs">
                                    <div className="mb-5">
                                        <span className="font-bold">이미 Twitout에 가입하셨나요?</span>
                                    </div>
                                    <Link to="/login" role="link" data-testid="loginButton" className="flex">
                                        <div className="flex items-center justify-center w-full h-10 mb-2 border rounded-full border-tblue">
                                            <span className="font-bold text-tblue">
                                                <span>로그인</span>
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <nav aria-label="바닥글" role="navigation">
                        <a href="https://about.x.com" dir="ltr" rel="noopener noreferrer nofollow" target="_blank" role="link">
                            <span>소개</span>
                        </a>
                        <a href="https://developer.x.com" dir="ltr" rel="noopener noreferrer nofollow" target="_blank" role="link">
                            <span>개발자</span>
                        </a>
                        <a href="/settings" dir="ltr" role="link">
                            <span>설정</span>
                        </a>
                        {/* <div dir="ltr">
                                            <span>© 2024 김지민, 김다인</span>
                                        </div> */}
                    </nav>
                </div>
                <div data-testid="google_sign_in_container">
                </div>
            </div>
        </>
    );
}

export default Hello;