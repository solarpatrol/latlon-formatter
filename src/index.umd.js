import formatByTemplate from './formatByTemplate';
import formatLatitude from './formatLatitude';
import formatLongitude from './formatLongitude';
import formatAngle from './formatAngle';
import getAngleFormatObject from './getAngleFormatObject';

// Aliases
const latitude = formatLatitude;
const longitude = formatLongitude;
const angle = formatAngle;
const object = getAngleFormatObject;

export default {
    formatByTemplate,
    formatLatitude,
    formatLongitude,
    formatAngle,
    getAngleFormatObject,
    latitude,
    longitude,
    angle,
    object
};
