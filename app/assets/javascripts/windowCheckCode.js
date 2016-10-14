// from https://github.com/yahoo/subscribe-ui-event/blob/2fe764d1b5f214af5125b3553209f0bac3d52ca4/src/mainEventConnectors.js#L24

// global variables
var doc;
var win;
var body;

if (typeof window !== 'undefined') {
  win = window;
  doc = win.document || document;
  body = doc.body;
}