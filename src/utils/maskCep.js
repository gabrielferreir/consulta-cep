const maskCep = value => {
    if (!value) return '';

    value = value.toString().replace(/[^0-9]+/g, '');
    if (value.length > 5)
        value = value.substring(0, 5) + '-' + value.substring(5);
    if (value.length > 9)
        value = value.substring(0, 9);

    return value;
};

export default maskCep;