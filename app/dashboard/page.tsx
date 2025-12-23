import Link from "next/link";
import PostCard from "../components/PostCard";
import { PostResponse } from "../lib/posts";

export default async function Page() {
  const BASE_API = 'https://jsonplaceholder.typicode.com/';
  const data = await fetch(`${BASE_API}posts`);
  const posts:PostResponse[] = await data.json();
  return (
    <>
      <div className="p-4">
        <h2>Hello Next.js!</h2>
      <div className="grid grid-cols-4 gap-2">
        {
        posts.map((post) => (
          <>
            <Link href={`/dashboard/blog/${post.id}`}>
            <PostCard
              key={post.id}
              userId={post.userId}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          </Link>
          </>
        ))
      }
      </div>
      </div>
    </>

  )
}