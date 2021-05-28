const d = document;

const $container = d.querySelector(".container")
let url = "https://jsonplaceholder.typicode.com/users"
let arrayUsers = Array()



fetch(url)
.then(res => res.json()) // Hay que pasar a json sino no sirve
.then(data => {
    data.forEach(user => {
        const li = d.createElement("li")
        li.className = "user"
        li.innerHTML = user.name

        li.addEventListener("click", e =>{
            window.location.href = `./users.html?id=${user.id}`
        })

        $container.appendChild(li)
    })  
})
.catch(err => console.log(err))

console.log("Pasamos a data")
console.log(arrayUsers)