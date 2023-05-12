let API_LINK = "https://striveschool-api.herokuapp.com/api/product/"
let API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDBiNDg4Zjc0MDAwMTQyODc0NmMiLCJpYXQiOjE2ODM4ODIxNjQsImV4cCI6MTY4NTA5MTc2NH0.pSKExFR53dwnU4edT2ELqEcwaVry90qjSqR8hyYadew"


let addressBarContent = new URLSearchParams(window.location.search + "?")
let eventId = addressBarContent.get('eventID') 

window.onload = () => {
    fetch(API_LINK + eventId,  {
        headers: {
            "Authorization": API_KEY
        }
    }
        )
    .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error("Errore nel recupero dell'evento")
        }
        })
    .then((data) => {
        let 
    })
}