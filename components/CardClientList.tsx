"use client"

import {use} from "react";
import Link from "next/link";
import {Cards} from "@/components/Cards";
import {PostResponse} from "@/lib/types/posts";

export  default function CardClientList ({loadPost}: {loadPost: Promise<PostResponse[]>}) {
    // Use the hook to consume the promise
    const posts = use(loadPost)
    console.log(posts)
    return (
        <>
            <div className="p-4">
                <h2>Hello Next.js!</h2>
                <div className="grid grid-cols-4 gap-2">
                    {
                        posts.map((post, index) => (
                            <Link
                                key={index}
                                href={`/dashboard/blog/${post.id}`}>
                                <Cards
                                    key={post.id}
                                    userId={post.userId}
                                    id={post.id}
                                    title={post.title}
                                    body={post.body}
                                />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>

    )
}