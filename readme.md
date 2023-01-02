# Bespoke Photos

## Dev
* `start` To start Electron in dev mode
* `make` Runs package first and then generates an .app package that can be executed and distributed
* `package`: This command will package your application into a platform-specific executable bundle and put the result in a folder

# how to access electron from within the renderer process
const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;


# Static asset not found
These two need to be relative (like shown here), not absolute (which is how react-scripts generates them)
<script defer="defer" src="static/js/main.d77253ae.js"></script>
<link href="static/css/main.3486ab33.css" rel="stylesheet">
