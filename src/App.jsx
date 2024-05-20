import { createContext } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import posts from './data/posts';
import currentUser from './data/users';

import FeedContainer from './containers/FeedContainer';
import PostContainer from './containers/PostContainer';
import WelcomeContainer from './containers/WelcomeContainer';

export const PostContext = createContext(null);
export const CurrentUserContext = createContext(null);

function App() {
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <PostContext.Provider value={posts}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={WelcomeContainer} />
            <Route path="/feed" Component={FeedContainer} />
            <Route path="post/:postId" Component={PostContainer} />
          </Routes>
        </BrowserRouter>
      </PostContext.Provider>
    </CurrentUserContext.Provider>
  )
}

export default App
