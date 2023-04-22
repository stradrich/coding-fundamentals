const BASE_URL = "https://jsonplaceholder.typicode.com"
 
async function getUser(id) {
    const response = await fetch(`${BASE_URL}/users?id=${id}`)
    const [user]= await response.json()
    console.log(user)
    return user
    
}

async function getPosts(userID, limit) {
    const response = await fetch(`${BASE_URL}/posts?userId=${userID}`)
    const data = await response.json()

    const posts = data.slice(0, limit)

    return posts
}

async function getComments(postsID,limit) {
    const response = await fetch(`${BASE_URL}/comments?postID=${postsID}`) // I don't really understand why the ?xxxx
    const data = await response.json()

    const comments = data.slice(0, limit)
    
    return comments
}

// iife... to use await... since it can only work within a function
;(async () => {
    const user = await getUser(1)
    // console.log(user)

    const posts = await getPosts(user.id, 3)
    // console.log(posts)

    for (let post of posts) {
        const comments = await getComments(post.id)

        console.log(comments)
    }
})()





// Reference
// 1. fetch api > insert URL > 1. Pending 2. Fullfilled 3. Rejected
// 2. Async await 
//3. iife (imediately invoked function expression)