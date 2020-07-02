describe('Testing the API', () => {
    test('Testing the post() function', async () => {
        const input = {
            url: 'https://jamesclear.com/behavioral-psychology'
        };
        const output = 'positive';
        const btn = document.createElement('button');
        document.body.appendChild(btn);
        const {
            post
        } = require('../client/js/formHandler.js');
        const data = await post(input);
        expect(data.polarity).toEqual(output);
    });
});