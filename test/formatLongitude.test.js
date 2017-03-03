import chai from 'chai';
chai.should();

import './formatAngle.test';

import formatLongitude from '../src/formatLongitude';

describe('format longitude', () => {
    it('zero longitude (radians)', () => {
        formatLongitude(0).should.equal('000° 00′ 00″ E');
    });

    it('zero longitude (degrees)', () => {
        formatLongitude(0, {
            degrees: true
        }).should.equal('000° 00′ 00″ E');
    });

    it('eastern integer longitude (radians)', () => {
        formatLongitude(Math.PI / 3).should.equal('060° 00′ 00″ E');
    });

    it('eastern integer longitude (degrees)', () => {
        formatLongitude(37, {
            degrees: true
        }).should.equal('037° 00′ 00″ E');
    });

    it('western integer longitude (radians)', () => {
        formatLongitude(-Math.PI / 3).should.equal('060° 00′ 00″ W');
    });

    it('western integer longitude (degrees)', () => {
        formatLongitude(-37, {
            degrees: true
        }).should.equal('037° 00′ 00″ W');
    });

    it('eastern float longitude, integer prime (radians)', () => {
        formatLongitude(Math.PI / 40).should.equal('004° 30′ 00″ E');
    });

    it('eastern float longitude, integer prime (degrees)', () => {
        formatLongitude(14.75, {
            degrees: true
        }).should.equal('014° 45′ 00″ E');
    });

    it('western float longitude, integer prime (radians)', () => {
        formatLongitude(-Math.PI / 40).should.equal('004° 30′ 00″ W');
    });

    it('western integer longitude (degrees)', () => {
        formatLongitude(-14.75, {
            degrees: true
        }).should.equal('014° 45′ 00″ W');
    });

    it('eastern float longitude, float prime (radians)', () => {
        formatLongitude(Math.PI / 40 + Math.PI / 180 / 90).should.equal('004° 30′ 40″ E');
    });

    it('eastern float longitude, integer prime (degrees)', () => {
        formatLongitude(14.82, {
            degrees: true
        }).should.equal('014° 49′ 12″ E');
    });

    it('western float longitude, integer prime (radians)', () => {
        formatLongitude(-Math.PI / 40 - Math.PI / 180 / 90).should.equal('004° 30′ 40″ W');
    });

    it('western integer longitude (degrees)', () => {
        formatLongitude(-14.82, {
            degrees: true
        }).should.equal('014° 49′ 12″ W');
    });

    it('eastern angle with custom template', () => {
        const template = 'You can format positive longitude like {sign}{value} or {negativeSign}{value}.';
        const expected = 'You can format positive longitude like +14.82 or 14.82.';
        formatLongitude(14.82, {
            template,
            degrees: true
        }).should.equal(expected);
    });

    it('western angle with custom template', () => {
        const template = 'You can format negative longitude like {sign}{value} or {negativeSign}{value}.';
        const expected = 'You can format negative longitude like —14.82 or —14.82.';
        formatLongitude(-14.82, {
            template,
            degrees: true
        }).should.equal(expected);
    });

    it('eastern angle with custom template and 1 digit precision', () => {
        const template = '{value}° {direction}';
        formatLongitude(14.82, {
            template: template,
            degrees: true,
            fixedCount: 1
        }).should.equal('14.8° E');
    });

    it('western angle with custom template and 1 digit precision', () => {
        const template = '{value}° {direction}';
        formatLongitude(-14.82, {
            template: template,
            degrees: true,
            fixedCount: 1
        }).should.equal('14.8° W');
    });
});
