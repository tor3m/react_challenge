import React, { useState, useEffect, ChangeEvent } from "react";
import { RouteComponentProps } from 'react-router-dom';
import PostDataService from "../services/PostService";
import IPostData from "../types/IPostData";

interface RouterProps {
  id: string;
}

type Props = RouteComponentProps<RouterProps>;

const Post: React.FC<Props> = (props: Props) => {
  const initialPostState = {
    id: null,
    title: "",
    content: "",
    image_url: "",
    lat: "",
    long: "",
    published: false
  };
  const [currentPost, setCurrentPost] = useState<IPostData>(initialPostState);
  const [message, setMessage] = useState<string>("");

  const getPost = async (id: string) => {
    try {
      const response = await PostDataService.get(id)
      setCurrentPost(response.data);
    }
    catch(e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPost(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentPost({ ...currentPost, [name]: value });
  };

  const updatePost = async () => {
    try {
      await PostDataService.update(currentPost.id, currentPost)
      setMessage("The Post was updated successfully!");
    }
    catch (e) {
      console.log(e);
    }
  };

  const deletePost = async () => {
    try {
      await PostDataService.remove(currentPost.id)
      props.history.push("/");
    }
    catch (e){
      console.log(e);
    }
  };

  return (
    <div style={{maxWidth: "500px", margin: "auto"}}>
      {currentPost ? (
        <div>
          <h4 style={{textAlign: "center"}}>Post</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                value={currentPost.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                name="content"
                value={currentPost.content}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Image</label>
              <input
                type="text"
                className="form-control"
                name="image_url"
                value={currentPost.image_url}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Latitude</label>
              <input
                type="text"
                className="form-control"
                name="lat"
                value={currentPost.lat}
                onChange={handleInputChange}
              />
            </div>     
            <div className="form-group">
              <label htmlFor="description">Longitude</label>
              <input
                type="text"
                className="form-control"
                name="long"
                value={currentPost.long}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <div>  
            <button type="submit" onClick={updatePost} style={{width: "50%"}}>
              Update
            </button>
            <button onClick={deletePost} style={{width: "50%", background: "red", opacity: "0.75"}}>
              Delete
            </button>
          </div>
          <p style={{textAlign: "center"}}>{message}</p>
        </div>
      ) : (
        <div>
        </div>
      )}
    </div>
  );
};

export default Post;