function initMap() {
    const myMap = {
        center: new google.maps.LatLng(22.2588, 114.1911),
        zoom: 11.5,
    };
    const map = new google.maps.Map(document.getElementById("map"), myMap);

}  
