import { commands, window, StatusBarAlignment } from 'vscode';

export const activate = (context) => {
    console.log('Covermeh activated!');

    const statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
    
    var disposable = commands.registerCommand('extension.sayHello', function () {
        const output = 'testMeh';
        window.showInformationMessage(testMeh);
    });
    
    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export const deactivate = () => {

}