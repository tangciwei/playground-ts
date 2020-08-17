export function debounce(fn: Function, timeout: number) {
    let timer = null;
    return (...arg) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...arg);
            clearTimeout(timer);
        }, timeout)
    }
}

export function throttle(fn: Function, timeout) {
    let timer = null;
    return (...arg) => {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn(...arg);
            clearTimeout(timer);
        }, timeout)

    }
}
