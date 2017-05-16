import * as vscode from 'vscode';

export const activate = (context) => {
    console.log('Covermeh activated!');

    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    
    const disposable = vscode.commands.registerCommand('extension.sayHello', function () {
        const output = 'testMeh';
        vscode.window.showInformationMessage(testMeh);
    });
    
    context.subscriptions.push(disposable);
};

// this method is called when your extension is deactivated
export const deactivate = () => {

}