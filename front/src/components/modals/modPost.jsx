import {Modal} from  'react-modal-comp'
import {useMutation, useQueryClient} from 'react-query'
import { useFormik } from "formik";
import { editPost, createPost } from '../../api';

export default function ModPost({visible, onCancel, values = {title: '', text: '', publishDate: ''}}){
    const {title, text, publishDate, id} = values
    const isNew = !title && !text && !publishDate;
    const queryClient = useQueryClient();
    const mutateEdit = useMutation(editPost, {
        onSuccess: () => queryClient.invalidateQueries('posts') 
    })
    const mutateCreate = useMutation(createPost, {
        onSuccess: () => queryClient.invalidateQueries('posts') 
    })
    const formik = useFormik({
        initialValues: { title, text, publishDate },
        onSubmit: values => {
            isNew ? mutateCreate.mutate(values) : mutateEdit.mutate({id, post: values})
        },
      });

    mutateEdit.isSuccess && onCancel()
    mutateCreate.isSuccess && onCancel()
    return (
        <Modal showModal={visible} closeModal={onCancel}>
	        <form onSubmit={formik.handleSubmit} className='modal-container'>
                <div className='modal-form'>
                    <span>Title</span>
                    <input
                        type='text'
                        id="title"
                        name="title"
                        onChange={formik.handleChange}
                        defaultValue={formik.values.title}
                    />
                </div>
                <div className='modal-form'>
                    <span>Text</span>
                    <input
                        type='text' 
                        id="text"
                        name="text"
                        onChange={formik.handleChange}
                        defaultValue={formik.values.text}
                    />
                </div>
                <div className='modal-form'>
                    <span>Publish date</span>
                    <input 
                        type='text' 
                        id="publishDate"
                        name="publishDate"
                        onChange={formik.handleChange}
                        defaultValue={formik.values.publishDate}                  
                    />
                </div>
                <input type="submit" />
            </form>
        </Modal>
    )
}