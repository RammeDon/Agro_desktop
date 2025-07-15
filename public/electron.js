// public/electron.js

const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: { contextIsolation: true },
  });
  win.loadFile(path.join(__dirname, "..", "build", "index.html"));
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
