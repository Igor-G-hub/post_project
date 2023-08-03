export const getAllPosts = async () => {
    return fetch(`${process.env.REACT_APP_API_DOMAIN}/posts`).then(res => res ? res.json() : []).catch(err => console.error(err))
}

export const getPostById= async (id: string) => {
    return fetch(`${process.env.REACT_APP_API_DOMAIN}/posts/${id}`).then(res => res ? res.json(): null).catch(err => console.error(err))
}

export const getAllComments = async () => {
    return fetch(`${process.env.REACT_APP_API_DOMAIN}/comments`).then(res => res ? res.json() : []).catch(err => console.error(err))
}

export const getCommentsByPostId= async (id: string) => {
    return fetch(`${process.env.REACT_APP_API_DOMAIN}/posts/${id}/comments`).then(res => res ? res.json(): []).catch(err => console.error(err))
}

export const getAllUsers = async () => {
    return fetch(`${process.env.REACT_APP_API_DOMAIN}/users`).then(res => res ? res.json(): []).catch(err => console.error(err))
}

