import chai from 'chai';
import chaiRoughly from 'chai-roughly';

chai.should();
chai.use(chaiRoughly);

import getAngleFormatObject from '../src/getAngleFormatObject';

describe('get angle format object', () => {
    it('zero angle (radians)', () => {
        getAngleFormatObject(0).should.roughly.deep.equal({
            value: 0,
            degree: 0,
            prime: 0,
            doublePrime: 0,
            sign: 0
        });
    });

    it('zero angle (degrees)', () => {
        getAngleFormatObject(0, true).should.roughly.deep.equal({
            value: 0,
            degree: 0,
            prime: 0,
            doublePrime: 0,
            sign: 0
        });
    });

    it('positive integer angle (radians)', () => {
        getAngleFormatObject(Math.PI / 3).should.roughly.deep.equal({
            value: 60,
            degree: 60,
            prime: 0,
            doublePrime: 0,
            sign: 1
        });
    });

    it('positive integer angle (degrees)', () => {
        getAngleFormatObject(37, true).should.roughly.deep.equal({
            value: 37,
            degree: 37,
            prime: 0,
            doublePrime: 0,
            sign: 1
        });
    });

    it('negative integer angle (radians)', () => {
        getAngleFormatObject(-Math.PI / 3).should.roughly.deep.equal({
            value: 60,
            degree: 60,
            prime: 0,
            doublePrime: 0,
            sign: -1
        });
    });

    it('negative integer angle (degrees)', () => {
        getAngleFormatObject(-37, true).should.roughly.deep.equal({
            value: 37,
            degree: 37,
            prime: 0,
            doublePrime: 0,
            sign: -1
        });
    });

    it('positive float angle, integer prime (radians)', () => {
        getAngleFormatObject(Math.PI / 40).should.roughly.deep.equal({
            value: 4.5,
            degree: 4,
            prime: 30,
            doublePrime: 0,
            sign: 1
        });
    });

    it('positive float angle, integer prime (degrees)', () => {
        getAngleFormatObject(14.75, true).should.roughly.deep.equal({
            value: 14.75,
            degree: 14,
            prime: 45,
            doublePrime: 0,
            sign: 1
        });
    });

    it('negative float angle, integer prime (radians)', () => {
        getAngleFormatObject(-Math.PI / 40).should.roughly.deep.equal({
            value: 4.5,
            degree: 4,
            prime: 30,
            doublePrime: 0,
            sign: -1
        });
    });

    it('negative float angle, integer prime (degrees)', () => {
        getAngleFormatObject(-14.75, true).should.roughly.deep.equal({
            value: 14.75,
            degree: 14,
            prime: 45,
            doublePrime: 0,
            sign: -1
        });
    });

    it('positive float angle, float prime (radians)', () => {
        getAngleFormatObject(Math.PI / 40 + Math.PI / 180 / 90).should.roughly.deep.equal({
            value: 4.51111,
            degree: 4,
            prime: 30,
            doublePrime: 40,
            sign: 1
        });
    });

    it('positive float angle, float prime (degrees)', () => {
        getAngleFormatObject(14.82, true).should.roughly.deep.equal({
            value: 14.82,
            degree: 14,
            prime: 49,
            doublePrime: 12,
            sign: 1
        });
    });

    it('negative float angle, float prime (radians)', () => {
        getAngleFormatObject(-Math.PI / 40 - Math.PI / 180 / 90).should.roughly.deep.equal({
            value: 4.51111,
            degree: 4,
            prime: 30,
            doublePrime: 40,
            sign: -1
        });
    });

    it('negative float angle, float prime (degrees)', () => {
        getAngleFormatObject(-14.82, true).should.roughly.deep.equal({
            value: 14.82,
            degree: 14,
            prime: 49,
            doublePrime: 12,
            sign: -1
        });
    });
});
