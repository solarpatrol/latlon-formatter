export default function prependChars(value, length, char = ' ') {
    let result = `${value}`;
    const count = length - result.length;
    for (let i = 0; i < count; i++) {
        result = char + result;
    }
    return result;
}
