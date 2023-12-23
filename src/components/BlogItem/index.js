import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogData} = props
  return (
    <Link to={`/blog/${blogData.id}`}>
      <div className="blog-item-container">
        <img
          src={blogData.imageUrl}
          className="Item-image"
          alt={blogData.title}
        />
        <div className="details-container">
          <p>{blogData.topic}</p>
          <h1>{blogData.title}</h1>
          <div className="author-info-container">
            <img
              src={blogData.avatarUrl}
              className="avatar-image"
              alt={blogData.author}
            />
            <p>{blogData.author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
