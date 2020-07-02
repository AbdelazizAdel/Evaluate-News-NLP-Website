import {
    post
} from '../client/js/formHandler.js';

describe('Testing post request', () => {
    test('Testing post function', async () => {
        const input = {
            url: 'https://jamesclear.com/behavioral-psychology'
        };
        const output = {
            polarity: 'positive'
        };
        const data = await post(input);
        expect(data).objectContaining(output);
    });
});