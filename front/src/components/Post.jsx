import {BiEditAlt, BiTrashAlt} from "react-icons/bi"
import {deletePost} from '../api'
import { useQueryClient, useMutation } from 'react-query'
import { useState } from "react";
import ModPost from "./modals/modPost";

export default function Post({dataPost, handleEdit}){
    const queryClient = useQueryClient();

    const {mutate} = useMutation(deletePost, {
        onSuccess: () => queryClient.invalidateQueries('posts') 
    })
    
    const handleDeletePost = () => {
        mutate(dataPost.id)
    }

    return (
        <div className='post-container'>
            <div className='post-header'>
                <div>{dataPost.title}</div>
                <div className="post-header-right">
                    <span className="post-date">{dataPost.publishDate}</span>
                    <button className="button-mod" onClick={() => handleEdit(dataPost)}><BiEditAlt/></button>
                    <button className="button-del" onClick={handleDeletePost}><BiTrashAlt/></button>
                </div>
            </div >
            <div className='post-content'> {dataPost.text}</div>
        </div>
    )
}