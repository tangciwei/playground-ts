// // const shududata  = [
// //     [5,3,'.','.',7,'.','.','.','.'],
// //     [6,'.','.',]

// // ]
// type Item = ItemN | ".";
// type ItemN = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// function solveSudoku(board: Item[][]): void {
//     function getCol(j: number) {
//         const result = [];
//         for (let i = 0; i < 9; i++) {
//             result.push(board[i][j]);
//         }
//         return result;
//     }
//     function get9Block(i: number, j: number) {
//         const s = Math.floor(i / 3) * 3;
//         const e = Math.floor(j / 3) * 3;
//         const result: Item[][] = [];
//         const nums: ItemN[] = [];
//         for (let i = 0; i < 3; i++) {
//             const arri: Item[] = [];
//             for (let j = 0; j < 3; j++) {
//                 const item = board[s + i][e + j];
//                 if (item !== ".") {
//                     nums.push(item);
//                 }
//                 arri.push(item);
//             }
//             result.push(arri);
//         }
//         return {
//             result,
//             nums
//         };
//     }

//     function getRemain(arr: number[]) {
//         const map = {};
//         arr.forEach(item => {
//             map[item] = true;
//         });
//         const result: ItemN[] = [];
//         for (let i: ItemN = 1; i <= 9; i++) {
//             if (!map[i]) {
//                 result.push(i as ItemN);
//             }
//         }
//         return result;
//     }

//     function findYueshu(i: number, j: number) {
//         const row = board[i].filter(item => item !== ".");
//         const col = getCol(j).filter(item => item !== ".");
//         const rw9 = get9Block(i, j).nums;
//         return getRemain(Array.from(new Set([...row, ...col, ...rw9])));
//     }

//     function updateYueshu() {
//         const list: {
//             positon: [number, number];
//             remain: ItemN[];
//         }[] = [];

//         const remainMin: {
//             positon: [number, number];
//             remain: ItemN[];
//         } = {
//             positon: [0, 0],
//             remain: []
//         };
//         let onOff = false;
//         for (let i = 0; i < 9; i++) {
//             for (let j = 0; j < 9; j++) {
//                 const cur = board[i][j];
//                 if (cur === ".") {
//                     const list = findYueshu(i, j);


//                     if (list.length <= remainMin.remain.length || !onOff) {
//                         onOff = true;
//                         remainMin.remain = list;
//                         remainMin.positon = [i, j];
//                     }
//                 }
//             }
//         }
//         if (remainMin.remain.length === 0) {
//             // 完成
//             return true;
//         } else {
//             const [i, j] = remainMin.positon;
//             const remain = remainMin.remain;
//             if (remainMin.remain.length === 1) {
//                 board[i][j] = remain[0];
//                 updateYueshu();
//             } else {
//                 remain.some(item => {
//                     const old = board[i][j];
//                     board[i][j] = item;
//                     const result = updateYueshu();
//                     if (!result) {
//                         board[i][j] = old;
//                     }
//                     return result;
//                 });
//             }
//         }
//     }
//     updateYueshu();
//     console.log(board)
// }

// solveSudoku([
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ]);
