const TabBar = () => {
    return (
      <div className="fixed bottom-0 left-0 h-14 w-screen bg-white grid grid-flow-col justify-stretch border-solid border-t-[1px] border-t-tlightgray">
        <button className="size-full">
          <div className="button-outercontent">
            <img alt="{닉네임}님의 프로필 사진" src="https://pbs.twimg.com/profile_images/1519473997263810560/5OiJhV9h_400x400.jpg" className="button-content profile"/>
          </div>
        </button>
        <button className="size-full">
          <div className="button-outercontent">
            <svg aria-label="홈" role="img" viewBox="0 0 24 24" className="button-content">
              <title>홈</title>
              <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z" />
            </svg>
          </div>
        </button>
        <button className="size-full">
          <div className="button-outercontent">
            <svg aria-label="검색" role="img" viewBox="0 0 24 24" className="button-content">
              <title>검색</title>
              <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" />
            </svg>
          </div>
        </button>
      </div>
    );
  };
  export default TabBar;