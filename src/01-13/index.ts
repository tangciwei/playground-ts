// https://zhuanlan.zhihu.com/p/63252392
function list(numbers: number[]): number[][] {
    let result:number[][] = [];
    numbers.forEach((item, index) => {
        const last = numbers.filter(i => i !== item);
        if (last.length > 0) {
            result = result.concat(
                list(last).map(item2 => {
                    return [item, ...item2];
                })
            );
        } else {
            return result.push([item]);
        }
    });
    return result;
}

// console.log(list([1,2,3,4]));
