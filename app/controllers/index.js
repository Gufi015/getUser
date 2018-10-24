$.index.open();

var httpClient = Ti.Network.createHTTPClient({
	onload : function(e) {
		var result = JSON.parse(this.responseText);
		Ti.API.info(JSON.stringify(result));
		for (var i = 0; i < result.response.users.length; i++) {

			var viewMain = Ti.UI.createView({
				width : '100%',
				height : '20%',
				backgroundColor : '#4aa59b',
				layout : 'horizontal'
			});

			$.scroll.add(viewMain);

			var viewContainer = Ti.UI.createView({
				width : '80%',
				height : '100%',
				top : '3%',
				layout : 'vertical',
				borderColor : 'black',
				borderRadius : 1,
			});
			viewMain.add(viewContainer);

			var userId = Ti.UI.createLabel({
				text : result.response.users[i].id,
				height : Ti.UI.SIZE,
				color : 'black',
				top : '2%',
				font : {
					fontSize : '15'
				},
				layout : 'vertical',
				left : 5
			});
			viewContainer.add(userId);

			var name = Ti.UI.createLabel({
				text : result.response.users[i].first_name,
				height : Ti.UI.SIZE,
				color : 'black',
				top : '2%',
				font : {
					fontSize : '15'
				},
				layout : 'vertical',
				left : 5
			});
			viewContainer.add(name);

			var lastName = Ti.UI.createLabel({
				text : result.response.users[i].last_name,
				height : Ti.UI.SIZE,
				color : 'black',
				top : '2%',
				font : {
					fontSize : '15'
				},
				layout : 'vertical',
				left : 5
			});
			viewContainer.add(lastName);

		}

		var btnPhotos = Ti.UI.createButton({
			color : 'white',
			width : '85%',
			height : '10%',
			bottom : 0,
			text: 'Fotos',
		});

		$.scroll.add(btnPhotos);

		btnPhotos.addEventListener('click', function(e) {
			var photo = Alloy.createController('photos').getView();
			photo.open();
		});

	},
	onerror : function(e) {
		alert('Error ' + e.error);
	},
	timeout : 5000,
});

httpClient.open('GET', 'https://api.cloud.appcelerator.com/v1/users/query.json?key=39CfszDc4IxFppvqRyykQDgVPyuPhed2&pretty_json=true&count=true');
httpClient.send();

