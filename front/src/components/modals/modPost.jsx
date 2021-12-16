import {Modal} from  'react-modal-comp'
import {useMutation, useQueryClient} from 'react-query'
import { editPost } from '../../api';

export default function ModPost({visible, onCancel, values}){
    const {title, text, publishDate} = values ? values : ''
    const isNew = !title && !text && !publishDate;
    const queryClient = useQueryClient();
    const mutateEdit = useMutation(editPost, {
        onSuccess: () => queryClient.invalidateQueries('posts') 
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const post = {title: 'holiwi', text: 'holiwi'}
        mutateEdit.mutate({id: 2, post})
    }

    return (
        <Modal showModal={visible} closeModal={onCancel}>
	        <form onSubmit={handleSubmit} className='modal-container'>
                <div className='modal-form'>
                    <span>Title</span>
                    <input type='text' defaultValue={title}/>
                </div>
                <div className='modal-form'>
                    <span>Text</span>
                    <input type='text' defaultValue={text}/>
                </div>
                <div className='modal-form'>
                    <span>Publish date</span>
                    <input type='text' defaultValue={publishDate}/>
                </div>
                <input type="submit" />
                {isNew ? <div>New</div> : <div>noNew</div>}
            </form>
        </Modal>
    )
}