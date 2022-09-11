"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TextRenderer {
    render(template, data) {
        const content = template.replace(TextRenderer.VARIABLE_PATTERN, match => {
            const key = match.substring(2, match.length - 1);
            return (data[key] && data[key].toString()) || '';
        });
        return content;
    }
}
exports.default = TextRenderer;
TextRenderer.VARIABLE_PATTERN = /\[\:([a-z][a-z0-9_]+)\]/gm;
//# sourceMappingURL=TextRenderer.js.map