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
```

If `window.Notification` is presented, it will give you standard notification.

If it not your will get cool css notification, like this.

<img src='http://i60.tinypic.com/2vju7tz.png' width='200' height='60'>

Also you have some special functionality, for example, you can specify time when notification will be presented:

```javascript
	var n = new Notification('Holla!', {
		enterAfter: 1000  // time is seconds
	});
```

License: MIT
