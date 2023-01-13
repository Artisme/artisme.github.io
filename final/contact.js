function initMap() {
  let loc = new google.maps.LatLng(24.970463173547447, 121.26351729980325);
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: loc,
  });
  const marker = new google.maps.Marker({
    position: loc,
    map: map,
  });
}

window.initMap = initMap;