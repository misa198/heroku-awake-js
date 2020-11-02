"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
var wakeUp = function (url, interval, callback) {
    if (interval === void 0) { interval = 25; }
    var milliseconds = interval * 60000;
    setTimeout(function () {
        try {
            node_fetch_1.default(url);
        }
        catch (err) {
        }
        finally {
            try {
                callback();
            }
            catch (e) {
                callback ? console.log("Callback failed: ", e.message) : null;
            }
            finally {
                return wakeUp(url, interval, callback);
            }
        }
    }, milliseconds);
};
exports.default = wakeUp;
