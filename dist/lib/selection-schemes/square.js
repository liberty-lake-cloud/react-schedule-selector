"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.reduce.js");
var dateUtils = _interopRequireWildcard(require("../date-utils"));
var _dateFns = require("date-fns");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const square = (selectionStart, selectionEnd, dateList) => {
  let selected = [];
  if (selectionEnd == null) {
    if (selectionStart) selected = [selectionStart];
  } else if (selectionStart) {
    const dateIsReversed = (0, _dateFns.isBefore)((0, _dateFns.startOfDay)(selectionEnd), (0, _dateFns.startOfDay)(selectionStart));
    const timeIsReversed = selectionStart.getHours() > selectionEnd.getHours();
    selected = dateList.reduce((acc, dayOfTimes) => acc.concat(dayOfTimes.filter(t => selectionStart && selectionEnd && dateUtils.dateIsBetween(dateIsReversed ? selectionEnd : selectionStart, t, dateIsReversed ? selectionStart : selectionEnd) && dateUtils.timeIsBetween(timeIsReversed ? selectionEnd : selectionStart, t, timeIsReversed ? selectionStart : selectionEnd))), []);
  }
  return selected;
};
var _default = exports.default = square;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkYXRlVXRpbHMiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZGF0ZUZucyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsInNxdWFyZSIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwiZGF0ZUxpc3QiLCJzZWxlY3RlZCIsImRhdGVJc1JldmVyc2VkIiwiaXNCZWZvcmUiLCJzdGFydE9mRGF5IiwidGltZUlzUmV2ZXJzZWQiLCJnZXRIb3VycyIsInJlZHVjZSIsImFjYyIsImRheU9mVGltZXMiLCJjb25jYXQiLCJmaWx0ZXIiLCJkYXRlSXNCZXR3ZWVuIiwidGltZUlzQmV0d2VlbiIsIl9kZWZhdWx0IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VsZWN0aW9uLXNjaGVtZXMvc3F1YXJlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGRhdGVVdGlscyBmcm9tICcuLi9kYXRlLXV0aWxzJ1xuaW1wb3J0IHsgaXNCZWZvcmUsIHN0YXJ0T2ZEYXkgfSBmcm9tICdkYXRlLWZucydcblxuY29uc3Qgc3F1YXJlID0gKHNlbGVjdGlvblN0YXJ0OiBEYXRlIHwgbnVsbCwgc2VsZWN0aW9uRW5kOiBEYXRlIHwgbnVsbCwgZGF0ZUxpc3Q6IEFycmF5PEFycmF5PERhdGU+Pik6IEFycmF5PERhdGU+ID0+IHtcbiAgbGV0IHNlbGVjdGVkOiBBcnJheTxEYXRlPiA9IFtdXG4gIGlmIChzZWxlY3Rpb25FbmQgPT0gbnVsbCkge1xuICAgIGlmIChzZWxlY3Rpb25TdGFydCkgc2VsZWN0ZWQgPSBbc2VsZWN0aW9uU3RhcnRdXG4gIH0gZWxzZSBpZiAoc2VsZWN0aW9uU3RhcnQpIHtcbiAgICBjb25zdCBkYXRlSXNSZXZlcnNlZCA9IGlzQmVmb3JlKHN0YXJ0T2ZEYXkoc2VsZWN0aW9uRW5kKSwgc3RhcnRPZkRheShzZWxlY3Rpb25TdGFydCkpXG4gICAgY29uc3QgdGltZUlzUmV2ZXJzZWQgPSBzZWxlY3Rpb25TdGFydC5nZXRIb3VycygpID4gc2VsZWN0aW9uRW5kLmdldEhvdXJzKClcblxuICAgIHNlbGVjdGVkID0gZGF0ZUxpc3QucmVkdWNlKFxuICAgICAgKGFjYywgZGF5T2ZUaW1lcykgPT5cbiAgICAgICAgYWNjLmNvbmNhdChcbiAgICAgICAgICBkYXlPZlRpbWVzLmZpbHRlcihcbiAgICAgICAgICAgIHQgPT5cbiAgICAgICAgICAgICAgc2VsZWN0aW9uU3RhcnQgJiZcbiAgICAgICAgICAgICAgc2VsZWN0aW9uRW5kICYmXG4gICAgICAgICAgICAgIGRhdGVVdGlscy5kYXRlSXNCZXR3ZWVuKFxuICAgICAgICAgICAgICAgIGRhdGVJc1JldmVyc2VkID8gc2VsZWN0aW9uRW5kIDogc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgICAgICAgdCxcbiAgICAgICAgICAgICAgICBkYXRlSXNSZXZlcnNlZCA/IHNlbGVjdGlvblN0YXJ0IDogc2VsZWN0aW9uRW5kXG4gICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgZGF0ZVV0aWxzLnRpbWVJc0JldHdlZW4oXG4gICAgICAgICAgICAgICAgdGltZUlzUmV2ZXJzZWQgPyBzZWxlY3Rpb25FbmQgOiBzZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICB0LFxuICAgICAgICAgICAgICAgIHRpbWVJc1JldmVyc2VkID8gc2VsZWN0aW9uU3RhcnQgOiBzZWxlY3Rpb25FbmRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgIFtdXG4gICAgKVxuICB9XG5cbiAgcmV0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