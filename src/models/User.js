"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(data) {
        this.data = data;
        this.events = {};
    }
    User.prototype.get = function (propName) {
        return this.data[propName];
    };
    User.prototype.set = function (update) {
        Object.assign(this.data, update);
    };
    User.prototype.on = function (eventName, callback) {
        var handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    };
    User.prototype.trigger = function (eventName) {
        var handlers = this.events[eventName];
        if (!handlers || handlers.length === 0) {
            return;
        }
        handlers.forEach(function (callback) {
            callback();
        });
    };
    return User;
}());
exports.User = User;
