
import { PostResponse } from "../lib/types/posts";

export default function PostCard({
  userId = 0, 
  id = 0, 
  title = "Unname", 
  body = "No description"
}: PostResponse) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '1rem', 
      margin: '1rem 0', 
      borderRadius: '8px' 
    }}>
      <h2 className="line-clamp-1">Title: {title}</h2>
      <p className="line-clamp-2">Description: {body}</p>
      <p>UserID: {userId} | ID: {id}</p>
    </div>
  );
}