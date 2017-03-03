import assign from 'object-assign';

import prependChars from './prependChars';
import formatAngle from './formatAngle';

const defaultTemplate = '{degree}° {prime}′ {doublePrime}″ {direction}';

export default function formatLatitude(value, options) {
    options = options || {};
    const template = typeof options.template === 'string' ? options.template : defaultTemplate;

    return formatAngle(value, assign({}, options, {
        template,
        customTokens: f => {
            return {
                degree: prependChars(f.degree, 2, '0'),
                direction: f.sign >= 0 ? 'N' : 'S'
            };
        }
    }));
}
