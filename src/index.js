function pathChange(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "/") {
            continue;
        } else if (str[i] === '.' && i < str.length - 1 && str[i + 1] !== ".") {
            continue;
        } else if (str[i] >= 'a' && str[i] <= 'z') {
            result += "/" + str[i];
        } else if (str[i] === '.' && i < str.length - 1 && str[i + 1] === '.') {
            if (result.length !== 0) {
                result = result.slice(0, result.length - 2)
            }
        }

    }
    return result;
}

pathChange('/a//b////c/d//././/..')
