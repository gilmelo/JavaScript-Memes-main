const btn = document.querySelector("#btn")

function meme() {
    let numberRandom = Math.floor(Math.random() * 50)

    fetch(`https://meme-api.com/gimme/${numberRandom}`)
    .then((response)=> {
        return response.json()
    })
    .then((data)=> {
        document.querySelector("#title").innerHTML = `${data.memes[0].title}`
        document.querySelector("#meme").setAttribute("src", `${data.memes[0].url}`)
    })
    .catch((erro)=> console.log(erro))
}
meme()


btn.addEventListener("click", ()=> {
    meme()
})
