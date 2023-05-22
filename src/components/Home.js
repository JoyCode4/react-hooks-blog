import { useEffect, useState } from "react";
import {db} from "../firebase";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Blogheading = styled.h1`
text-align: center;
color: #2196f3;
margin-bottom: 2px;
`;

const PostSubTitle =styled.p`
font-size: 13px;
`;


const Post = styled.div`
    border: 1px solid #e1e1e1;
    padding: 10px 10px;
    border-radius: 5px;
    margin-top: 10px;

    // hover on particular class, here is spost class
    &:hover{
        border:1px solid #2196f3;
    }

    // h3 tag inside this post class
    h3{
        margin: 0;
        padding: 0;
        font-size: 25px;
        font-weight: bold;
        color: #9c9c9c;
    }

    // a tag inside this post class
    a{
        text-decoration: none;
    }

    @media (max-width:800px){
        border: 1px solid black;
    }
`


function Home(){
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        // db.collection("posts").get().then((snapshot)=>{
        //     const posts = snapshot.docs.map((doc)=>{
        //         return {
        //             id:doc.id,
        //             ...doc.data()
        //         }
        //     })

        //     // console.log(posts);
        //     setPosts(posts);
        // })
        db.collection("posts").onSnapshot((snapshot)=>{
            const posts = snapshot.docs.map((doc)=>{
                return {
                    id:doc.id,
                    ...doc.data()
                }
            })

            // console.log(posts);
            setPosts(posts);
        })
    },[]);
    return (
        <div className="home">
            <Blogheading>Tech Blog</Blogheading>
            <div style={styles.div} id="blog-by">Jayesh</div>
            {posts.map((post,index)=>(
                <Post className="post" key={`post-${index}`}>
                    <Link to={`/post/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                    <PostSubTitle>{post.subTitle}</PostSubTitle>
                </Post>
            ))}
        </div>
    )
}

export default Home;
const styles = {
    heading:{
        marginTop:30,
        fontSize:50
    },
    div:{
        fontWeight:"bold",
    }
}