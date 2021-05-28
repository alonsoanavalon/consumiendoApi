const d = document;
const $container = document.querySelector(".container")
const getUrl = new URLSearchParams(window.location.search)
id = getUrl.get('id')
console.log(id)

url = `https://jsonplaceholder.typicode.com/users/${id}`
fetch(url)
.then(res => res.json())
.then(data => {
    let user = d.createElement("p")
    user.innerHTML = "user : "+ data.name
    let username = d.createElement("p")
    username.innerHTML = "username : "+ data.username
    let email = d.createElement("p")
    email.innerHTML= "email : " + data.email
    $container.appendChild(user)
    $container.appendChild(username)
    $container.appendChild(email)
})