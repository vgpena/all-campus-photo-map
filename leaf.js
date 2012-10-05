var map = L.map('map', {
	center: [8, 8],
	zoom: 5,
	
});

var x = 0,
tiles = new Array();

while (x < 26){
	var y = 0;
	while (y < 18){
		tiles.push('tiles/'+x+'_'+y+'.jpg')
		y++
	}
	x++
}

map.setView([18, -28], 5);

L.tileLayer( 'tiles/{x}_{y}.jpg', {
	attribution: '&copy; Kevin Reeves 2012',
    maxZoom: 18,
}).addTo(map);