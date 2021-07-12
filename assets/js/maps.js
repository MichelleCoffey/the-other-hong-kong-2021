function initMap() {
    const myMap = {
        center: new google.maps.LatLng(22.2588, 114.1911),
        zoom: 11.5,
    };
    const map = new google.maps.Map(document.getElementById("map"), myMap);





var markerlocations = [
    [22.2759, 114.1455, "Victoria Peak Hike", 'images/hiking.png'],
    [22.2369, 114.2432, "Dragon's Peak Hike", 'images/hiking.png'],
    [22.2500, 114.1984, "Violet Hill Hike", 'images/hiking.png'],
    [22.2772, 114.1643, "Kita Yoga Studio",'images/yoga.png'],
    [22.2855, 114.1521, "Iyengar Yoga",'images/yoga.png'],
    [22.2840, 114.1521, "Yoga BamBam",'images/yoga.png'],
    [22.2782, 114.1821, "The Mandarin Oriental Spa",'images/sauna.png'],
    [22.2863, 114.1572, "Four Seasons Spa",'images/sauna.png'],
    [22.2819, 114.1594, "The Mandarin Oriental Spa",'images/sauna.png'],
   ];

   for(i  = 0;  i < markerlocations.length; i++) {
    var marker = new google.maps.Marker({
            position: new google.maps.LatLng(markerlocations[i][0], markerlocations[i][1]),
            map: map,
            icon:  markerlocations[i][3]
    });

    var address = '<div><p><b>markerlocations[i][2]</b></p></div>';
    var infowindow = new google.maps.InfoWindow({
      content: address
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

}
}
