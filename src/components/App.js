import { Route, Routes} from "react-router-dom";
import {Navbar,Home,CreatePost, PostDetail} from "./index";

function App() {
  return (
    <div className="App container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post/:postId" element={<PostDetail/>}/>
        <Route path="/create-post" element={<CreatePost/>}/>
      </Routes>
    </div>
  );
}

export default App;
