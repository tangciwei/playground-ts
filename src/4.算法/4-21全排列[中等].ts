// 输入一个数n，输入1~n的全排列
// https://blog.csdn.net/MaxLykoS/article/details/73555329
// 比如

export function sort(n: number) {
    let arr = (n+'').split("");
    let len = arr.length;
    let callback = (str: string) => {
        console.log(Number(str));
    };
    const compute = (arr: string[], hasSort: string = "") => {
        arr.forEach(item => {
            let newStr = hasSort + item;
            if (newStr.length === len) {
                callback(newStr);
            } else {
                compute(arr.filter(item2 => item2 !== item), newStr);
            }
        });
    };
    compute(arr);
}
sort(1234);
