import chai from 'chai';
chai.should();

import getAngleFormatObject from '../src/getAngleFormatObject';

describe('get angle format object', () => {
    it('zero angle (radians)', () => {
        getAngleFormatObject(0).should.deep.equal({
            degree: 0,
            prime: 0,
            doublePrime: 0,
            sign: 0
        });
    });

    it('zero angle (degrees)', () => {
        getAngleFormatObject(0, true).should.deep.equal({
            degree: 0,
            prime: 0,
            doublePrime: 0,
            sign: 0
        });
    });

    it('positive integer angle (radians)', () => {
        getAngleFormatObject(Math.PI / 3).should.deep.equal({
            degree: 60,
            prime: 0,
            doublePrime: 0,
            sign: 1
        });
    });

    it('positive integer angle (degrees)', () => {
        getAngleFormatObject(37, true).should.deep.equal({
            degree: 37,
            prime: 0,
            doublePrime: 0,
            sign: 1
        });
    });

    it('negative integer angle (radians)', () => {
        getAngleFormatObject(-Math.PI / 3).should.deep.equal({
            degree: 60,
            prime: 0,
            doublePrime: 0,
            sign: -1
        });
    });

    it('negative integer angle (degrees)', () => {
        getAngleFormatObject(-37, true).should.deep.equal({
            degree: 37,
            prime: 0,
            doublePrime: 0,
            sign: -1
        });
    });

    it('positive float angle, integer prime (radians)', () => {
        getAngleFormatObject(Math.PI / 40).should.deep.equal({
            degree: 4,
            prime: 30,
            doublePrime: 0,
            sign: 1
        });
    });

    it('positive float angle, integer prime (degrees)', () => {
        getAngleFormatObject(14.75, true).should.deep.equal({
            degree: 14,
            prime: 45,
            doublePrime: 0,
            sign: 1
        });
    });

    it('negative float angle, integer prime (radians)', () => {
        getAngleFormatObject(-Math.PI / 40).should.deep.equal({
            degree: 4,
            prime: 30,
            doublePrime: 0,
            sign: -1
        });
    });

    it('negative float angle, integer prime (degrees)', () => {
        getAngleFormatObject(-14.75, true).should.deep.equal({
            degree: 14,
            prime: 45,
            doublePrime: 0,
            sign: -1
        });
    });

    it('positive float angle, float prime (radians)', () => {
        getAngleFormatObject(Math.PI / 40 + Math.PI / 180 / 90).should.deep.equal({
            degree: 4,
            prime: 30,
            doublePrime: 40,
            sign: 1
        });
    });

    it('positive float angle, float prime (degrees)', () => {
        getAngleFormatObject(14.82, true).should.deep.equal({
            degree: 14,
            prime: 49,
            doublePrime: 12,
            sign: 1
        });
    });

    it('negative float angle, float prime (radians)', () => {
        getAngleFormatObject(-Math.PI / 40 - Math.PI / 180 / 90).should.deep.equal({
            degree: 4,
            prime: 30,
            doublePrime: 40,
            sign: -1
        });
    });

    it('negative float angle, float prime (degrees)', () => {
        getAngleFormatObject(-14.82, true).should.deep.equal({
            degree: 14,
            prime: 49,
            doublePrime: 12,
            sign: -1
        });
    });
});
