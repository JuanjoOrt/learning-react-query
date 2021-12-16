const api = 'http://localhost:3001'


const fetchApi = (method, path, body) => {
    return fetch(`${api}/${path}`, {
        headers: {
            'Content-type': 'application/json'
        },
        method,
        body: JSON.stringify(body)
    }).then(response => response.json())
}


export const getPosts = () => {
    return fetchApi('GET', 'posts')
}

export const createPost = (post) => {
    return fetchApi('POST', 'posts', post)
}

export const editPost = ({id, post}) => {
    return fetchApi('PUT', `posts/${id}`, post)
}

export const deletePost = (id) => {
    return fetchApi('DELETE', `posts/${id}`)
}