import chai from 'chai';
chai.should();

import formatAngle from '../src/formatAngle';

describe('format angle', () => {
    it('zero (radians)', () => {
        formatAngle(0).should.equal('0°');
    });

    it('zero (degrees)', () => {
        formatAngle(0, {
            degrees: true
        }).should.equal('0°');
    });

    it('positive integer (radians)', () => {
        formatAngle(Math.PI / 3).should.equal('60°');
    });

    it('positive integer (degrees)', () => {
        formatAngle(60, {
            degrees: true
        }).should.equal('60°');
    });

    it('negative integer (radians)', () => {
        formatAngle(-Math.PI / 3).should.equal('—60°');
    });

    it('negative integer (degrees)', () => {
        formatAngle(-60, {
            degrees: true
        }).should.equal('—60°');
    });

    it('positive float (radians)', () => {
        formatAngle(Math.PI / 40).should.equal('4.5°');
    });

    it('positive float (degrees)', () => {
        formatAngle(4.5, {
            degrees: true
        }).should.equal('4.5°');
    });

    it('negative float (radians)', () => {
        formatAngle(-Math.PI / 40).should.equal('—4.5°');
    });

    it('negative float (degrees)', () => {
        formatAngle(-4.5, {
            degrees: true
        }).should.equal('—4.5°');
    });

    it('positive float (radians) with 3 digits precision', () => {
        formatAngle(Math.PI / 40, {
            fixedCount: 3
        }).should.equal('4.500°');
    });

    it('positive float (degrees) with 3 digits precision', () => {
        formatAngle(4.5666, {
            degrees: true,
            fixedCount: 3
        }).should.equal('4.567°');
    });

    it('negative float (radians) with 3 digits precision', () => {
        formatAngle(-Math.PI / 40, {
            fixedCount: 3
        }).should.equal('—4.500°');
    });

    it('negative float (degrees) with 3 digits precision', () => {
        formatAngle(-4.5666, {
            degrees: true,
            fixedCount: 3
        }).should.equal('—4.567°');
    });

    it('positive float with custom template', () => {
        const template = '{degree}° {prime}′ {doublePrime}″';
        const expected = '14° 49′ 12″';
        formatAngle(14.82, {
            template,
            degrees: true
        }).should.equal(expected);
    });
});
