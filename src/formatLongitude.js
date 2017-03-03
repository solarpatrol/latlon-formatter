import getAngleFormatObject from './getAngleFormatObject';

export default function formatLongitude(value, isDegrees) {
    const f = getAngleFormatObject(value, isDegrees);
    return (f.degree < 10 ? '0' : '') + (f.degree < 100 ? '0' : '') + f.degree + '° ' +
        (f.prime < 10 ? '0' : '') + f.prime + '′ ' +
        (f.doublePrime < 10 ? '0' : '') + f.doublePrime + '″ ' +
        (f.sign > 0 ? 'E' : 'W');
}