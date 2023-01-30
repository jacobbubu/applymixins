"use strict";
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
Object.defineProperty(exports, '__esModule', { value: true });
module.exports = applyMixins
exports.default = applyMixins;

