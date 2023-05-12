let API_LINK = "https://striveschool-api.herokuapp.com/api/product/"
let API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDBiNDg4Zjc0MDAwMTQyODc0NmMiLCJpYXQiOjE2ODM4ODIxNjQsImV4cCI6MTY4NTA5MTc2NH0.pSKExFR53dwnU4edT2ELqEcwaVry90qjSqR8hyYadew"

let addressBarContent = new URLSearchParams(window.location.search + "?")
let eventId = addressBarContent.get('eventID') 
 
if (eventId) {
    document.getElementsByTagName('h2')[0].innerText =
      'Modifica Prodotto'

    document.getElementById('save-button').innerText = 'MODIFICA EVENTO'
    let deleteButton = document.getElementById('delete-button')
    let cancelButton = document.getElementById('deleteBtn') //deleteBtn
    cancelButton.classList.remove('d-none')

    deleteButton.addEventListener('click', () => {
      fetch(API_LINK + eventId, {
        method: 'DELETE',
        headers: {
            "Authorization": API_KEY
        }
      })
        .then((res) => {
          if (res.ok) {
            location.assign('./index.html')
          } else {
            throw new Error("Problema nell'eliminazione dell'evento")
          }
        })
        .catch((err) => {
          console.log(err)
        })
    })

    fetch(API_LINK + eventId, {
        headers: {
            "Authorization": API_KEY
        }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Errore nel recupero dell'evento")
        }
      })
      .then((event) => {
        console.log(
          'DATI DEL SINGOLO EVENTO, RECUPERATO TRAMITE GET SINGOLA',
          event
        )
        document.getElementById('name').value = event.name
        document.getElementById('description').value = event.description
        document.getElementById('price').value = event.price
        document.getElementById('brand').value = event.brand
        document.getElementById('img').value = event.imageUrl
      })
      .catch((error) => {
        console.log(error)
      })
  } 

  const eventForm = document.getElementById('event-form')
  eventForm.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('invio i dati')

    let nameInput = document.getElementById('name')
    let descriptionInput = document.getElementById('description')
    let priceInput = document.getElementById('price')
    let brandInput = document.getElementById('brand')
    let imgInput = document.getElementById('img')

    let newEvent = {
      name: nameInput.value,
      description: descriptionInput.value,
      price: priceInput.value,
      brand: brandInput.value,
      imageUrl: imgInput.value
    }
    console.log('evento pronto da inviare alle API', newEvent)

    fetch(eventId ? API_LINK + eventId : API_LINK, {
      method: eventId ? 'PUT' : 'POST',
      body: JSON.stringify(newEvent), // inviamo l'evento da aggiungere a DB! però body accetta solo stringhe!!
      headers: {
        "Authorization": API_KEY,
        'Content-Type': 'application/json', // informa l'API che la stringa che mandiamo nel body in realtà va parsata!
      },
    })
      .then((res) => {
        if (res.ok) {
          location.assign('/index.html') 
        } else {
          alert('ERRORE NEL SALVATAGGIO')
          throw new Error('ERRORE NEL SALVATAGGIO')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  })

   
  let resetBtn = document.querySelector('#reset-button')
  resetBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    eventForm.reset()
  }) 