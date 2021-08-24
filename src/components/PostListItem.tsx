import { Link } from 'react-router-dom';
import IPostData from '../types/IPostData';

const Post = ({post} : {post: IPostData}) => {
    return <div>
      <h2 className="post-title">
        {post.title}
      </h2>
      <p className="post-description">
        {post.content}y
      </p>
      <div style={{marginBottom: "10px" }}>
        <img className="image_url" src={post.image_url} alt={post.image_url} />
      </div>
      <iframe 
        title="myframe"
        frameBorder="0" 
        scrolling="no" 
        marginHeight={0} 
        marginWidth={0}
        src={`http://maps.google.com/maps?q=${post.lat},${post.long}&hl=es&z=14&output=embed`}
      >
      </iframe>
      <p>
      <Link
        to={"/" + post.id}
        className=""
      >
        Edit
      </Link>
      </p>
    </div>
  }

  export default Post
  