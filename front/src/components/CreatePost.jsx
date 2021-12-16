import { useState } from 'react'
import {BiBookmarkPlus} from 'react-icons/bi'

export default function CreatePost({handleCreate}){

    return (
        <div className='button-container'>
            <button className='button-add' onClick={handleCreate}>
                <BiBookmarkPlus />  
                Crear Post 
            </button>
        </div>

    )
}