"use strict";
var _a, _b;
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let keyValue = new KeyValuePair(11, "Apple");
keyValue.key.toLocaleString();
keyValue.value.toLowerCase();
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let number = ArrayUtils.wrapInArray(1);
function fetch() {
    return { data: null, error: null };
}
let result = fetch();
(_a = result.data) === null || _a === void 0 ? void 0 : _a.username;
let result2 = fetch();
(_b = result2.data) === null || _b === void 0 ? void 0 : _b.title;
class Player {
    constructor(name) {
        this.name = name;
    }
}
class FirstPlayer extends Player {
}
function echo(value) {
    console.log(value);
}
echo({ name: "Bikash" });
echo(new FirstPlayer("BIkash"));
//# sourceMappingURL=generic.js.map