import React, { useState, useEffect, useCallback } from "react";
import IPostData from '../types/IPostData';
import PostDataService from '../services/PostService';
import PostListItem from './PostListItem';

const PostList = () => {
  const [posts, setPosts] = useState<Array<IPostData>>([]);
  const [currentPost, setCurrentPost] = useState<IPostData | null>(null);

  const retrievePosts = useCallback(async () => {
    try {
      const response = await PostDataService.getAll()
      setPosts(response.data);
    }
    catch(e: any) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    retrievePosts();
  }, [retrievePosts]);

  useEffect(() => {
    if (posts?.length > 0 && !currentPost) {
      setCurrentPost(posts[0])
    }
  }, [posts, currentPost]);

  const setActivePost = (post: IPostData) => {
    setCurrentPost(post)
  };

  return (
    <div className="App-post-list">
      <div className="post-list">
        <h4>Find your next destination</h4>
        <ul className="list">
          {posts &&
            posts.map((post) => (
              <li 
                className={"list-item" + (post.id === currentPost?.id ? "-active" : "") }
                onClick={() => setActivePost(post)}
                key={post.id}
              >
                {post.title}
              </li>
            ))}
        </ul>
      </div>
      <div className="post-list-description">
        {currentPost ? (
         <PostListItem post={currentPost} />
        ) : (
          <p>Please click on a Post...</p>
        )}
      </div>
    </div>
  );
};

export default PostList;