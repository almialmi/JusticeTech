const path = require('path');
const { app,Menu,BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const isMac = process.platform === 'darwin'


function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: isDev ? false : true,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
    },
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
 /* if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }*/


}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready',()=>{
  createWindow()

  const template =[
    {
      label:'Demo',
      submenu:[
        { label: 'submenu1',
          click:function(){
            console.log("click submenu1")
          }
        },
        { type: 'separator' },
        { label: 'sebmenu2',
          click:function(){
            console.log("click submenu2")
          }
       }, 
      ]
    },
    {
      label: 'File',
      submenu: [
        isMac ? { role: 'close' } : { role: 'quit' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectAll' },
      ]
    },
  ]
 const menu = Menu.buildFromTemplate(template);
 Menu.setApplicationMenu(menu);

});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


