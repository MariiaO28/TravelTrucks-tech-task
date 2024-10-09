export default function formatName(name) {
    if (typeof name !== 'string') return name;
    return name
        .replace(/([a-z])([A-Z])/g, '$1 $2')  // Додає пробіл між малими і великими літерами
        .replace(/(\d)([a-zA-Z])/g, '$1 $2')  // Додає пробіл між цифрою та літерою
        .replace(/^./, str => str.toUpperCase());  // Робить першу букву великою
}