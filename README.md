# Notification API fallback

Small wrapper for Notification API, that give you fallback to simple html and css notification.

## Usage

```javascript
	// Use it as a regular Notification
	var n = new Notification('New Message');
```

If ```window.Notification``` is presented , it give you standart notification.

If it not your will get cool css notification, like this.

Also you get some special functionality, for example, you can specify time when notification will be presented

```javascript
	var n = new Notification('Holla!', {
		enterAfter: 1000  // time is seconds
	});
```

License: MIT
