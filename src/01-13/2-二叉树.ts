interface Node {
    left: Node | null;
    right: Node | null;
    val: number;
}

function binaryTreePaths(root: Node | null): string[] {
    if (!root) {
        return [];
    } else {
        const value = root.val;
        if (!root.left && !root.right) {
            return [value + ""];
        } else {
            const left = binaryTreePaths(root.left);
            const right = binaryTreePaths(root.right);
            return left.concat(right).map(item => value + "->" + item);
        }
    }
}

console.log(

    binaryTreePaths({
        left: {
            val: 2,
            left: null,
            right: {
                val: 5,
                left: null,
                right: null
            }
        },
        right: {
            left: null,
            right: null,
            val: 3
        },
        val: 1
    })

);



