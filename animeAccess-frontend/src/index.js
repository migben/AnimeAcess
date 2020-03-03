// DOM selectors

const collection = document.querySelector("#anime-collection")
const seriesUrl = "http://localhost:3000/animes"

const form = document.querySelector("form")

const fetchAnimes = () =>{
    return fetch(seriesUrl)
            .then( res => res.json())
            .then( animes => animes.forEach( anime => slapItOnTheDom(anime)  ))
}


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



}