# shape.js
A simple way to store configuration/context in the browser.

## Usage

```
let config = Shape()

config.setting = 1
```

The _setting_ property will automatically be stored via window.localStorage and retrieved from the same.

```
config._default('url', 'localhost')
```

If _config.url_ does not exist it will be populated with the value 'localhost'.
If it does exist it will be left alone.

```
config2 = Shape('__something++')
```

This new object will not collide with the previous one.
i.e. different "namespace".
