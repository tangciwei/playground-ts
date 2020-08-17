function restoreIpAddresses(s: string): string[] {
    function rule(val: string) {
        return (
            Number(val) <= 255 &&
            val !== "" &&
            !(val.length > 1 && val[0] === "0")
        );
    }
    const maxl = 4;

    function getIps(
        ip: string,
        splitLen: number,
        last: string[][] = []
    ): string[][] {
        if (splitLen === 1) {
            if (rule(ip)) {
                const result = [];
                last.map(item => {
                    if (item && item.length === maxl - 1) {
                        result.push([...item, ip]);
                    }
                });
                return result;
            }
        } else if (splitLen > 1 && splitLen <= maxl) {
            const result = [];
            ip.split("").forEach((item, index) => {
                const cur = ip.slice(0, index + 1);
                const remain = ip.slice(index + 1);

                if (rule(cur)) {
                    let newLast = [];
                    if (last.length > 0) {
                        newLast = last.map(item => {
                            return [...item, cur];
                        });
                    } else {
                        newLast = [[cur]];
                    }
                    getIps(remain, splitLen - 1, newLast).forEach(item => {
                        if (item.length === 4) {
                            result.push(item);
                        }
                    });
                }
            });
            return result;
        }

        return [];
    }

    return getIps(s, 4, []).map(item => item.join("."));
}
