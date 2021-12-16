import { useState } from "react"
import {getPosts} from "../api"
import CreatePost from "./CreatePost"
import Post from './Post'
import {useQuery} from 'react-query'
import ModPost from "./modals/modPost"

export default function PostsList(){
    const {isError, isLoading, isFetching, data = []} = useQuery('posts', getPosts, {refetchOnWindowFocus: false})
    const loading = isLoading || isFetching
    const [visible, setVisible] = useState(false)
    const [postToEdit, setPostToEdit] = useState(null)

    const handleEdit = (data) => {
        setPostToEdit(data)
        setVisible(true)
    }

    const handleCreate = () => {
        setVisible(true)
    }

    const handleCloseModal = () => {
        setVisible(false)
        setPostToEdit(null)
    }

    return (
        <div className='posts-list-container'>
            <div>
                {isError && <div>Error...</div>}
                {loading && <div>Loading...</div>}
                {!loading && data.map((postData, index) => <Post key={index} dataPost={postData} handleEdit={handleEdit}/>  )}
                <ModPost visible={visible} onCancel={handleCloseModal} values={postToEdit}/>
            </div>
            <CreatePost handleCreate={handleCreate}/>
        </div>
    )
}