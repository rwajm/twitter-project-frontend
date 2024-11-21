import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Tweet from "components/Tweet";

const dummy =
{
    id: 1,
    date: '2024-07-14T10:25:18.000Z',
    userId: 'id_1234',
    userName: '닉네임',
    userProfile: 'https://pbs.twimg.com/profile_images/1519473997263810560/5OiJhV9h_400x400.jpg',
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis fermentum felis quis condimentum. Etiam fringilla in odio sed placerat.\r\nQuisque pretium blandit orci, sit amet pulvinar mi volutpat vel. Mauris vulputate faucibus volutpat.\r\nQuisque lobortis elit ac molestie imperdiet. Praesent euismod ipsum et odio mattis tincidunt. Nam eros erat, faucibus vitae aliquam eu, cursus eu lacus.\r\nVivamus eu nisl sem. Vivamus mattis aliquam lectus eget volutpat. Nullam facilisis vehicula metus vel volutpat. Nunc rhoncus eu libero id rhoncus.",
    likeData: true
};

const TweetPage = () => {
    const [tweet, setTweet] = useState();
    const location = useLocation();

    useEffect(() => {
        const regex = /\/tweets\/(\d+)/;
        const tweetId = location.pathname.match(regex)[1];
        axios.get(`http://localhost:8080/tweets/${tweetId}`)
            .then(res => setTweet(res.data))
            .catch(err => { setTweet(dummy); console.log(err); })
    }, [location]);

    return (
        <>
            <div className="flex flex-row gap-4 items-center w-full h-14 bg-white/85 backdrop-blur-md border-solid border-b-[1px] border-b-tlightgray z-50 px-4" draggable="false">
                {/** 추후 컴포넌트로 분리해서 기능 구현; useNavigate */}
                <button className="relative flex items-center justify-center -left-2 size-9">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5"> <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
                    </svg>
                </button>
                <span className="text-xl font-bold">트윗</span>
            </div>
            {tweet ? (
                <Tweet
                    tweetId={tweet.id}
                    userId={tweet.userId}
                    userName={tweet.userName}
                    userProfile={tweet.userProfile}
                    date={tweet.date}
                    text={tweet.text}
                    // images={tweet.images}
                    // mentions={tweet.mentions}
                    // retweet={tweet.retweet}
                    likes={tweet.likes}
                    // views={tweet.views}
                    // prevTweetId={tweet.prevTweetId}
                    likeData={tweet.likeData}
                />
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default TweetPage;