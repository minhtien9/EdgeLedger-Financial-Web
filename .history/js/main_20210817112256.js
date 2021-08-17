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

// Smooth Scrolling
// $('#navbar a, .btn').on('click', function(event) {
//     if (this.hash !== '') {
//         event.preventDefault()

//         const hash = this.hash

//         $('html,body').animate({
//                 scrollTop: $(hash).offset().top - 100,
//             },
//             800
//         )
//     }
// })
document.querySelectorAll('#navbar a, .btn').forEach((anchor) => {
            anchor.addEventListener('click', function(e) {
                    e.preventDefault()

                    document
                        .querySelector(this.getAttribute('#navbar a, .btn'))
                        .scrollIntoView({})
                }
            })