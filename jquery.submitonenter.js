/*
 * jquery.submitOnEnter v1.0.1
 *
 * Copyright (c) 2012 Thibaut Courouble
 * http://thibaut.me
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 */

(function($) {
  'use strict';

  function submitOnEnter(event) {
    if (event.which === 13 && !event.altKey && !event.shiftKey && !event.ctrlKey && !event.metaKey) {
      event.preventDefault();
      event.stopPropagation();

      (event.delegateTarget.nodeName === 'FORM' ?
        $(event.delegateTarget) :
        (event.currentTarget.nodeName === 'FORM') ?
          $(event.currentTarget) :
          $(event.currentTarget).closest('form')
      ).not(':has(input[type=submit]:disabled)')
       .not(':has(button[type=submit]:disabled)')
       .submit();
    }
  }

  $.fn.submitOnEnter = function(selector) {
    return this.off('.submitOnEnter').on('keydown.submitOnEnter', selector, submitOnEnter);
  };
})(jQuery);
