(function(global){
	'use strict';

	global.initMapNew = function initMapNew(){
		console.log('in');
		var uluru = {lat: 51.503454, lng: -0.119562};

		var map = new google.maps.Map(document.getElementById('map'), {
	          zoom: 14,
	          center: uluru
	        });

		var markers = [
	        ['London Eye, London', 51.503454,-0.119562],
	        ['Palace of Westminster, London', 51.499633,-0.124755]
		];
        
		var infoWindowContent = [
	        ['<div class="info_content">' +
	        '<h3>London Eye</h3>' +
	        '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
	        ['<div class="info_content">' +
	        '<h3>Palace of Westminster</h3>' +
	        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
	        '</div>']
		];

		var infoWindow = new google.maps.InfoWindow(), marker, i;

        for( i = 0; i < markers.length; i++ ) {
			var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
			marker = new google.maps.Marker({
				position: position,
				map: map,
				title: markers[i][0]
			});	
        
			// Allow each marker to have an info window    
			google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
			})(marker, i));

        }
	}

})(window)


function initMap1() {
		'use strict';
        //var uluru = {lat: -25.363, lng: 131.044};
		var uluru = {lat: 51.503454, lng: -0.119562};
        var map = new google.maps.Map(document.getElementById('chart-6'), {
          zoom: 14,
          center: uluru
        });
		
		var markers = [
        ['London Eye, London', 51.503454,-0.119562],
        ['Palace of Westminster, London', 51.499633,-0.124755]
		];
        
		var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>London Eye</h3>' +
        '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
        ['<div class="info_content">' +
        '<h3>Palace of Westminster</h3>' +
        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
        '</div>']
		];
		
		var infoWindow = new google.maps.InfoWindow(), marker, i;
		
		
		for( i = 0; i < markers.length; i++ ) {
			var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
			marker = new google.maps.Marker({
				position: position,
				map: map,
				title: markers[i][0]
			});	
        
			// Allow each marker to have an info window    
			google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
			})(marker, i));

        }
}
	  