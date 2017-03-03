import chai from 'chai';
chai.should();

import './getAngleFormatObject.test';

import formatLongitude from '../src/formatLongitude';

describe('format latitude', () => {
    it('zero latitude (radians)', () => {
        formatLongitude(0).should.equal('000° 00′ 00″ E');
    });

    it('zero latitude (degrees)', () => {
        formatLongitude(0, true).should.equal('000° 00′ 00″ E');
    });

    it('northern integer latitude (radians)', () => {
        formatLongitude(Math.PI / 3).should.equal('060° 00′ 00″ E');
    });

    it('northern integer latitude (degrees)', () => {
        formatLongitude(37, true).should.equal('037° 00′ 00″ E');
    });

    it('southern integer latitude (radians)', () => {
        formatLongitude(-Math.PI / 3).should.equal('060° 00′ 00″ W');
    });

    it('southern integer latitude (degrees)', () => {
        formatLongitude(-37, true).should.equal('037° 00′ 00″ W');
    });

    it('northern float latitude, integer prime (radians)', () => {
        formatLongitude(Math.PI / 40).should.equal('004° 30′ 00″ E');
    });

    it('northern float latitude, integer prime (degrees)', () => {
        formatLongitude(14.75, true).should.equal('014° 45′ 00″ E');
    });

    it('southern float latitude, integer prime (radians)', () => {
        formatLongitude(-Math.PI / 40).should.equal('004° 30′ 00″ W');
    });

    it('southern integer latitude (degrees)', () => {
        formatLongitude(-14.75, true).should.equal('014° 45′ 00″ W');
    });

    it('northern float latitude, float prime (radians)', () => {
        formatLongitude(Math.PI / 40 + Math.PI / 180 / 90).should.equal('004° 30′ 40″ E');
    });

    it('northern float latitude, integer prime (degrees)', () => {
        formatLongitude(14.82, true).should.equal('014° 49′ 12″ E');
    });

    it('southern float latitude, integer prime (radians)', () => {
        formatLongitude(-Math.PI / 40 - Math.PI / 180 / 90).should.equal('004° 30′ 40″ W');
    });

    it('southern integer latitude (degrees)', () => {
        formatLongitude(-14.82, true).should.equal('014° 49′ 12″ W');
    });
});
