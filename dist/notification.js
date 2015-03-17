;(function (global) {
	'use strict';

	// caching global variables in local scope
	var
		doc = global.document,
		commonJS = (typeof module !== 'undefined' && module.exports);

	// view if standart API presented
	if (!(global.Notification)) {
		var
			s = doc.createElement('style'),
			standart = {
				enterAfter : 0
			},

			deleteNotification = function () {
				var note = doc.querySelector('.__notify');
				note.parentNode.removeChild(note);
			},

			// create CSS styling node for notification
			loadStyling = function () {
				s.setAttribute('data-notify', 'notification');
				s.innerHTML = '.__notify {overflow: hidden; clear: both; border-radius: 3px; width: 240px; z-index: 9999; font-size: 0.9em; padding: 0; background: #fff; color: #686d7c; font-family: sans-serif; box-shadow: 0 4px 7px rgba(0, 0, 0, .4); position: fixed; bottom: 10px; right: 15px; text-align:center}';
				s.innerHTML += ' .__notify .__close-btn { width: 8%; float: right; text-decoration: none; color: #686d7c; position: relative;}';
				s.innerHTML += ' .__notify .__message {float: right; width: 65%; padding: 20px 0; overflow: hidden; white-space: normal; word-wrap: break-word;} .__notify .__close-btn:hover { color: #e04c35;}';
				s.innerHTML += ' .__notify .__image-box {float:left; width: 60px; height: 60px; background: #f4f4f4;}';
				s.innerHTML += ' .__notify .__image-box .__image {float:left; width: 60px; height: 60px;}';
				doc.getElementsByTagName('head')[0].appendChild(s);
			},
			// event helper
			addEvent = function (element, evt, handler) {
				if (typeof addEventListener === 'function') {
					element.addEventListener(evt, handler, false);
				} else if (typeof attachEvent === 'function') {
					element.attachEvent('on' + evt, handler);
				} else {
					element['on' + evt] = handler;
				}
			},

			// creating notification node
			createNotificator = function (message, options) {
				var notify = doc.createElement('div'),
					close  = doc.createElement('a'),
					msg    = doc.createElement('div'),
					img    = doc.createElement('img'),
					imageBox    = doc.createElement('div');
				close.className = '__close-btn';
				close.setAttribute('href', '#none');
				close.innerHTML = '&#10006;';
				imageBox.className = '__image-box';
				addEvent(close, 'click', deleteNotification);
				notify.className = '__notify';
				msg.className = '__message';
				msg.innerHTML = message;
				notify.appendChild(close);
				notify.appendChild(msg);
				if (options.icon !== undefined) {
					img.className = '__image';
					img.src = options.icon;
					img.setAttribute('alt', message);
					imageBox.appendChild(img);
				}
				notify.appendChild(imageBox);
				doc.body.appendChild(notify);
			},

			Notification = function (title, options) {
				this.title = (title || 'New Message');
				this.options = (options || standart);

				if (!doc.querySelector('[data-notify="notification"]')) {
					loadStyling();
				}

				setTimeout(function () {
					createNotificator(this.title, this.options);
				}.bind(this), this.options.enterAfter);
			};

		Notification.prototype = {
			leaveAfter : function (time, context) {
				setTimeout(this.close, time);
			},
			close: deleteNotification
		};

		if (commonJS) {
			module.exports = Notification;
		} else {
			window.Notification = Notification;
		}

	} else {
		// caching global
		var
			n     = global.Notification,
			proto = n.prototype;

		// adding leaveAfter functionality for standart Notification
		proto.leaveAfter = function (time, context) {
			setTimeout(context.__proto__.close.bind(context), time);
		};

	}

})(window);
