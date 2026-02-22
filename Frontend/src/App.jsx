import React from 'react'
import{BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost.jsx'
import Feed from './pages/feed.jsx'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/create-post' element={< CreatePost />} />
          <Route path='/Feed' element={<Feed />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App