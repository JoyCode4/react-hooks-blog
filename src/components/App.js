import { Route, Routes} from "react-router-dom";
import {Navbar,Home,CreatePost, PostDetail} from "./index";
import {StyleRoot} from "radium";

function App() {
  return (
    <div className="App container">
      <StyleRoot>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/post/:postId" element={<PostDetail/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
        </Routes>
      </StyleRoot>
    </div>
  );
}

export default App;
