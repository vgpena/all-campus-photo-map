var map = L.map('map', {
	center: [8, 8],
	zoom: 5,
	
});

map.setView([18, -28], 5);

L.tileLayer( 'tiles/{x}_{y}.jpg', {
	attribution: '&copy; Kevin Reeves 2012',
    maxZoom: 18,
}).addTo(map);