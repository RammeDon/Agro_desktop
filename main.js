const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    show: false, // hide until ready
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true },
  });

  win.once("ready-to-show", () => {
    win.maximize();
    win.show();
  });

  win.loadFile(path.join(__dirname, "build", "index.html"));
}

app.whenReady().then(createWindow);
