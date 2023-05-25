"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Call = void 0;
function Call(url) {
    fetch(url)
        .then(function (response) { return response; });
}
exports.Call = Call;
