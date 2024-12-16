import Header from "components/Home/Header";
import Content from "components/Content";
import TabBar from "components/Home/TabBar";

function Home() {
  return (
    <>
      <div>
        <div className="fixed flex flex-row top-0 items-center justify-center w-full h-14 bg-white/85 backdrop-blur-md border-solid border-b-[1px] border-b-tlightgray z-50 select-none" aria-hidden="true" draggable="false">
          <img alt="Tweetout" src="/logo192.png" className="pointer-events-none select-none size-8" draggable="false" role="presentation" />
        </div>
        {/** 글쓰기 버튼 컴포넌트로 분리하여 기능 구현 */}
        <TabBar />
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="w-full max-w-2xl border-solid border-tlightgray border-[1px]">
          <Header />
          <Content />
        </div>
      </div>
    </>
  );
}

export default Home;