import {Skeleton} from "@/components/ui/skeleton"

export function Loading() {
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="flex flex-col space-y-3">
                        <Skeleton className="w-full aspect-5/2 rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full"/>
                            <Skeleton className="h-4 w-3/4"/>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}
