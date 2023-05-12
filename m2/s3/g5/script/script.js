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
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 m-2 d-flex justify-content-center">            
                    <div class="card flex-colomn align-items-center" style="width: 18rem;">
                        <img src="${element.imageUrl}" class="card-img-top img-fluid" alt="img-product">
                        <div class="card-body">
                            <h5 class="card-title d-flex justify-content-between align-items-center">${element.name}<span class="description fs-6 fst-italic text-secondary-emphasis">${element.brand}</span></h5> 
                            <p class="card-text price fs-5 fst-italic text-secondary-emphasis">${element.price}$</p>
                            <p class="card-text">${element.description}</p>
                            <a href="./backoffice.html?eventID=${element._id}" class="btn btn-primary">Modifica</a>
                            <a href="./detail.html?eventID=${element._id}" class="btn btn-outline-success">Scopri di più</a>
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
    getEvents()
}


