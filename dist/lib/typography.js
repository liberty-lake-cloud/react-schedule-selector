"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Subtitle = void 0;
var _colors = _interopRequireDefault(require("./colors"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _react = require("@emotion/react");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const Subtitle = exports.Subtitle = _styled.default.h2(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n"])), props => (0, _react.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        font-size: 20px;\n        font-weight: 400;\n        color: ", ";\n        text-align: ", ";\n\n        @media (max-width: 700px) {\n            font-size: 18px;\n        }\n    "])), _colors.default.black, props.align || 'center'));
const Text = exports.Text = _styled.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    ", "\n"])), (0, _react.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        font-size: 14px;\n        font-weight: 300;\n        line-height: ", "px;\n        color: ", ";\n        margin: 5px 0;\n    "])), 14 * 1.37, _colors.default.grey));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sb3JzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfc3R5bGVkIiwiX3JlYWN0IiwiX3RlbXBsYXRlT2JqZWN0IiwiX3RlbXBsYXRlT2JqZWN0MiIsIl90ZW1wbGF0ZU9iamVjdDMiLCJfdGVtcGxhdGVPYmplY3Q0Iiwib2JqIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwic3RyaW5ncyIsInJhdyIsInNsaWNlIiwiT2JqZWN0IiwiZnJlZXplIiwiZGVmaW5lUHJvcGVydGllcyIsInZhbHVlIiwiU3VidGl0bGUiLCJleHBvcnRzIiwic3R5bGVkIiwiaDIiLCJwcm9wcyIsImNzcyIsImNvbG9ycyIsImJsYWNrIiwiYWxpZ24iLCJUZXh0IiwicCIsImdyZXkiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3R5cG9ncmFwaHkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBTdWJ0aXRsZSA9IHN0eWxlZC5oMjx7IGFsaWduPzogc3RyaW5nIH0+YFxuICAgICR7KHByb3BzKSA9PiBjc3NgXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLmJsYWNrfTtcbiAgICAgICAgdGV4dC1hbGlnbjogJHtwcm9wcy5hbGlnbiB8fCAnY2VudGVyJ307XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQucGBcbiAgICAke2Nzc2BcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogJHsxNCAqIDEuMzd9cHg7XG4gICAgICAgIGNvbG9yOiAke2NvbG9ycy5ncmV5fTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICBgfVxuYDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsT0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsT0FBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO0FBQXFDLElBQUFHLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUE7QUFBQSxTQUFBUCx1QkFBQVEsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLEtBQUFFLE9BQUEsRUFBQUYsR0FBQTtBQUFBLFNBQUFHLHVCQUFBQyxPQUFBLEVBQUFDLEdBQUEsU0FBQUEsR0FBQSxJQUFBQSxHQUFBLEdBQUFELE9BQUEsQ0FBQUUsS0FBQSxjQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUQsTUFBQSxDQUFBRSxnQkFBQSxDQUFBTCxPQUFBLElBQUFDLEdBQUEsSUFBQUssS0FBQSxFQUFBSCxNQUFBLENBQUFDLE1BQUEsQ0FBQUgsR0FBQTtBQUU5QixNQUFNTSxRQUFRLEdBQUFDLE9BQUEsQ0FBQUQsUUFBQSxHQUFHRSxlQUFNLENBQUNDLEVBQUUsQ0FBQWxCLGVBQUEsS0FBQUEsZUFBQSxHQUFBTyxzQkFBQSxxQkFDMUJZLEtBQUssUUFBS0MsVUFBRyxFQUFBbkIsZ0JBQUEsS0FBQUEsZ0JBQUEsR0FBQU0sc0JBQUEscU1BR0hjLGVBQU0sQ0FBQ0MsS0FBSyxFQUNQSCxLQUFLLENBQUNJLEtBQUssSUFBSSxRQUFRLENBS3hDLENBQ0o7QUFFTSxNQUFNQyxJQUFJLEdBQUFSLE9BQUEsQ0FBQVEsSUFBQSxHQUFHUCxlQUFNLENBQUNRLENBQUMsQ0FBQXZCLGdCQUFBLEtBQUFBLGdCQUFBLEdBQUFLLHNCQUFBLHlCQUN0QmEsVUFBRyxFQUFBakIsZ0JBQUEsS0FBQUEsZ0JBQUEsR0FBQUksc0JBQUEsZ0pBR2MsRUFBRSxHQUFHLElBQUksRUFDZmMsZUFBTSxDQUFDSyxJQUFJLEVBRzNCIn0=