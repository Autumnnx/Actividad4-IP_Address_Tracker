import { getIpData } from './api.js';
import { initializeMap, updateMap } from './map.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const message = document.querySelector('#search-message');

const ipValue = document.querySelector('#ip-value');
const locationValue = document.querySelector('#location-value');
const timezoneValue = document.querySelector('#timezone-value');
const ispValue = document.querySelector('#isp-value');

/** Muestra la información devuelta en la tarjeta de resutlados. */
function renderIpData(data) {
    const location = data.location || {};

    ipValue.textContent = data.ip || '—';
    locationValue.textContent = [
    location.city,
    location.region,
    location.country
    ].filter(Boolean).join(', ') || '—';

    timezoneValue.textContent = location.timezone
    ? `UTC ${location.timezone}`
    : '—';

    ispValue.textContent = data.isp || '—';

    if (location.lat != null && location.lng != null) {
    updateMap(location.lat, location.lng);
    }
}

/** Muestra mensajes de estado/error cortos debajo del campo de búsqueda. */
function setMessage(text = '') {
    message.textContent = text;
}

/** Solicita datos y actualiza la interfaz. */
async function searchIp(query = '') {
    setMessage('Loading...');

    try {
    const data = await getIpData(query);
    renderIpData(data);
    setMessage('');
    } catch (error) {
    setMessage(error.message);
    }
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = input.value.trim();

    if (!query) {
    setMessage('Porfavor ingrese una dirección IP o dominio.');
    input.focus();
    return;
    }

    await searchIp(query);
});

initializeMap();
searchIp();
