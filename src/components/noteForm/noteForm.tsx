import React from "react";
import { api } from "~/utils/api";
import { useState } from "react";

const NoteForm = () => {
    const [note, setNote] = useState({ title: "", content: "" })
    const createNote = api.note.create.useMutation()

    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log(note)
        createNote.mutate({
            ...note, topicId: "clkl3t2fm0003utygvif6kae8"
        })
        console.log("Note added successfully")
        setNote({ title: "", content: "" })
    }
    return (
        <div>
            <div className="py-6 px-10 border-b border-gray-300 flex justify-between">
                <h1 className="text-blue-600 font-semibold text-xl">This is new topic</h1>
                <div>
                    <button className="py-1 px-3 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500  to-blue-600 ">Add</button>
                </div>
            </div>
            <div>

            </div>

        </div>

        // <form onSubmit={handleSubmit}>
        //     <input type="text" placeholder="Title" name="title" onChange={(e) => setNote({ ...note, title: e.target.value })} value={note.title} />
        //     <input type="text" placeholder="Content" name="content" value={note.content} onChange={(e) => setNote({ ...note, content: e.target.value })} />
        //     <button type="submit">Add note</button>
        // </form>
    )
}
export default NoteForm;