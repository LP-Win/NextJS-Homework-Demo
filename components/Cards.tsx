import {Card, CardAction, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {PostResponse} from "@/lib/types/posts";

export function Cards({
                          userId,
                          id,
                          title,
                          body
                      }: PostResponse) {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="line-clamp-1">{title}</CardTitle>
                <CardDescription className="line-clamp-3">{body}</CardDescription>
                <CardAction>
                    <Button variant="link">{userId} | {id}</Button>
                </CardAction>
            </CardHeader>
        </Card>
    )
}