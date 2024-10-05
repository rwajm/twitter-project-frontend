import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const User = (user) => {
    const location = useLocation();

    useEffect(() => {
        console.log(location);
    }, [location])

    return (
        <>
            <div className=''>
                @{location.pathname.slice(1)}'s profile
            </div>
        </>
    );
};

export default User;