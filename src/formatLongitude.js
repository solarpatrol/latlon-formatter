import getAngleFormatObject from './getAngleFormatObject';
import prependChars from './prependChars';
import formatByTemplate from './formatByTemplate';

const defaultTemplate = '{degree}° {prime}′ {doublePrime}″ {direction}';

export default function formatLatitude(value, template, isDegrees) {
    if (typeof template !== 'string') {
        isDegrees = template;
        template = defaultTemplate;
    }

    const f = getAngleFormatObject(value, isDegrees);

    return formatByTemplate(template, {
        degree: prependChars(f.degree, 3, '0'),
        prime: prependChars(f.prime, 2, '0'),
        doublePrime: prependChars(f.doublePrime, 2, '0'),
        sign: (f.sign > 0 ? '+' : (f.sign < 0 ? '—' : '')),
        direction: f.sign >= 0 ? 'E' : 'W'
    });
}
