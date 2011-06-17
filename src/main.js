jQuery.noConflict();
(function($) {
  return $(function() {
    var timer;
    return timer = setInterval(function() {
      var msgs;
      msgs = $('.messages');
      if (msgs.size() === 0) {
        return;
      }
      clearInterval(timer);
      return msgs.bind('DOMNodeInserted', function(e) {
        if (e.target.toString().indexOf('HTMLDivElement') >= 0) {
          return setTimeout(function() {
            console.log(e.target.innerText);
            return chrome.extension.sendRequest({
              message: e.target.innerText
            });
          }, 10);
        }
      });
    }, 200);
  });
})(jQuery);