chrome.extension.onRequest.addListener (request, sender, sendResponse) ->
	n = webkitNotifications.createNotification request.icon or '', request.title or '', request.message or ''
	n.ondisplay = ->
		setTimeout(->
			n.cancel()
		, 5000)
	n.show()
