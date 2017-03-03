function getAngleFormatObject(value, isDegrees) {
    isDegrees = isDegrees || false;
    if (!isDegrees) {
        value = value / Math.PI * 180;
    }

    const sign = Math.sign(value);

    value = Math.abs(value);

    const real = value % 1;
    const degree = value - real;
    const primes = Math.round(real * 3600);

    const doublePrime = primes % 60;
    const prime = (primes - doublePrime) / 60;

    return {
        degree: degree,
        prime: prime,
        doublePrime: doublePrime,
        sign: sign
    };
}

function formatLatitude(value, isDegrees) {
    const f = getAngleFormatObject(value, isDegrees);
    return (f.degree < 10 ? '0' : '') + f.degree + '° ' +
        (f.prime < 10 ? '0' : '') + f.prime + '′ ' +
        (f.doublePrime < 10 ? '0' : '') + f.doublePrime + '″ ' +
        (f.sign > 0 ? 'N' : 'S');
}

function formatLongitude(value, isDegrees) {
    const f = getAngleFormatObject(value, isDegrees);
    return (f.degree < 10 ? '0' : '') + (f.degree < 100 ? '0' : '') + f.degree + '° ' +
        (f.prime < 10 ? '0' : '') + f.prime + '′ ' +
        (f.doublePrime < 10 ? '0' : '') + f.doublePrime + '″ ' +
        (f.sign > 0 ? 'E' : 'W');
}

function formatAngle(value, fixed) {
    fixed = fixed || 0;
    return parseFloat(value).toFixed(fixed) + ' °';
}

export default {
    getAngleFormatObject,
    formatLatitude,
    formatLongitude,
    formatAngle,
    // aliases
    object: getAngleFormatObject,
    latitude: formatLatitude,
    longitude: formatLongitude,
    angle: formatAngle
};
