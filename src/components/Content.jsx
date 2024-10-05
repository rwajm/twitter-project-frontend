import { useEffect, useState } from "react";
import axios from 'axios';

import Tweet from 'components/Tweet';

import Dropdown from 'components/Dropdown';

let eng = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis fermentum felis quis condimentum. Etiam fringilla in odio sed placerat.\r\nQuisque pretium blandit orci, sit amet pulvinar mi volutpat vel. Mauris vulputate faucibus volutpat.\r\nQuisque lobortis elit ac molestie imperdiet. Praesent euismod ipsum et odio mattis tincidunt. Nam eros erat, faucibus vitae aliquam eu, cursus eu lacus.\r\nVivamus eu nisl sem. Vivamus mattis aliquam lectus eget volutpat. Nullam facilisis vehicula metus vel volutpat. Nunc rhoncus eu libero id rhoncus.";

let kor = "공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을 진다.\r\n\r\n위원은 정당에 가입하거나 정치에 관여할 수 없다. 모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다.\r\n\r\n국가의 세입·세출의 결산, 국가 및 법률이 정한 단체의 회계검사와 행정기관 및 공무원의 직무에 관한 감찰을 하기 위하여 대통령 소속하에 감사원을 둔다.\r\n\r\n모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다.\r\n\r\n대통령의 선거에 관한 사항은 법률로 정한다. 헌법개정안은 국회가 의결한 후 30일 이내에 국민투표에 붙여 국회의원선거권자 과반수의 투표와 투표자 과반수의 찬성을 얻어야 한다.";

// //dummy data
const dummyList = [
  {
    id: 1,
    date: '2024-07-14T10:25:18.000Z',
    userId: 'id_1234',
    userName: '닉네임',
    userProfile: 'https://pbs.twimg.com/profile_images/1519473997263810560/5OiJhV9h_400x400.jpg',
    text: eng,
    likeData: true
  },
  {
    id: 2,
    date: '2024-07-13T16:03:18.000Z',
    userId: 'Totaly_Exhausted',
    userName: '개피곤함',
    userProfile: 'https://대충잘못된주소.com/',
    text: kor,
    likeData: false
  },
  {
    id: 3,
    date: '2024-07-08T06:03:18.000Z',
    userId: 'Tweeter4325421',
    userName: 'Tweeter',
    userProfile: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_x96.png',
    text: "short tweet",
    likeData: true
  },
  {
    id: 4,
    date: '2024-06-20T23:59:18.000Z',
    userId: 'id_1234',
    userName: '닉네임',
    userProfile: 'https://pbs.twimg.com/profile_images/1519473997263810560/5OiJhV9h_400x400.jpg',
    text: kor,
    likeData: true
  },
  {
    id: 5,
    userId: 'random3948',
    userName: '구독계',
    userProfile: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_x96.png',
    date: '2023-12-31T14:53:18.000Z',
    text: eng,
    likeData: false
  }
];

const Content = () => {

  const [tweetList, setTweetList] = useState([]);

  // 아직 무한스크롤 적용하지 않음
  useEffect(() => {
    //setTweetList(dummyList);
    axios.get(`http://localhost:8080/tweets/home`,)
      .then(res => setTweetList(...tweetList, ...res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="relative w-full">
      {tweetList
        .map((tweet) => {
          return (
            <Tweet
              key={tweet.id}
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
              prevTweetId={tweet.prevTweetId}
              // likeData={tweet.likeData}
            />
          );
        })}
      <div className="h-[200px]"></div>
    </div>
  );
};
export default Content;