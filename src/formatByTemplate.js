export default function formatByTemplate(template, tokens) {
    let result = template;

    for (const name in tokens) {
        if (!tokens.hasOwnProperty(name)) {
            continue;
        }

        const value = tokens[name];
        result = result.replace(new RegExp(`{${name}}`, 'g'), value);
    }

    return result;
}
