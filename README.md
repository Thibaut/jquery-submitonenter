# jQuery.submitOnEnter

A jQuery plugin to submit forms on enter.

## Usage

```javascript
jQueryObject.submitOnEnter();
jQueryObject.submitOnEnter(selector);
```

If selector is omitted or is null, binds directly.

When a selector is provided, uses delegated events.

Will submit either `jQueryObject` or the closest form.

Examples:

```javascript
$('form').submitOnEnter(); // Direct method
$(document).submitOnEnter('form'); // Delegated method

$('input[data-behavior*="submit-on-enter"]').submitOnEnter(); // Direct method, specific inputs
$('#form').submitOnEnter('input, textarea, select') // Delegated method, specific form and inputs
```

## License

Copyright (c) 2012 [Thibaut Courouble](http://thibaut.me)

Licensed under the MIT License.
