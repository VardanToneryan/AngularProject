export const host = 'http://localhost:3000/';
export const environments = {
    AllPosts: {
        get: host + 'AllPosts'
    },
    Category: {
        get: host + 'Category',
        put: host + 'Category',
        delete: host + 'Category',
        post: host + 'Category'
    },
    Authors: {
        get: host + 'Authors'
    },
    BlogAllPosts: {
        get: host + 'BlogAllPosts',
        put: host + 'BlogAllPosts',
        delete: host + 'BlogAllPosts',
        post: host + 'BlogAllPosts'
    },
    JoinOurTeam: {
        get: host + 'JoinOurTeam'
    }
} 