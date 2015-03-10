# Notification API fallback

Small wrapper for Notification API, that gives you fallback to simple html and css notification.

## Usage

Include script 
```HTML
    <script src="notification.js"></script>
```
and then use it as a regular notification

```javascript
	// Use it as a regular Notification
	var n = new Notification('New Message');

	// with icon
	var n = new Notification('New Message', {
		icon: 'path/to/icon'
	});
```

If `window.Notification` is presented, it will give you standard notification.

If it not your will get cool css notification, like this.

<img src='http://i62.tinypic.com/2e3tshz.jpg' width='200' height='60'>

Also you have some special functionality, for example, you can specify time when notification will be presented:

```javascript
	// notification will be presented agter 1000 ms
	var n = new Notification('Holla!', {
		enterAfter: 1000  // time is ms
	}); 
	
	// hide notification after 2000 ms
	n.leaveAfter(2000);
```
with love by [@drkraken](http://github/drkraken)
License: MIT


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/drKraken/notification-fallback.js/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

