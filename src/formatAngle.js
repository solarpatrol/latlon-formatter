import getAngleFormatObject from './getAngleFormatObject';
import prependChars from './prependChars';
import formatByTemplate from './formatByTemplate';

const defaultTemplate = '{negativeSign}{value}°';

export default function formatAngle(value, options) {
    options = options || {};
    const template = typeof options.template === 'string' ? options.template : defaultTemplate;
    const isDegrees = typeof options.isDegrees === 'boolean' ? options.isDegrees : false;
    const fixedCount = typeof options.fixedCount === 'number' ? options.fixedCount : 0;

    const f = getAngleFormatObject(value, isDegrees);

    return formatByTemplate(template, {
        value: f.value.toFixed(fixedCount),
        degree: f.degree,
        prime: prependChars(f.prime, 2, '0'),
        doublePrime: prependChars(f.doublePrime, 2, '0'),
        sign: (f.sign > 0 ? '+' : (f.sign < 0 ? '—' : '')),
        negativeSign: f.sign < 0 ? '—' : ''
    });
}
