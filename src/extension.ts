import * as vscode from 'vscode'
import * as path from 'path'

export function activate(context: vscode.ExtensionContext) {
  console.log('"ktr-utils" is now active!');

  let disposable = vscode.commands.registerCommand('ktr-utils.copyDir', () => {
    const
      ed = vscode.window.activeTextEditor,
      pth = ed?.document.uri.fsPath
    if (pth) {
      const dir = path.dirname(pth)
      vscode.env.clipboard.writeText(dir)
        .then(() => 
          vscode.window.showInformationMessage('Copied directory to clipboard')
        )
    } else {
      vscode.window.showErrorMessage('Could not get path of current file')
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}