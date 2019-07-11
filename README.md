# simpleArrayJS
Simple Array JS (with retro compatibility)

We have all wishes to be able to access the first element of a JS array with the index 1. This lib makes it possible:

```javascript
// What you have been doing so far:
var fruits = ['0','apples','bananas'];
fruits[1]; // 'apples'

// Now you are not forced to add the '0' in your array anymore:
getElement(['apples','bananas'], 1); // 'apples'

// it is retro-compatible with your "old" arrays starting with '0'!
getElement(['0','apples','bananas'], 1); // 'apples'

```

With its smart retro-compatible engine, you have not excuses not to use this library anymore!

Just import the file SimpleArray.js and you're good to go :)
