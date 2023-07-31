// import { useSession } from "next-auth/react";
import React from "react";
import NoteForm from "~/components/noteForm/noteForm";
import { api, type RouterOutputs } from "~/utils/api";
type Topic = RouterOutputs["topic"]["getAll"][0]
const Topic = () => {
    // const { data: sessionData } = useSession()
    const { data: topics, refetch, isLoading } = api.topic.getAll.useQuery()
    const createTopic = api.topic.create.useMutation({
        onSuccess: () => refetch()
    })
    const handleTopicClick = (topic: Topic) => {
        console.log(topic)
    }
    return (
        <div className="flex min-h-[calc(100vh-64px)] shadow-[0px_0px_5px_0px_rgba(0,94,155,0.15)] rounded-md bg-gradient-to-b from-blue-50  via-indigo-50  to-blue-200 ">
            <div className="w-[30%] border-r border-gray-300 p-6 ">
                <div className="flex justify-between mb-5">
                    <h1 className="text-blue-600 font-bold text-2xl">All topics</h1>
                    <button className="py-1 px-3 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500  to-blue-600 ">Add</button>
                </div>
                <div className="gap-1 flex flex-col">
                    {topics?.map(topic => <div key={topic.id} className="font-medium cursor-pointer py-2 px-3 border border-blue-300 rounded-md text-gray-700" onClick={() => handleTopicClick(topic)}>{topic.title}</div>)}
                </div>
                <div>
                    <input type="text" className="w-80 border border-gray-200 rounded-md py-2 px-3" placeholder="Enter topic" onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            createTopic.mutate({
                                title: e.currentTarget.value
                            })
                            e.currentTarget.value = ""
                        }

                    }} />
                </div>
            </div>
            <div className=" w-[70%]">
                <NoteForm />
            </div>
        </div>
    )
}
export default Topic