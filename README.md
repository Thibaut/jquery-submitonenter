# jQuery.submitOnEnter

A jQuery plugin to submit forms on enter.

## Usage

```javascript
.submitOnEnter();
.submitOnEnter(selector);
```

If selector is omitted or null, binds directly, otherwise uses delegated events.

Will submit either the selected element if it's a form, or the closest form.

```javascript
$('form').submitOnEnter(); // Direct method
$(document).submitOnEnter('form'); // Delegated method

$('input[data-behavior*="submit-on-enter"]').submitOnEnter(); // Direct method, specific inputs
$('#form').submitOnEnter('input, textarea, select') // Delegated method, specific form and inputs
```

## License

Copyright (c) 2012 [Thibaut Courouble](http://thibaut.me)

Licensed under the MIT License.
