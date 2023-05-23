import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import Radium from "radium";

function PostDetail(){
    const [post,setPost] = useState({});
    const postId= useParams().postId;
    useEffect(()=>{
        db.collection("posts").doc(postId).get().then((snapshot)=>{

            // console.log("snapshot",snapshot.data());
            setPost(snapshot.data());
        })
    },[postId])
    return (
        <div className="post-detail">
            <h1 style={styles.heading}>{post.title}</h1>
            <p style={styles.postDetail}>{post.content}</p>
        </div>
    )
}

export default Radium(PostDetail);

const styles={
    postDetail:{
       color:"brown",
        "@media(max-width:720px)":{
            color:"pink",
        }
    },
    heading:{
        textAlign:"center",
        
        ":hover":{
            color:"red",
            border:"2px solid black"
        }
    },
}