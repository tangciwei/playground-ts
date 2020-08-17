// IP地址由32位二进制数组成，为便于使用，常以XXX.XXX.XXX.XXX形式表现，
// 每组XXX代表小于或等于255的10进制数。
// 所以说IP地址总共有四段，每一段可能有一位，两位或者三位，范围是[0, 255]，题目明确指出输入字符串只含有数字，所以当某段是三位时，我们要判断其是否越界（>255)，
// 还有一点很重要的是，当只有一位时，0可以成某一段，如果有两位或三位时，像 00， 01， 001， 011， 000等都是不合法的，所以我们还是需要有一个判定函数来判断某个字符串是否合法。

/**
 * @param {string} s
 * @return {string[]}
 */
export const restoreIpAddresses = function (s) {
    let result = [];
    function helper(s, last, segments) {
        // 结束条件
        if (segments == 3) {
            if (s.length <= 3 && parseInt(s.slice(0, 3)) <= 255) {
                // 2位以上判断首位
                if (s.length >= 2 && s.charAt(0) === "0") {
                    return;
                }
                result.push(`${last}${s}`);
            }
        }
        if (segments < 3) {
            // 可以以0开头，没有限制
            const span1 = s.slice(0, 1);
            helper(s.slice(1), `${last}${span1}.`, segments + 1);
            // 第一位不能是0
            if (span1 !== "0") {
                helper(s.slice(2), `${last}${s.slice(0, 2)}.`, segments + 1);
                const span3 = s.slice(0, 3);
                if (parseInt(span3) <= 255) {
                    helper(s.slice(3), `${last}${span3}.`, segments + 1);
                }
            }
        }
    }
    helper(s, "", 0);
    return result;
};
