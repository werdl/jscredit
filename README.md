# jscredit
> If they might not credit your work

## Why
- Let's say you are writing a website.
- But the client is just going to nab your HTML, remove the credit div and run!
- So use jscredit, and get credited every time.

## How
- use the version hosted at [the repo](https://raw.githubusercontent.com/werdl/jscredit/main/jscredit-obfuscated.js)
- then make a function call
```js
/**
 * Sets or updates the credit information on the webpage.
 * If the specified id exists, it updates the content with the provided name and helped_with values.
 * If the specified id does not exist, it creates a new div element with the provided id and sets the content.
 * Information displayed will be `Thanks to ${name} for helping with ${helped_with}!`
 * @param {string} name - The name of the person being credited.
 * @param {string} [helped_with="this project"] - The specific project or task the person helped with.
 * @param {string} [id="credit"] - The id of the element where the credit information will be displayed.
 */

 credit("werdl")
```