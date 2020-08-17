function letterCasePermutation(S: string) {
    function test(s: string, has: string[] = []) {
        for (let i = 0; i < s.length; i++) {
            const cur = s[i];
            if (has.length === 0) {
                has = [cur.toUpperCase ? cur.toLocaleUpperCase() : cur + ""];
            }
            has = has.map(item => {
                return item + cur;
            });

            if (Number(cur) >= 0 && Number(cur) <= 9) {
                continue;
            } else {
                return test(s.slice(i + 1), has);
            }
        }

        return has;
    }
    return test(S,[])
}
