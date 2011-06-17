chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  var n;
  n = webkitNotifications.createNotification(request.icon || '', request.title || '', request.message || '');
  n.ondisplay = function() {
    return setTimeout(function() {
      return n.cancel();
    }, 5000);
  };
  return n.show();
});