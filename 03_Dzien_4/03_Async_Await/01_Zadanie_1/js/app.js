const $title = document.getElementById("#title");
const $completed = document.getElementById("#completed");
const $author = document.getElementById("#author");
​
async function getTask(){
    try {
        let task = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        task = await task.json()
        const user = await getUserInfo(task.userId)
        $title.innerText = task.title
        $completed.innerText = task.completed
        $author.innerText = user.name
    } catch (e) {
        console.log(e)
    }
}
​
async function getUserInfo(id) {
    let user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    user = await user.json()
​
    return user;
}
​
getTask()