<<<<<<< HEAD
=======
var map;
var map1;
var map2;
>>>>>>> 13fc05d2f1633df2bde815a2cb7743d8eb0b6c17
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: new google.maps.LatLng(21.0539617,105.7879371),
		mapTypeId: 'roadmap'
	});
<<<<<<< HEAD

	var map1 = new google.maps.Map(document.getElementById('map1'), {
		zoom: 16,
		center: new google.maps.LatLng(21.0539610,105.7879379),
		mapTypeId: 'roadmap'
	});

	var map2 = new google.maps.Map(document.getElementById('map2'), {
		zoom: 16,
		center: new google.maps.LatLng(21.0539611,105.7879372),
		mapTypeId: 'roadmap'
	});



	// var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
	// var icons = {
	// 	food: {
	// 		icon: "../client/img/MakerFood.png"
	// 	}
	// };

	// function addMarker(feature) {
	// 	var infowindow=new google.maps.InfoWindow({
	// 		content:feature.content
	// 	})
	// 	var marker = new google.maps.Marker({
	// 		position: feature.position,
	// 		icon: icons[feature.type].icon,
	// 		map: map,
	// 		url:feature.url
	// 	});
	// 	marker.addListener('mouseover', function(){
	// 		infowindow.open(map,marker);
	// 	});
	// 	marker.addListener('mouseout', function(){
	// 		infowindow.close();
	// 	});
	// 	marker.addListener('click', function(){
	// 		window.location.href = this.url;
	// 	});
	// }


	// var features = [
	// 	{
	// 		position: new google.maps.LatLng(21.0539617,105.7879371),
	// 		type: 'food',
	// 		content:"<p>Our content is here</p>",
	// 		url:"http://news.zing.vn/5-quan-pho-ngon-nuc-tieng-cua-ha-noi-post546154.html"
	// 	}
	// ];

	// for (var i = 0, feature; feature = features[i]; i++) {
	// 	addMarker(feature);
	// }
=======
	map1 = new google.maps.Map(document.getElementById('map1'), {
			zoom: 16,
			center: new google.maps.LatLng(16.0587793,108.1761346),
			mapTypeId: 'roadmap'
	});
	map2 = new google.maps.Map(document.getElementById('map2'), {
			zoom: 16,
			center: new google.maps.LatLng(10.7680519,106.4141714),
			mapTypeId: 'roadmap'
	});
	
	var icons = {
		food: {
			icon: "./img/MakerFood.png"
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
			url:'fooddetailpage.html',
		}
	];

	for (var i = 0, feature; feature = features[i]; i++) {
		addMarker(feature);
	}
>>>>>>> 13fc05d2f1633df2bde815a2cb7743d8eb0b6c17
}
function setLocation(x){
	var idx = document.getElementById(x).selectedIndex;
	var lat= document.getElementById(x)[idx].getAttribute('lat')
	var lng = document.getElementById(x)[idx].getAttribute('lng');
	var location={lat:Number(lat),lng:Number(lng)}
<<<<<<< HEAD
	map.setCenter(location)
 }

//  function setLocation(){
// 	var idx = document.getElementById("location_list").selectedIndex;
// 	var lat= document.getElementById("location_list")[idx].getAttribute("lat")
// 	var lng = document.getElementById("location_list")[idx].getAttribute("lng");
// 	var location={lat:Number(lat),lng:Number(lng)}
// 	map1.setCenter(location)
//  }

// function setLocation(){
// 	var idx = document.getElementById("location_list").selectedIndex;
// 	var lat= document.getElementById("location_list")[idx].getAttribute("lat")
// 	var lng = document.getElementById("location_list")[idx].getAttribute("lng");
// 	var location={lat:Number(lat),lng:Number(lng)}
// 	map2.setCenter(location)
//  }
=======
	switch(x){
		case 'bac':
			console.log(location)
			map.setCenter(location);
			break
		case 'trung':
			console.log(location);
			map1.setCenter(location);
			break
		case 'nam' :
			console.log(location);
			map2.setCenter(location);
			break
	}
 }
// -----------------------------------------------------------------------------

>>>>>>> 13fc05d2f1633df2bde815a2cb7743d8eb0b6c17
