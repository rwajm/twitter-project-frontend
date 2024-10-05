import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import HelloPage from "./pages/HelloPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import ComposePage from "./pages/ComposePage"
import UserPage from "./pages/UserPage"
import TweetPage from "./pages/TweetPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HelloPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='home' element={<HomePage />} />
        <Route path='compose/post' element={<ComposePage />} />
        <Route path='/:userId' element={<UserPage />} />
        <Route path='/:userId/status/:tweetId' element={<TweetPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;