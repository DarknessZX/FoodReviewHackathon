var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: new google.maps.LatLng(21.0539617,105.7879371),
		mapTypeId: 'roadmap'
	});

	var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
	var icons = {
		food: {
			icon: '../client/img/MakerFood.png'
		}
	};

	function addMarker(feature) {
		var infowindow=new google.maps.InfoWindow({
			content:feature.content
		})
		var marker = new google.maps.Marker({
			position: feature.position,
			icon: icons[feature.type].icon,
			map: map,
			url:feature.url
		});
		marker.addListener('mouseover', function(){
			infowindow.open(map,marker);
		});
		marker.addListener('mouseout', function(){
			infowindow.close();
		});
		marker.addListener('click', function(){
			window.location.href = this.url;
		});
	}


	var features = [
		{
			position: new google.maps.LatLng(21.0539617,105.7879371),
			type: 'food',
			content:'<p>Our content is here</p>',
			url:'fooddetailpage.html'
		}
	];

	for (var i = 0, feature; feature = features[i]; i++) {
		addMarker(feature);
	}
}
function setLocation(){
	var idx = document.getElementById('location_list').selectedIndex;
	var lat= document.getElementById('location_list')[idx].getAttribute('lat')
	var lng = document.getElementById('location_list')[idx].getAttribute('lng');
	var location={lat:Number(lat),lng:Number(lng)}
	map.setCenter(location)
 }