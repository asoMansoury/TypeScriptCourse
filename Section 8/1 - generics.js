var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var names = ['Max', 'Anna'];
var gg = {
    1: "Aso"
};
console.log(gg[1]);
var dd = {};
dd.name = 'max';
dd.age = 18;
//dd.isGreater = false;
//-------------------------------------------------------------------------------------------------
//function generic
function mergObj(a, b) {
    return __assign(__assign({}, a), b);
}
;
var merged = mergObj({ username: "max" }, { age: 35 });
console.log(merged);
function merge(a, b) {
    return { a: a, b: b, sum: a + b };
}
var result = merge(1, 2);
console.log({ result: result });
//Generic for class and interfaces
var User = /** @class */ (function () {
    function User(id) {
        this.id = id;
    }
    return User;
}());
var RoleImp = /** @class */ (function () {
    function RoleImp() {
        this.roles = [];
    }
    RoleImp.prototype.mergObj = function (a) {
        this.roles.push(a);
        console.log("Role added: ".concat(a));
    };
    RoleImp.prototype.getRoles = function () {
        return this.roles;
    };
    RoleImp.prototype.merge = function (a, b) {
        return { a: a, b: b, sum: a + b };
    };
    return RoleImp;
}());
var rolImp = new RoleImp();
console.log(rolImp.merge(2, 2));
