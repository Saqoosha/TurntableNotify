jQuery.noConflict()
(($) ->
	$ ->
		timer = setInterval(->
			msgs = $('.messages')
			if msgs.size() == 0 then return
			clearInterval timer
			msgs.bind('DOMNodeInserted', (e) ->
				if e.target.toString().indexOf('HTMLDivElement') >= 0
					setTimeout(->
						console.log e.target.innerText
						chrome.extension.sendRequest
							message: e.target.innerText
					, 10)
			)
		, 200)
)(jQuery)
