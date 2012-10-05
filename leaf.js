var map = L.map('map', {
	center: [18, -28],
	zoom: 5,
	
});

L.tileLayer( 'tiles/{x}_{y}.jpg', {
	attribution: '&copy; Kevin Reeves 2012',
    maxZoom: 18,
}).addTo(map);