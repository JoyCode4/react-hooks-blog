import {db} from "../firebase";
import { useFormInput } from "../hooks";
// import classes from "./Button.module.css";
import styled,{css} from "styled-components";

const StyledButton = styled.button`
    font-size: larger;
    font-family: serif;
    color: rgb(27, 24, 24);
    padding: 10px;
    background-color: ${(props)=> (props.primary ? "cyan" : "#9c9c9c")};
    border-radius: 5px;
    border: none;
    cursor : pointer;
    ${(props)=>(props.primary && css`
        border:1px solid black;
        background-color:${props.bgColor}
    `)}
`

function CreatePost(){
    const title=useFormInput();
    const subTitle=useFormInput();
    const content=useFormInput();
    
    function handleSubmit(e){
        e.preventDefault();

        console.log("Title", title);
        console.log("SubTitle", subTitle);
        console.log("Content", content);

        db.collection("posts").add({
            title:title.value,
            subTitle:subTitle.value,
            content:content.value,
            createdAt:new Date(),  
        })
    }

    return (
        <div className="create-post">
            <h1>Create Post</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Title</label>
                    <input {...title}/>
                </div>

                <div className="form-field">
                    <label>Sub Title</label>
                    <input {...subTitle}/>
                </div>

                <div className="form-field">
                    <label>Content</label>
                    <textarea {...content}></textarea>
                </div>

                {/* <button className="create-post-btn">Create Post</button> */}
                {/* <button className={classes.buttonofthePostCreate}>Create Post</button> */}

                {/* <StyledButton>Create Post</StyledButton> */}
                <StyledButton primary bgColor="green">Create Post</StyledButton>

            </form>
            
        </div>
    )
}

export default CreatePost;