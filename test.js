// test/test.js
const { expect } = require('chai');
const multiply = require('./multiply');

describe('Multiply Function', () => {
    it('should return 1 when multiplying 1 and 1', () => {
        expect(multiply(1, 1)).to.equal(1);
    });
});

it('should return 4 when multiplying 2 by 2', () => {
    expect(multiply(2, 2)).to.equal(4);
});
it('should return 9 when multiplying 3 and 3', () => {
    expect(multiply(3, 3)).to.equal(9);
});

it('should return 16 when multiplying 4 and -68', () => {
    expect(multiply(4, 4)).to.equal(16);
});

it('should return 1035 when multiplying -1 and 45', () => {
    expect(multiply(23, 45)).to.equal(1035);
})