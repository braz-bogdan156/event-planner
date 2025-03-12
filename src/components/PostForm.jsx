import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
         ...post, id: Date.now()
        }
        create(newPost);
        setPost({ title: "", body: "" });
      };

    const [post, setPost] = useState({ title: "", body: "" });
    return (
        <form>
        {/* {Управляемый компонент} */}
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Name of post"
        />
       <MyInput
          type="text"
          placeholder="Description of post"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <MyButton onClick={addNewPost}>Create a post</MyButton>
      </form>
    );
};

export default PostForm;