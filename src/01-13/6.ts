type ItemN = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type Item = ItemN | ".";

function solveSudoku(board: Item[][]): void {
    function getCol(j: number) {
        const result = [];
        for (let i = 0; i < 9; i++) {
            result.push(board[i][j]);
        }
        return result;
    }
    function get9Block(i: number, j: number) {
        const s = Math.floor(i / 3) * 3;
        const e = Math.floor(j / 3) * 3;
        const result: Item[][] = [];
        const nums: ItemN[] = [];
        for (let i = 0; i < 3; i++) {
            const arri: Item[] = [];
            for (let j = 0; j < 3; j++) {
                const item = board[s + i][e + j];
                if (item !== ".") {
                    nums.push(item);
                }
                arri.push(item);
            }
            result.push(arri);
        }
        return {
            result,
            nums
        };
    }

    function getRemain(arr: number[]) {
        const map = {};
        arr.forEach(item => {
            map[item] = true;
        });
        const result: ItemN[] = [];
        for (let i = 1; i <= 9; i++) {
            if (!map[i]) {
                result.push((i + "") as ItemN);
            }
        }
        return result;
    }

    function findYueshu(i: number, j: number) {
        const row = board[i].filter(item => item !== ".");
        const col = getCol(j).filter(item => item !== ".");
        const rw9 = get9Block(i, j).nums;
        return getRemain(Array.from(new Set([...row, ...col, ...rw9])));
    }

    function copyBoard(board) {
        const result = [];
        board.forEach(item => {
            result.push([...item]);
        });
        return result;
    }
    function updateYueshu() {
        const list: {
            positon: [number, number];
            remain: ItemN[];
        }[] = [];

        const remainAll: {
            positon: [number, number];
            remain: ItemN[];
        }[] = [];
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const cur = board[i][j];
                if (cur === ".") {
                    const list = findYueshu(i, j);
                    remainAll.push({
                        remain: list,
                        positon: [i, j]
                    });
                }
            }
        }
        return remainAll;
    }
    const map = {};

    function getSortMain() {
        const remain = updateYueshu();

        const sortRemain = remain.sort((a, b) => {
            return a.remain.length - b.remain.length;
        });
        let validate = true;
        if (sortRemain.length > 0 && sortRemain[0].remain.length === 0) {
            validate = false;
        }
        return {
            sortRemain,
            validate
        };
    }

    function once() {
        function base() {
            const { sortRemain, validate } = getSortMain();
            return {
                validate,
                getRemains() {
                    return sortRemain.filter(item => {
                        if (item.remain.length === 1) {
                            const { remain, positon } = item;
                            const [i, j] = positon;
                            board[i][j] = remain[0];
                            return false;
                        } else {
                            return true;
                        }
                    });
                }
            };
        }

        function digui() {
            const { validate, getRemains } = base();
            let result = true;
            if (!validate) {
                return true;
            } else {
                const remains = getRemains();
                remains.forEach((item, index) => {
                    const { positon, remain } = item;
                    const [i, j] = positon;

                    remain.some(num => {
                        const copy = copyBoard(board);
                        if (findYueshu(i, j).length == 0) {
                            result = false;
                            return false;
                        } else {
                            result = true;
                            board[i][j] = num;
                        }
                        // 无效
                        if (digui() === true) {
                            board = copy;
                            result = false;
                            return false;
                        }
                        result = true;
                        return true;
                    });
                });
            }
            return !result;
        }
        digui();
        console.log(board);
    }
    once();
}

solveSudoku([
    [".", ".", "9", "7", "4", "8", ".", ".", "."],
    ["7", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", "2", ".", "1", ".", "9", ".", ".", "."],
    [".", ".", "7", ".", ".", ".", "2", "4", "."],
    [".", "6", "4", ".", "1", ".", "5", "9", "."],
    [".", "9", "8", ".", ".", ".", "3", ".", "."],
    [".", ".", ".", "8", ".", "3", ".", "2", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", "2", "7", "5", "9", ".", "."]
]);
