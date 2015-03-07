(function (global) {
	'use strict';
	var doc = global.document;

	if (!(global.Notification || global.notify)) {
		var s = doc.createElement('style'),
			standart = {
				enterAfter : 0,
				closeOn : 'click',
				tag : 'message'
			},
			deleteNotification = function () {
				var note = doc.querySelector('.__notify');
				note.parentNode.removeChild(note);
			},

			loadStyling = function () {
				s.setAttribute('data-notify', 'notification');
				s.innerHTML = '.__notify {overflow: hidden; clear: both; border-radius: 3px; width: 220px; z-index: 9999; font-size: 0.9em; padding: 20px 15px; background: rgb(27, 32, 50); color: #fff; font-family: sans-serif; box-shadow: 0 4px 7px rgba(0, 0, 0, .4); position: fixed; bottom: 10px; right: 15px; text-align:center}';
				s.innerHTML += ' .__notify .__close-btn { width: 8%; float: right; text-decoration: none; color: #686d7c; position: relative; bottom: 10px; left: 9px;}';
				s.innerHTML += ' .__notify .__message {float: left; width: 90%;} .__notify .__close-btn:hover { color: #e04c35;}';
				doc.getElementsByTagName('head')[0].appendChild(s);
			},

			addEvent = function (element, evt, handler) {
				if (typeof addEventListener === 'function') {
					element.addEventListener(evt, handler, false);
				} else if (typeof attachEvent === 'function') {
					element.attachEvent(evt, handler);
				} else {
					element.onlick = handler;
				}
			},

			createNotificator = function (message) {
				var notify = doc.createElement('div'),
					close  = doc.createElement('a'),
					msg    = doc.createElement('div');
				close.className = '__close-btn';
				close.setAttribute('href', '#none');
				close.innerHTML = '&#10006;';
				addEvent(close, 'click', deleteNotification);
				notify.className = '__notify';
				msg.className = '__message';
				msg.innerHTML = message;
				notify.appendChild(close);
				notify.appendChild(msg);
				doc.body.appendChild(notify);
			};

		global.Notification = function (title, options) {
			this.title = (title || 'New Message');
			this.options = options || standart;

			if (!doc.querySelector('[data-notify="notification"]')) {
				loadStyling();
			}

			setTimeout(function () {
				createNotificator(title);
			}, this.options.enterAfter);
		};

		global.Notification.prototype.leaveAfter = function (time) {
			setTimeout(this.close, time);
		};

		global.Notification.prototype.close = deleteNotification;

		global.notify = global.Notification;

	} else {
		global.notify = global.Notification;
	}
})(window);