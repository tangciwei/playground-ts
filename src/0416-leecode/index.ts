
/**
 * @param {number} capacity
 */
interface Cache {
    [key:string]: {
        data:any;
        // index:
    }
}
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cache = {} as Cache;
    this.list = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const data = this.cache[key];
    if (data === undefined) {
        return -1;
    } else {
        // todo
        return data;
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // 需要删哪个是重点。
    // if () {
    //     const delkey = this.list.shift();
    //     delete this.cache[delkey];
    // }

    this.cache[key] = value;

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
