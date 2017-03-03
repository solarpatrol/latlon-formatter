import chai from 'chai';
chai.should();

import formatByTemplate from '../src/formatByTemplate';

describe('format by template', () => {
    it('single token', () => {
        formatByTemplate('Hi, my name is {name}!', {
            name: 'Dmitriy'
        }).should.equal('Hi, my name is Dmitriy!');
    });

    it('two different tokens', () => {
        formatByTemplate('Hi, my name is {name} and I love {subject}!', {
            name: 'Dmitriy',
            subject: 'JavaScript'
        }).should.equal('Hi, my name is Dmitriy and I love JavaScript!');
    });

    it('single token repeated twice', () => {
        formatByTemplate('Only {subject} can be better than {subject}.', {
            subject: 'JavaScript'
        }).should.equal('Only JavaScript can be better than JavaScript.');
    });

    it('apply only own properties of tokens object', () => {
        function Tokens() {
            this.id = 25994;
            this.name = 'TERRA';
        }

        Tokens.prototype.visible = false;

        formatByTemplate('NORAD identifier of satellite {name} is {id}.', new Tokens())
            .should.equal('NORAD identifier of satellite TERRA is 25994.');
    });
});
