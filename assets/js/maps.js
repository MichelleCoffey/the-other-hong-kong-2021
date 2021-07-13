function initMap(){

  // Map Option
  
  var options = {
    center: {lat: 22.2588 , lng: 114.1911},
    zoom: 11.5,
  }

  // New Map 
  
  
 map =new google.maps.Map(document.getElementById("map"), options)

/*
const marker = new google.maps.Marker({
  position:{lat: 22.2588, lng: 114.1911},
  map:map,
  icon: "images/hiking.png"
});

const detailWindow = new google.maps.InfoWindow({
  content: `<h2>Hong Kong Island</h2>`
});


marker.addListener("click", () =>{
  detailWindow.open(map, marker);
})
*/

// Add Marker





function addMarker(property){
  const marker = new google.maps.Marker({
    position:property.location,
    map:map,
    
  });


if(property.imageIcon){
  marker.setIcon(property.imageIcon)
}

if(property.content){
  const detailWindow = new google.maps.InfoWindow({
  content: property.content
});

marker.addListener("click", () =>{
  detailWindow.open(map.marker);
})

}

}



addMarker({location:{lat: 22.2588, lng: 114.1911},
  icon: "images/hiking.png",
  content: `<h4>Victoria Peak</h4>
  <p>A must-see spot in Hong Kong, The Peak is very popular thanks to its epic views of Victoria Harbour
   and the city itself. The easiest way to explore The Peak – other than visiting the lookout – is to take 
   an easy-going hour-long walk around the Peak. It offers a 360-degree view of the city.  </p>` });
addMarker({location:{lat: 22.2369, lng: 114.2432}});
addMarker({location:{lat: 22.2500, lng: 114.1984}});
addMarker({location:{lat: 22.2533, lng: 113.9530}});


}
