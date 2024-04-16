## Rewinding Javascript
<hr>
Adding JS code to a website. <br>

1. Add between script Tags. Inline approach. <br>
ex)

```html
<script>
alert('Hello')
</script>
```

- Don't use because it cause quickly lead to unmaintainable & complex HTML files.
- Typically only used for very short scripts

<br>

2. import Javascript file Via script src tags
```html
<script src="script.js"></script>
```
- Separates HTML & JavaScript code.
- Maintaining complex JavaScript powered apps becomes easier.

<br>

- defer attribute : Load Javascript after HTML when we need to use HTML elements. But, Alternatively, we could move the script tags to the end of the body section. It works same as well. 

<br>

- type = 'module' attribute : treat Javascript as a module, which unlock important syntax -> import. 
this can import script A to script B. <br> ex) import / export

<br>

Nevertheless, React projects always use a **build process** which inject script tags in HTML automatically. 

<br>
The reason why React Projects Use A Build Process.

1. Raw, unprocessed React code won't execute in the browser.
Cause, React use spacial JSX function. Which is not standard Javascript feature(Adding HTML tags into Javascript files).
2. In addition, the code would not be optimized for production(a.g., not minified)

