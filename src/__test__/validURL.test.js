import {
    validURL
} from '../client/js/inputValidator.js';

describe('Testing the url validation', () => {
    test('Testing the vakidURL function', () => {
        const input = 'https://jamesclear.com/behavioral-psychology';
        const output = true;
        expect(validURL(input)).toBe(output);
    });
});