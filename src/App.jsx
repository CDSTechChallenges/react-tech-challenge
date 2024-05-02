import { createContext } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import posts from './data/posts';

import FeedContainer from './containers/FeedContainer';
import PostContainer from './containers/PostContainer';

export const PostContext = createContext(null);

function App() {
  return (
    <PostContext.Provider value={posts}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={FeedContainer} />
          <Route path="post/:postId" Component={PostContainer} />
        </Routes>
      </BrowserRouter>
    </PostContext.Provider>
  )
}

export default App
