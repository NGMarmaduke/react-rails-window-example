A stripped down rails app to demonstrate the problems with `react-rails` defining a window scope
on the server environment

`windowCheckCode.js` does a type check on window to determine the environment it is being
executed in, this code was extracted from https://github.com/yahoo/subscribe-ui-event

```javascript
  if (typeof window !== 'undefined') {
    win = window;
    doc = win.document || document;
    body = doc.body;
  }
```

When running in the ExecJS environment the following error is thrown:
```
ReferenceError: document is not defined
```