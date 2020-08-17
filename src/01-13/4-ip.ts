function restoreIpAddresses(s: string): string[] {
    function rule(val: string) {
        return (
            val !== "" &&
            Number(val) <= 255 &&
            !(val.length > 1 && val[0] === "0")
        );
    }

    function getIps(ip: string, splitLen: number): string[] {
        if (splitLen === 1) {
            if (rule(ip)) {
                return [ip];
            }
        } else if (splitLen > 1) {
            const result = [];
            const len = ip.length;
            for (let i = 0; i < len - splitLen + 1 && i < 3; i++) {
                const cur = ip.slice(0, i + 1);
                const remain = ip.slice(i + 1);

                if (rule(cur)) {
                    const arr = getIps(remain, splitLen - 1);
                    arr.forEach(item => {
                        result.push(cur + "." + item);
                    });
                } else {
                    break;
                }
            }

            return result;
        }
        return [];
    }

    return getIps(s, 4);
}

console.log(restoreIpAddresses("25525511135"));
