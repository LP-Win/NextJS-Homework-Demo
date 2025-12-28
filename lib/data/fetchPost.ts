import {PostResponse} from "@/lib/types/posts";

const BASE_API = process.env.NEXT_PUBLIC_API_URL

// fetching Post API
export async function loadpost() {
    const data = await fetch(`${BASE_API}posts`);
    const posts: PostResponse[] = await data.json();
    return posts;
}

// Function to det detail post by id
export async function fetchDetailPost(id: string) {
    const data = await fetch(`${BASE_API}posts/${id}`);
    const post = await data.json();
    return post;
}

