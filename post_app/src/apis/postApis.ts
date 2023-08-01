export const getAllPosts = async () => {
    return fetch(`${process.env.REACT_APP_API_DOMAIN}/posts`).then(res => res ? res.json() : []).catch(err => console.error(err))
}

export const getAllComments = async () => {
    return fetch(`${process.env.REACT_APP_API_DOMAIN}/comments`).then(res => res ? res.json() : []).catch(err => console.error(err))
}

export const getAllUsers = async () => {
    return fetch(`${process.env.REACT_APP_API_DOMAIN}/users`).then(res => res ? res.json(): []).catch(err => console.error(err))
}