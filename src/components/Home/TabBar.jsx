import { Link } from 'react-router-dom';

const TabBar = (user) => {
  return (
    <div className="tabbar fixed bottom-0 w-full bg-white border-solid border-t-[1px] border-t-tlightgray z-50">
      <nav className='grid w-full grid-flow-col h-14 justify-stretch'>
        <Link to={`/${user.id}`} className="flex flex-col items-center justify-center size-full">
          <div className="button-effect">
            <img alt={`${user.name}님의 프로필 사진`} src="https://pbs.twimg.com/profile_images/1519473997263810560/5OiJhV9h_400x400.jpg" className="profile size-6 fill-tblack" />
          </div>
        </Link>
        <Link to='/home' className="flex flex-col items-center justify-center size-full">
          <div className="button-effect">
            <svg aria-label="홈" role="img" viewBox="0 0 24 24" className="size-6 fill-tblack">
              <title>홈</title>
              <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z" />
            </svg>
          </div>
        </Link>
        <Link to='/search' className="flex flex-col items-center justify-center size-full">
          <div className="button-effect">
            <svg aria-label="검색" role="img" viewBox="0 0 24 24" className="size-6 fill-tblack">
              <title>검색</title>
              <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" />
            </svg>
          </div>
        </Link>
      </nav>
    </div>
  );
};
export default TabBar;