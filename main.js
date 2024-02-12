const { app, BrowserWindow, nativeTheme } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  nativeTheme.themeSource = 'dark';

  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();
});
