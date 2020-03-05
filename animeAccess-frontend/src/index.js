// DOM selectors

const collection = document.querySelector("#anime-collection")
const seriesUrl = "http://localhost:3000/animes"
const newAnimeFormBtn = document.querySelector("#new-anime-form")


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
    // const h2Title = document.createElement("h2")
    const aTitle = document.createElement("a")
    const pRating = document.createElement("p")
    const brSeries = document.createElement("br")
    const spanStar = document.createElement("span")
    const pGenre = document.createElement("p")
    const pCenter = document.createElement("p")
    const hrSeries = document.createElement("hr")
    const animeUpdateBtn = document.createElement("button")
    const animeDeleteBtn = document.createElement("button")
    // const mainHeaderList = document.querySelector("#h2-title") main header id attribute

    divSeries.setAttribute("class", "anime-container")
    divSeries.setAttribute("id", `series-${animeObj.id}`)
    aTitle.setAttribute("id","anime-title")
    imgCover.setAttribute("src", animeObj.image_url)
    imgCover.setAttribute("id", "anime-cover")
    pRating.setAttribute("id", "front-rating")
    spanStar.setAttribute("id", "star-rating")
    pGenre.setAttribute("id","series-genre")
    pCenter.setAttribute("class", "center-p")
    pCenter.setAttribute("id","front-description")
    animeDeleteBtn.setAttribute("id", `anime-delete-btn-${animeObj.id}`)
    animeUpdateBtn.setAttribute("id", `anime-update-btn-${animeObj.id}`)

    aTitle.innerText = animeObj.title
    pRating.innerText = `Rating: ${animeObj.rating}`
    spanStar.innerText = "⭐️⭐️⭐️⭐️"
    pGenre.innerText = `Genre: Shounen`
    pCenter.innerText = animeObj.description
    animeDeleteBtn.innerText = "Delete"
    animeUpdateBtn.innerText = "Update"

    
    
    divSeries.append(imgCover,aTitle,pRating,brSeries,spanStar,pGenre,pCenter,brSeries, animeUpdateBtn ,animeDeleteBtn, hrSeries)

    collection.prepend(divSeries)


    // event listeners
    animeDeleteBtn.addEventListener("click", () => deleteThis(animeObj))

    animeUpdateBtn.addEventListener("click", (event) => showForm(animeObj))


    // ------------------------------------PLAYGROUND-------------------------------------------------------
    // Mouseover and out, change colors
    // mainHeaderList.addEventListener("mouseout", event => event.target.style.color = "red")  
    // mainHeaderList.addEventListener("mouseover", event => event.target.style.color = "yellow")

} // END OF THE RENDER TO THE DOM FUNCTION


const showForm = animeObj => {
    const formDivContainer = document.createElement("div")
    const animeContainer = document.getElementById(`series-${animeObj.id}`)

    // select dom el

    let aUpdateTitle = document.querySelector("#anime-title")
    let imgUpdateCover = document.querySelector("#anime-cover")
    let pRatingUpdate = document.querySelector("#front-rating")
    let descriptionUpdate = document.querySelector("#front-description")

    formDivContainer.innerHTML = `
        <form id="update-form" data-id=${animeObj.id}>
            <h1>Update Anime ${animeObj.title}</h1>
                <label for="title">Title</label>
                <input id="title" type="text" name="title" placeholder="Pokemon">
                <label for="image_url">Image Link: </label>
                <input id="image" type="url" name="image_url" placeholder="URL">
                <label for="rating">Rating: </label>
                <input id="rating" type="number" name="rating" step="0.01" placeholder="1 - 10">
                <label for="description">Description: </label>
                <textarea id="description" name="description" rows="10" cols="35" placeholder="Synopsis"></textarea>
                <!-- <input id="description" type="text" name="description" placeholder="Synopsis"> -->
                <input type="submit" value="update">
        </form>
    ` // always put  the submit event listener on the form tag, never on the submit button.
    
    animeContainer.append(formDivContainer)
    // console.log(formDiv);
    // console.log(formDiv.innerHTML)
    // console.log(formDiv.firstChild);
    

    formDivContainer.addEventListener("submit", event => {
        event.preventDefault()

        let title = event.target.title.value
        let image_url = event.target.image.value
        let rating = event.target.rating.value
        let description = event.target.description.value

        imgUpdateCover.setAttribute("src", `${image_url}`)
        aUpdateTitle.innerText = title
        pRatingUpdate.innerText = `Rating: ${rating}`
        descriptionUpdate.innerText = description
        

        fetch(`http://localhost:3000/animes/${animeObj.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ // whenever the data you are sending to the api matches the key of the JSON body, then you can opt to put the key without the value
                title, // or continue with title: title
                image_url: image_url, // here you cant because the convention doesnt match
                rating: rating,
                description: description
            })
        })
        .then(res => res.json())
        .then( animeData => {
            
            event.target.style.display = "none"
              
        })
        
    } )
}

const deleteThis = animeObj => {
     let seriesBye = document.getElementById(`series-${animeObj.id}`)


    fetch(`http://localhost:3000/animes/${animeObj.id}`, {
             method: "DELETE"
         })
         .then(res => res.json())
         .then(() => {
             seriesBye.remove()
             console.log(`goodbye ${animeObj.id}`)
         })
}


newAnimeFormBtn.addEventListener("submit", e => {
    e.preventDefault()

    let data = getData(e)
    let modal = document.querySelector("#modal")

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
            // console.log(anime);
            
            
            modal.style.display = "none"
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















// const userContainer = document.querySelector("#user-form-container")

// newUserBtn.addEventListener("click", e =>{
//     userContainer.style.display = "block"
// })

// newUserForm.addEventListener("submit", event => {
//     event.preventDefault()

//     let userName =  event.target.name.value



//     fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json",
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//             name: userName
//         })
//     })
//     .then( res =>  res.json())
//     .then( userData => {
//         newUserForm.style.display = "none"
//         alert(`Welcome ${userData.name}!`)

//     })
// })







// const newUserForm = document.querySelector("#new-user-form")
// const newUserBtn = document.querySelector("#new-user-btn")