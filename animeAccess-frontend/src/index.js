// DOM selectors

const collection = document.querySelector("#anime-collection")
const seriesUrl = "http://localhost:3000/animes"
const newAnimeForm = document.querySelector("#new-anime-form")



// const form = document.querySelector("form")

const fetchAnimes = () =>{
    return fetch(seriesUrl)
            .then( res => res.json())
}

fetchAnimes()
    .then(animes => animes.forEach(anime => slapItOnTheDom(anime)))




const slapItOnTheDom = (animeObj) =>{

    const divSeries = document.createElement("div")
    const imgCover = document.createElement("img")
    const h2Title = document.createElement("h2")
    const aTitle = document.createElement("a")
    const pRating = document.createElement("p")
    const brSeries = document.createElement("br")
    const spanStar = document.createElement("span")
    const pGenre = document.createElement("p")
    const pCenter = document.createElement("p")
    const hrSeries = document.createElement("hr")
    const animeUpdateBtn = document.createElement("button")
    const animeDeleteBtn = document.createElement("button")

    divSeries.setAttribute("class", "series")
    imgCover.setAttribute("src", animeObj.image_url)
    pRating.setAttribute("id", "rating")
    spanStar.setAttribute("id", "star-rating")
    pGenre.setAttribute("id","series-genre")
    pCenter.setAttribute("class", "center-p")
    animeDeleteBtn.setAttribute("id", `anime-delete-btn-${animeObj.id}`)
    animeUpdateBtn.setAttribute("id", `anime-update-btn-${animeObj.id}`)

    aTitle.innerText = animeObj.title
    pRating.innerText = `Rating: ${animeObj.rating}`
    spanStar.innerText = "⭐️⭐️⭐️⭐️"
    pGenre.innerText = `Genre: Shounen`
    pCenter.innerText = animeObj.description
    animeDeleteBtn.innerText = "Delete"
    animeUpdateBtn.innerText = "Update"

    
    h2Title.append(aTitle)
    divSeries.append(imgCover,h2Title,pRating,brSeries,spanStar,pGenre,pCenter,brSeries, animeUpdateBtn ,animeDeleteBtn, hrSeries)

    collection.prepend(divSeries)

    // animeDeleteBtn.addEventListener("click", () => deleteForever(animeObj))

    // animeUpdateBtn.addEventListener("click", (event) => showForm(animeObj))

    

}


newAnimeForm.addEventListener("submit", e => {
    e.preventDefault()

    let data = getData(e)


    return fetch(seriesUrl, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: data.title,
                image_url: data.image,
                rating: data.rating,
                description: data.description
            })
        })
        .then(res => res.json())
        .then(anime => {
            console.log(anime);

            e.target.reset()
            slapItOnTheDom(anime)
        })
})

const getData = event => {
    let title = event.target.title.value
    let image = event.target.image.value
    let rating = event.target.rating.value
    let description = event.target.description.value

    return {
        title,
        image,
        rating,
        description
    }
}
