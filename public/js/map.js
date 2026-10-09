let map;
let marker;

/**
 * Crea el mapa de Leaflet una sola vez cuando se carga la página.
 */
export function initializeMap() {
    map = L.map('map', {
    zoomControl: false,
    attributionControl: true
    }).setView([43.731, 7.416], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

  // El activo suministrado por Frontend Mentor se utiliza en lugar del pin predeterminado de Leaflet.
    const icon = L.divIcon({
    className: 'custom-marker',
    html: '<img src="/images/icon-location.svg" alt="">',
    iconSize: [46, 56],
    iconAnchor: [23, 56]
    });

    marker = L.marker([43.731, 7.416], { icon }).addTo(map);
}

/**
 * Actualiza el mapa y el marcador utilizando las coordenadas devueltas por IPify.
 */
export function updateMap(latitude, longitude) {
    if (!map) initializeMap();

    const position = [Number(latitude), Number(longitude)];
    map.setView(position, 15, { animate: true });

    marker.setLatLng(position);
}
