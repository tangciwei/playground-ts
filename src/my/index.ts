
export function sort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i - 1;
        for (; j > 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j] = current;
    }
    return arr;
}

console.log(sort([2, 3, 4, 29, 236, 98, 12442, 56, 3]));
