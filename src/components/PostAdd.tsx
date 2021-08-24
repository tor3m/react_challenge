import React, { useState, ChangeEvent } from "react";
import { useEffect } from "react";
import PostDataService from '../services/PostService';
import IPostData from '../types/IPostData';

const AddPostCard: React.FC = () => {
  const initialPostsState: IPostData = {
    title: "",
    image_url: "",
    content: "",
    lat: "",
    long: "",
  };

  const [posts, setPosts] = useState<IPostData>(initialPostsState);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (posts.title && posts.image_url && posts.content && posts.lat && posts.long) {
      setDisabled(false);
    }
  }, [posts]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPosts({ ...posts, [name]: value });
  };

  const savePost = async () => {
    let data = {
      id: null,
      title: posts.title,
      image_url: posts.image_url,
      content: posts.content,
      lat: posts.lat,
      long: posts.long,
    };

    try {
      const response = await PostDataService.create(data)
      setPosts(response.data as IPostData);
      setSubmitted(true);
    }
    catch(e: any)  {
        console.log(e);
      }
  };

  const newPost = () => {
    setPosts(initialPostsState);
    setSubmitted(false);
  };

  return (
    <div style={{maxWidth: "500px", margin: "auto"}}>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button onClick={newPost}>
            Add Post
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              required
              value={posts.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="content">Description</label>
            <input
              type="text"
              required
              value={posts.content}
              onChange={handleInputChange}
              name="content"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image_url">Image</label>
            <input
              type="text"
              required
              value={posts.image_url}
              onChange={handleInputChange}
              name="image_url"
            />
          </div>
   
          <div className="form-group">
            <label htmlFor="lat">Latitude</label>
            <input
              type="text"
              required
              value={posts.lat}
              onChange={handleInputChange}
              name="lat"
            />
          </div>

          <div className="form-group">
            <label htmlFor="long">Longitud</label>
            <input
              type="text"
              required
              value={posts.long}
              onChange={handleInputChange}
              name="long"
            />
          </div>
          
          <button onClick={savePost} type="submit" disabled={disabled} style={{width: "100%"}}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};


export default AddPostCard;