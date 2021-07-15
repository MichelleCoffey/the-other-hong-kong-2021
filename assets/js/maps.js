var map;
var activeInfoWindow;
var markers = [];

function initMap(){

  // Map Option
  
  var options = {
    center: {lat: 22.2588 , lng: 114.1911},
    zoom: 11,
  };

  // New Map 
 map =new google.maps.Map(document.getElementById("map"), options);

//Add Markers to Array
markerArray = [
  {location:{lat: 22.2759, lng: 114.1455},
  content: `<h4>Victoria Peak</h4>
  <p>A must-see spot in Hong Kong, The Peak is very popular thanks to its epic views of Victoria Harbour
   and the city itself. The easiest way to explore The Peak – other than visiting the lookout – is to take 
   an easy-going hour-long walk around the Peak. The walk is flat and accessible by baby strollers too. 
   You may also want to visit in the evening to view Hong Kong’s iconic skyline at night.   </p>`},
   {location:{lat: 22.2369, lng: 114.2432},
   content: `<h4>Dragons Back</h4>
   <p>As one of the best urban hiking trails, Dragon’s Back is popular for good reason. 
   It’s easily accessible and offers an impressive view of the Southern Island and coastline. 
   The hike also ends at Big Wave Bay, so you can take a dip in the sea or have a relaxing meal.`},
   {location:{lat: 22.2500, lng: 114.1984},
  content: `<h4>Violet Hill </h4>
  <p> Loved by exercise enthusiasts, the Violet Hill and Twin Peak hike is located in the southern part of Hong Kong Island. 
  Start slowly on Violet Hill and then get ready for the two famous mountain peaks, which have over a thousand steps, to enjoy 
  sweeping views of Stanley.</p>`},
  {location:{lat: 22.2533, lng: 113.9530},
  content: `<h4>Sunset Peak</h4>
  <p> Climb up to Hong Kong’s third-highest peak for the best natural evening view our city has to offer – one to add to your Hong Kong bucket list. </p>`
  },
  {location:{lat: 22.3000, lng: 114.2333},
  content: `<h4>Devil Peak</h4>
  <p>Devil’s Peak is situated next to the famous seafood market and fishing village Lei Yue Mun and gets its somewhat sinister name from the local pirate 
  occupants during the Ming Dynasty and the British Army in the 20th century that used it as an important nautical passage to Victoria Harbour. </p>`
  },
  {location:{lat: 22.2877, lng: 114.1365},
  content: `<h4>Sai Wan Beach</h4>
  <p> This is a great hike that takes you to the beach paradise of Sai Kung. Enjoy the white sand beach and have lunch at one of the beachside restaurants. You can either hike back the same way, or take a speedboat back to Sai Kung town from Sai Wan or Ham Tin Wan.  </p>`
  },
  {location:{lat: 22.2958, lng: 114.2858},
  content: `<h4>High Junk Peak</h4>
<p>One of the three sharpest peaks in Sai Kung, High Junk Peak is the most accessible one and offers a striking view of Clear Water Bay, Tung Long Island and Hong Kong 
  Island. </p>`
  },
  {location:{lat: 22.3523, lng: 114.1870},
  content: `<h4>Lion Rock</h4>
  <p>Named after its resemblance to a Lion’s head, Lion Rock is considered to be one of Hong Kong’s most iconic hikes. Many Cantopop songs and TV shows have referenced Lion Rock as it is said to embody the spirit of Hong Kong people. At its peak of 495m, hikers will have an unobstructed, 360-degree view of Kowloon and Hong Kong Island (south-facing) and New Territories 
  (north-facing). </p>`},

];

// loop through markers 
for (let i = 0; i < markerArray.length; i++){
  addMarker(markerArray[i]);
}

// add info to makers

function addMarker(property){

  const marker = new google.maps.Marker({
    position:property.location,
    map:map,
    icon: "images/hiking.png"
   });

   const detailWindow = new google.maps.InfoWindow({
     content: property.content
  });

  // open and close infowindow

  marker.addListener("click", () =>{
    if(activeInfoWindow){activeInfoWindow.close();}
    detailWindow.open(map, marker);
    activeInfoWindow = detailWindow;
  })
markers.push(marker);
}
}

//on click function
function myClick(id) {
  google.maps.event.trigger(markers[id], 'click');

}

