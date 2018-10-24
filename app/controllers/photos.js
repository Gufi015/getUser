// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var responsePhotos = Ti.Network.createHTTPClient({
	onload : function(e) {
		var result = JSON.parse(this.responseText);
		alert(JSON.stringify(result));

		for (var i = 0; i < result.response.photos.length; i++) {

			var viewMain = Ti.UI.createView({
				width : '100%',
				height : '100%',
				layout : 'vertical'
			});
			$.scroll.add(viewMain);
			
			var imageView = Ti.UI.createView({
				width: '98%',
				height: '98%',
				top:'2%',
				color:'black',
			}); 
			viewMain.add(imageView);
			
			var image = Ti.UI.createImageView({
				image : result.response.photos[i].urls.original,
				width : 'auto',
				height : 'auto'
			});
			imageView.add(image);

		}
	},
	onerror : function(e) {
		alert('error' + e.error);
	},
	timeout : 5000,
});

responsePhotos.open('GET', 'https://api.cloud.appcelerator.com/v1/photos/query.json?key=39CfszDc4IxFppvqRyykQDgVPyuPhed2&pretty_json=true&count=true');
responsePhotos.send();
