import {
    validURL
} from './inputValidator.js';

export async function postReq(data = {}) {
    const isValid = validURL(data.url);
    if (isValid) {
        try {
            const response = await fetch('http://localhost:8081/sentiment', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const body = await response.json();
            console.log(body);
            return body;
        } catch (error) {
            console.log(error);
        }
    } else {
        alert('Please enter a valid url');
    }
}

export function updateUI(event) {
    event.preventDefault();
    const url = document.querySelector('input').value;
    const data = {
        url: url
    }
    console.log(data);
    postReq(data).then((result) => {
        document.querySelector('section').innerHTML = `<span>This article is ${result.polarity} <span>`;
    })
}

document.querySelector('button').addEventListener('click', updateUI);