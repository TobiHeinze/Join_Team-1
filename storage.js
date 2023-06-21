const STORAGE_TOKEN = 'JQYISAUGOJA02ZR3LJ7UWYMCUGXABN24CUUI607C';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';
const key = 'content';


/**
 * This function sends and save the data on the backend
 * 
 * @param {*} key its the key to find the right data on the backend with this key
 * @param {*} contentArray this is the array with the first information for this website, it will update when on the backend
 * @returns a promise
 */
async function setItem(key, contentArray) {
    const payload = { key, value: contentArray, token: STORAGE_TOKEN };
    return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload) })
        .then(res => res.json());
}


/**
 * This function get data from the backend and change it to a JS-array 
 * 
 * @param {*} key its the key to find the right data on the backend with this key
 * @returns the contentarray will be returned, to have access to all information of the website
 */
async function getItem(key) {
    const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    return fetch(url).then(res => res.json()).then(res => {
            if (res.data) {
                const correctedValue = res.data.value.replace(/'/g, '"');
                const contentArray = JSON.parse(correctedValue);
                return contentArray;
            }
            throw `Could not find data with key "${key}".`;
        });
}