import chai from 'chai';
chai.should();

import prependChars from '../src/prependChars';

describe('prepend characters', () => {
    it('spaces to string', () => {
        prependChars('prepend', 10).should.equal('   prepend');
    });

    it('zeros to number', () => {
        prependChars(30, 3, '0').should.equal('030');
    });

    it('expected length is the same as given one', () => {
        prependChars('prepend', 7).should.equal('prepend');
    });

    it('expected length is more then given one', () => {
        prependChars(4444, 3, '0').should.equal('4444');
    });
});