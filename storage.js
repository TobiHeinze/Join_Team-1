// diese script datei ist unten im body der index.html verlinkt
const STORAGE_TOKEN = 'JQYISAUGOJA02ZR3LJ7UWYMCUGXABN24CUUI607C';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';

const key = 'contentArray';

async function setItem(key, contentArray) {
    const payload = {key, value: contentArray, token: STORAGE_TOKEN };
    return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload) })
        .then(res => res.json());
}


// await setItem(key, value);


async function getItem(key) {
    const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    return fetch(url).then(res => res.json()).then(res => {
        // Verbesserter code
        if (res.data) { 
            return res.data.value;
        } throw `Could not find data with key "${key}".`;
    });
}



// const data = [
// 	{ name: 'Item 1', quantity: 2 },
// 	{ name: 'Item 2', quantity: 5 },
// 	{ name: 'Item 3', quantity: 1 }
//   ];
  
//   const url = 'https://dein-backend.com/api/endpoint';
  
//   fetch(url, {
// 	method: 'POST',
// 	headers: {
// 	  'Content-Type': 'application/json'
// 	},
// 	body: JSON.stringify(data)
//   })
// 	.then(response => response.json())
// 	.then(result => {
// 	  // Hier kannst du die Antwort des Backends verarbeiten
// 	  console.log(result);
// 	})
// 	.catch(error => {
// 	  // Hier kannst du Fehler beim Senden der Anfrage behandeln
// 	  console.error('Fehler:', error);
// 	});


// async function setItem(key, value) {
//     const payload = {key, value, token: STORAGE_TOKEN};
//     return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload)})
//     .then(res => res.json());
// }


// async function getItem(key) {
//     const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
//     return fetch(url).then(res => res.json());
// }


