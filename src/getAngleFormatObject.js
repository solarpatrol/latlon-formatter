export default function getAngleFormatObject(value, isDegrees) {
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
