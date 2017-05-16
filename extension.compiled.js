'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deactivate = exports.activate = undefined;

var _vscode = require('vscode');

var activate = exports.activate = function activate(context) {
    console.log('Covermeh activated!');

    var statusBarItem = _vscode.window.createStatusBarItem(_vscode.StatusBarAlignment.Left);

    var disposable = _vscode.commands.registerCommand('extension.sayHello', function () {
        var output = 'testMeh';
        _vscode.window.showInformationMessage(testMeh);
    });

    context.subscriptions.push(disposable);
};

// this method is called when your extension is deactivated
var deactivate = exports.deactivate = function deactivate() {};

//# sourceMappingURL=extension.compiled.js.map