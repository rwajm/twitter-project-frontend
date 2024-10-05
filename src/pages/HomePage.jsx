import Header from "components/Home/Header";
import TopBar from "components/Home/TopBar";
import Content from "components/Content";
import TabBar from "components/Home/TabBar";

function Home() {
  return (
    <>
      <div>
        <TabBar />
        <TopBar />
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