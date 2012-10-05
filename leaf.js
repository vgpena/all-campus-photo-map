var tiles = new L.tileLayer( 'tiles/{x}_{y}.jpg', {
	attribution: '&copy; Kevin Reeves 2012',
	maxZoom: 5,
});

var map = L.map('map', {
		center: [73, -53],//first var is y; you go lower when number goes lower; second number is x; you go right when abs. val of number is lower
		zoom: 5,
		layers: tiles,
	});

