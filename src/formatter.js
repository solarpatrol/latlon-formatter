import formatLatitude from './formatLatitude';
import formatLongitude from './formatLongitude';
import formatAngle from './formatAngle';
import getAngleFormatObject from './getAngleFormatObject';

exports.formatLatitude = exports.latitude = formatLatitude;
exports.formatLongitude = exports.longitude = formatLongitude;
exports.formatAngle = exports.angle = formatAngle;
exports.getAngleFormatObject = exports.object = getAngleFormatObject;

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
