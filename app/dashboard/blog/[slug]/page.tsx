import PostCard from "@/app/components/PostCard";

async function fetchDetailPost(id:string){
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts/${id}`);
    const post = await data.json();
    return post;
}

export default async function Blog(
{
    params
}: 
{
    params: Promise<{slug: string}>
}) {
    const {slug} = await params
    const post = await fetchDetailPost(slug)
    return(
        <div>
            <h2>Blog Page {slug}</h2>
            <PostCard
                key={post.id}
                userId={post.userId}
                id={post.id}
                title={post.title}
                body={post.body}
            />
        </div>
    )
}