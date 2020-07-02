import {
    post
} from '../client/js/formHandler.js';


describe('Testing the API', async () => {
    test('Testing th post() function', async () => {
        const input = {
            url: 'https://jamesclear.com/behavioral-psychology'
        };
        const output = 'positive';
        const data = await post(input);
        expect(data.polarity).toEqual(output);
    });
});