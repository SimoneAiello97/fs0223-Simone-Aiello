let apiLink = 'https://www.pexels.com/api/new/'
let apiKey = 'QID29EB8w4gvQrQiyE2OsLnWo8dzp6gVKv9OHFpc0n2mQSEwXFkIBb1N'

let loadBtn = document.getElementById('load-img')
let loadSecondaryBtn = document.getElementById('load-secondary-img')
let allSvg = document.querySelectorAll('.card svg')
let allCard = document.querySelectorAll('.card')
let allTitleCards = document.querySelectorAll('.card-title')
let allTextCards = document.querySelectorAll('.card-text')
let allTextMuted = document.querySelectorAll('.text-muted')


loadBtn.addEventListener('click', () =>{
fetch('https://api.pexels.com/v1/search?query=cats',{
    headers:{
        Authorization: apiKey
    }
})
.then((response) =>
{
    if(response.ok){
        return response.json()
    }
    else{
        new Error('Errore nel collegamento del server')
    }
} )
.then((data)=>{
console.log(data);
let foto = data.photos
console.log("🚀 ~ file: script.js:25 ~ .then ~ foto:", foto)
for (let i=0; i<allCard.length; i++){
    let link = foto[i].src.portrait
    let container = allSvg[i].parentNode
    let newImg = document.createElement('img')
    newImg.classList.add('w-100')
    newImg.src = link
    if(allSvg.length > 0){
    container.replaceChild(newImg, allSvg[i])
    }else{
        let allImg = document.querySelectorAll('.card img')
        let container = allTitleCards[i].parentNode
        container.replaceChild(newImg, allImg[i])
    }
    allTitleCards[i].innerHTML = foto[i].alt
    allTextCards[i].innerHTML = 'Photographer: ' + foto[i].photographer
    allTextMuted[i].innerHTML = foto[i].id
}
})
.catch(err => console.log(err))
}
)

loadSecondaryBtn.addEventListener('click', () =>{
    fetch('https://api.pexels.com/v1/search?query=dogs',{
        headers:{
            Authorization: apiKey
        }
    })
    .then((response) =>
    {
        if(response.ok){
            return response.json()
        }
        else{
            new Error('Errore nel collegamento del server')
        }
    } )
    .then((data)=>{
    console.log(data);
    let foto = data.photos
    console.log("🚀 ~ file: script.js:25 ~ .then ~ foto:", foto)
    for (let i=0; i<allCard.length; i++){
        let link = foto[i].src.portrait
        let container = allSvg[i].parentNode
        let newImg = document.createElement('img')
        newImg.classList.add('w-100')
        newImg.src = link
        // newImg[i].src = link
        
        if(allSvg.length > 0){
            container.replaceChild(newImg, allSvg[i])
            }else{
                let allImg = document.querySelectorAll('.card img')
                let container = allTitleCards[i].parentNode
                container.replaceChild(newImg, allImg[i])
            }
        allTitleCards[i].innerHTML = foto[i].alt
        allTextCards[i].innerHTML = 'Photographer: ' + foto[i].photographer
        allTextMuted[i].innerHTML = foto[i].id
    }
    })
    .catch(err => console.log(err))
    }
    )

    let editBtn = document.querySelectorAll('.edit-btn')
    
    for(let i = 0; i < allCard.length; i++){
        let deleteButton = editBtn[i]
        deleteButton.innerHTML ='Hide';
        deleteButton.addEventListener('click',()=>{
            allCard[i].classList.add('d-none')
        })
    }

