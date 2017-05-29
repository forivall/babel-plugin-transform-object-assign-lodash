export default function () {
  return {
    visitor: {
      CallExpression(path, file) {
        if (path.get('callee').matchesPattern('Object.assign')) {
          path.node.callee = file.addImport('lodash/assign', 'default', 'assign');
        }
      }
    }
  };
}
