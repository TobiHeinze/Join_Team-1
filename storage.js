// diese script datei ist unten im body der index.html verlinkt
const STORAGE_TOKEN = 'JQYISAUGOJA02ZR3LJ7UWYMCUGXABN24CUUI607C';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';
const key = 'content';


async function setItem(key, contentArray) {
    // if (!contentArray || contentArray.length === 0) {
    //     throw new Error('Das contentArray ist leer oder nicht definiert.');
    // }

    const payload = { key, value: contentArray, token: STORAGE_TOKEN };
    return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload) })
        .then(res => res.json());
}


async function getItem(key) {
    const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    return fetch(url).then(res => res.json()).then(res => {
            if (res.data) {
                // console.log(res.data.value); // Ausgabe des Werts vor dem Parsen
                const correctedValue = res.data.value.replace(/'/g, '"');
                const contentArray = JSON.parse(correctedValue);
                return contentArray;
            }
            throw `Could not find data with key "${key}".`;
        });
}