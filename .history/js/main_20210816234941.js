// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 10.77653, lng: 106.700981 }
        // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
            zoom: 14,
            center: loc,
        })
        // The marker, positioned at location
    const market = new google.maps.Marker({ position: loc, map: map })
}