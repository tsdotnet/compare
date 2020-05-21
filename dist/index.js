"use strict";
/**
 * @packageDocumentation
 * @module compare
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeySortedContext = exports.SortContext = exports.type = exports.compare = exports.areSequencesEqual = exports.areEquivalentObjects = exports.areEquivalent = exports.areEqual = void 0;
const tslib_1 = require("tslib");
const type_1 = tslib_1.__importDefault(require("@tsdotnet/type"));
exports.type = type_1.default;
const areEqual_1 = tslib_1.__importDefault(require("./areEqual"));
exports.areEqual = areEqual_1.default;
const areEquivalent_1 = tslib_1.__importDefault(require("./areEquivalent"));
exports.areEquivalentObjects = areEquivalent_1.default;
const areEquivalent_2 = tslib_1.__importDefault(require("./areEquivalent"));
exports.areEquivalent = areEquivalent_2.default;
const areSequencesEqual_1 = tslib_1.__importDefault(require("./areSequencesEqual"));
exports.areSequencesEqual = areSequencesEqual_1.default;
const compare_1 = tslib_1.__importDefault(require("./compare"));
exports.compare = compare_1.default;
const KeySortedContext_1 = tslib_1.__importDefault(require("./KeySortedContext"));
exports.KeySortedContext = KeySortedContext_1.default;
const SortContext_1 = tslib_1.__importDefault(require("./SortContext"));
exports.SortContext = SortContext_1.default;
//# sourceMappingURL=index.js.map