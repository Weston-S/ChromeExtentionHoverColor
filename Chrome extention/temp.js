// content.js
let loaded = false;

if (!window.contentLoaded) {
  // do something
  console.log("The window content.js has been loaded~!");
  window.contentLoaded = true;
}

console.log(window.contentLoaded);