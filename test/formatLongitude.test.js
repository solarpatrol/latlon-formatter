import chai from 'chai';
chai.should();

import './getAngleFormatObject.test';
import './prependChars.test';
import './formatByTemplate.test';

import formatLongitude from '../src/formatLongitude';

describe('format longitude', () => {
    it('zero longitude (radians)', () => {
        formatLongitude(0).should.equal('000° 00′ 00″ E');
    });

    it('zero longitude (degrees)', () => {
        formatLongitude(0, true).should.equal('000° 00′ 00″ E');
    });

    it('eastern integer longitude (radians)', () => {
        formatLongitude(Math.PI / 3).should.equal('060° 00′ 00″ E');
    });

    it('eastern integer longitude (degrees)', () => {
        formatLongitude(37, true).should.equal('037° 00′ 00″ E');
    });

    it('western integer longitude (radians)', () => {
        formatLongitude(-Math.PI / 3).should.equal('060° 00′ 00″ W');
    });

    it('western integer longitude (degrees)', () => {
        formatLongitude(-37, true).should.equal('037° 00′ 00″ W');
    });

    it('eastern float longitude, integer prime (radians)', () => {
        formatLongitude(Math.PI / 40).should.equal('004° 30′ 00″ E');
    });

    it('eastern float longitude, integer prime (degrees)', () => {
        formatLongitude(14.75, true).should.equal('014° 45′ 00″ E');
    });

    it('western float longitude, integer prime (radians)', () => {
        formatLongitude(-Math.PI / 40).should.equal('004° 30′ 00″ W');
    });

    it('western integer longitude (degrees)', () => {
        formatLongitude(-14.75, true).should.equal('014° 45′ 00″ W');
    });

    it('eastern float longitude, float prime (radians)', () => {
        formatLongitude(Math.PI / 40 + Math.PI / 180 / 90).should.equal('004° 30′ 40″ E');
    });

    it('eastern float longitude, integer prime (degrees)', () => {
        formatLongitude(14.82, true).should.equal('014° 49′ 12″ E');
    });

    it('western float longitude, integer prime (radians)', () => {
        formatLongitude(-Math.PI / 40 - Math.PI / 180 / 90).should.equal('004° 30′ 40″ W');
    });

    it('western integer longitude (degrees)', () => {
        formatLongitude(-14.82, true).should.equal('014° 49′ 12″ W');
    });
});
