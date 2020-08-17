// http://obkoro1.com/web_accumulate/algorithm/medium/%E6%97%A0%E9%87%8D%E5%A4%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E4%B8%B2.html#%E6%A0%B7%E4%BE%8B%EF%BC%9A
var lengthOfLongestSubstring = function(s: string) {
    let list = s.split("");
    let son = [];
    let max = [];
    for (let i = 0; i < list.length; i++) {
        let current = list[i];
        let index = son.indexOf(current);
        if (index === -1) {
            son.push(current);
        } else {
            let sameIndex = i - son.length + index;
            if (son.length > max.length) {
                max = [...son];
            }
            son = son.slice(sameIndex + 1, son.length);
            son.push(current);
        }
    }
    return max.length;
};
lengthOfLongestSubstring("asjrgapa");
// sjrgap
