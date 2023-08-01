export namespace server {
    interface Post {
        userId: number
        id: number
        title: string
        body: string
    }

    interface User {
        id: number
        address: string
        company: string
        email: string
        name: string
        phone: string   
        username: string
        website: string

    }

    interface Comment {
        id: number
        postId: number
        name: string
        email: string
        body: string
    }
}
export namespace client {
    interface Post {
        userId: number
        id: number
        title: string
        body: string
        username: string
        comments: server.Comment[]
    }
}


