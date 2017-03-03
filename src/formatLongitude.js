import getAngleFormatObject from './getAngleFormatObject';
import prependChars from './prependChars';
import formatByTemplate from './formatByTemplate';

const defaultTemplate = '{degree}° {prime}′ {doublePrime}″ {direction}';

export default function formatLatitude(value, options) {
    options = options || {};
    const template = typeof options.template === 'string' ? options.template : defaultTemplate;
    const degrees = typeof options.degrees === 'boolean' ? options.degrees : false;

    const f = getAngleFormatObject(value, degrees);

    return formatByTemplate(template, {
        value: f.value,
        degree: prependChars(f.degree, 3, '0'),
        prime: prependChars(f.prime, 2, '0'),
        doublePrime: prependChars(f.doublePrime, 2, '0'),
        sign: (f.sign > 0 ? '+' : (f.sign < 0 ? '—' : '')),
        negativeSign: f.sign < 0 ? '—' : '',
        direction: f.sign >= 0 ? 'E' : 'W'
    });
}
