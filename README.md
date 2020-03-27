# typedoc demo - how to exclude not-exported JavaScript symbols?

I want to use typedoc to generate a library documentation. I want public symbols to be visible. However, private symbols that are not importable from outside should not be visible.

To test:

```
$ npm i
$ ./node_modules/.bin/typedoc --out tsdoc --noEmit --excludeNotExported --stripInternal
$ grep Internal tsdoc/modules/_example_.html
    <p>Internal function, should not be documented.</p>
```

In other words, the internal function bar from [example.js](example.js) got documented, although `--excludeNotExported` has been set.

# Update

[This is a well-known issue](https://github.com/TypeStrong/typedoc/issues/639).
