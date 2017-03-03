import chai from 'chai';
chai.should();

import './getAngleFormatObject.test';

import formatLatitude from '../src/formatLatitude';

describe('format latitude', () => {
    it('zero latitude (radians)', () => {
        formatLatitude(0).should.equal('00° 00′ 00″ N');
    });

    it('zero latitude (degrees)', () => {
        formatLatitude(0, true).should.equal('00° 00′ 00″ N');
    });

    it('northern integer latitude (radians)', () => {
        formatLatitude(Math.PI / 3).should.equal('60° 00′ 00″ N');
    });

    it('northern integer latitude (degrees)', () => {
        formatLatitude(37, true).should.equal('37° 00′ 00″ N');
    });

    it('southern integer latitude (radians)', () => {
        formatLatitude(-Math.PI / 3).should.equal('60° 00′ 00″ S');
    });

    it('southern integer latitude (degrees)', () => {
        formatLatitude(-37, true).should.equal('37° 00′ 00″ S');
    });

    it('northern float latitude, integer prime (radians)', () => {
        formatLatitude(Math.PI / 40).should.equal('04° 30′ 00″ N');
    });

    it('northern float latitude, integer prime (degrees)', () => {
        formatLatitude(14.75, true).should.equal('14° 45′ 00″ N');
    });

    it('southern float latitude, integer prime (radians)', () => {
        formatLatitude(-Math.PI / 40).should.equal('04° 30′ 00″ S');
    });

    it('southern integer latitude (degrees)', () => {
        formatLatitude(-14.75, true).should.equal('14° 45′ 00″ S');
    });

    it('northern float latitude, float prime (radians)', () => {
        formatLatitude(Math.PI / 40 + Math.PI / 180 / 90).should.equal('04° 30′ 40″ N');
    });

    it('northern float latitude, integer prime (degrees)', () => {
        formatLatitude(14.82, true).should.equal('14° 49′ 12″ N');
    });

    it('southern float latitude, integer prime (radians)', () => {
        formatLatitude(-Math.PI / 40 - Math.PI / 180 / 90).should.equal('04° 30′ 40″ S');
    });

    it('southern integer latitude (degrees)', () => {
        formatLatitude(-14.82, true).should.equal('14° 49′ 12″ S');
    });
});
