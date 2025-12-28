import {Button} from "@/components/ui/button";
import {Bell} from "lucide-react";
import {Cards} from "@/components/Cards";
import CardClientList from "@/components/CardClientList";
import {loadpost} from "@/lib/data/fetchPost";
import {Loading} from "@/components/Loading";

export default function Home() {
    return (
        <>
            <div>
                <div className="h-3i5 flex items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-10">
                    <h2>HomePage</h2>
                    <Button variant={"outline"}>Click Me</Button>
                    <Button variant={"secondary"}>secondary</Button>
                    <Button variant={"destructive"}>destructive</Button>
                    <Button variant="outline" size="icon" aria-label="Submit">
                        <Bell/>
                    </Button>
                    <Cards
                        userId={1}
                        id={1}
                        title={"សួស្តី LP-Win"}
                        body={"Sudo"}
                    />

                </div>

                <div className="p-3">
                    <Loading/>
                    <CardClientList loadPost={loadpost()}/>

                </div>

            </div>
        </>
    );
}
