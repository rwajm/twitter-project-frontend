const TopBar = () => {
    return (
      <div className="fixed flex flex-col top-0 items-center justify-center w-full h-14 bg-white/85 backdrop-blur-md border-solid border-b-[1px] border-b-tlightgray z-50 select-none" draggable="false">
        <img alt="Twitout" src="../logo192.png" className="pointer-events-none select-none size-8" draggable="false"/>
      </div>
    );
  };
  export default TopBar;