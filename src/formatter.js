import formatLatitude from './formatLatitude';
import formatLongitude from './formatLongitude';
import formatAngle from './formatAngle';
import getAngleFormatObject from './getAngleFormatObject';

export default {
    formatLatitude,
    formatLongitude,
    formatAngle,
    getAngleFormatObject,
    // aliases
    latitude: formatLatitude,
    longitude: formatLongitude,
    angle: formatAngle,
    object: getAngleFormatObject
};
