export default function formatAngle(value, fixed) {
    fixed = fixed || 0;
    return parseFloat(value).toFixed(fixed) + ' °';
}
