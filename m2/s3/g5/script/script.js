/* 
fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDBiNDg4Zjc0MDAwMTQyODc0NmMiLCJpYXQiOjE2ODM4ODIxNjQsImV4cCI6MTY4NTA5MTc2NH0.pSKExFR53dwnU4edT2ELqEcwaVry90qjSqR8hyYadew"
}
})
*/

/* mi crero una variabile contenente l'API */
let API_LINK = "https://striveschool-api.herokuapp.com/api/product/"
let API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDBiNDg4Zjc0MDAwMTQyODc0NmMiLCJpYXQiOjE2ODM4ODIxNjQsImV4cCI6MTY4NTA5MTc2NH0.pSKExFR53dwnU4edT2ELqEcwaVry90qjSqR8hyYadew"

const getEvents = function () {
    fetch(API_LINK, {
        headers: {
            "Authorization": API_KEY
        }
    })
        .then((res) => {
            console.log('RES', res)
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Errore nel recupero degli eventi!')
            }
        })
        .then((data) => {
            console.log('EVENTI IN DB', data)
            data.forEach(element => {
                let colTemplate = `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-2 d-flex justify-content-center">            
                    <div class="card">
                        <img src="${element.imageUrl}" class="card-img w-100 h-100" alt="img-product">
                        <div class="card-body w-100 h-100 d-flex flex-column justify-content-center">
                            <h5 class="card-title">${element.name}</h5> 
                            <p class="card-text">${element.price}$</p>
                            <div class="row mx-2">
                                <a href="./backoffice.html?eventID=${element._id}" class="btn btn-outline-light col-12">Modifica</a>
                                <a href="./detail.html?eventID=${element._id}" class="btn btn-dark col-12 mt-1">Scopri di più</a>
                            </div>
                        </div>
                    </div>
                </div>
                `
                let rowPrincipal = document.getElementById('principalRow')
                rowPrincipal.innerHTML += colTemplate
            });
        })
        .catch((error) => {
            console.log(error)
        })
}

window.onload = () => {
     let spinner = document.getElementById('spinner')
     let store = document.getElementById('store')
     let header = document.querySelector('header')
     const spinners = function(){
        spinner.remove()
        store.remove()
        header.classList.remove('d-none')
     }
 setTimeout(spinners, 1000)
 setTimeout(getEvents, 1000)
 }


 