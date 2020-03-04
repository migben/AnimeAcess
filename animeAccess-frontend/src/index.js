// DOM selectors

const collection = document.querySelector("#anime-collection")
const seriesUrl = "http://localhost:3000/animes"

const form = document.querySelector("form")

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

    collection.append(divSeries)

    // animeDeleteBtn.addEventListener("click", () => deleteForever(animeObj))

    // animeUpdateBtn.addEventListener("click", (event) => showForm(animeObj))

}