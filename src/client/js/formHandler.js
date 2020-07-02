import {
    validURL
} from './inputValidator.js';

export async function postReq(data = {}) {
    const isValid = validURL(data.url);
    console.log(isValid);
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
            if (!body.error) {
                document.querySelector('input').classList.remove('error-border');
                document.querySelector('span').classList.remove('error-font');
                document.querySelector('span').textContent = '';
                document.querySelector('section').classList.remove('hide');
                return body;
            } else {
                document.querySelector('span').classList.add('error-font');
                document.querySelector('span').textContent = 'Requested url is not found';
                document.querySelector('section').classList.add('hide');
            }
        } catch (error) {
            console.log(error);
        }
    } else {
        document.querySelector('input').classList.add('error-border');
        document.querySelector('span').classList.add('error-font');
        document.querySelector('span').textContent = 'Please enter a valid url';
        document.querySelector('section').classList.add('hide');
    }
}

export function updateUI(event) {
    event.preventDefault();
    const url = document.querySelector('input').value;
    const data = {
        url: url
    }
    postReq(data).then((result) => {
        if (result)
            document.querySelector('section').innerHTML = `<span>This article is ${result.polarity} <span>`;
    })
}

document.querySelector('button').addEventListener('click', updateUI);