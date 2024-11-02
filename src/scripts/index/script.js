'use strict';

const offerContainer = document.getElementById("offers-container")
fetch('src/json/data.json').then(response => response.json())
.then(offers => offers.forEach(offer => {
    const card = document.createElement("div");
    card.classList.add('offers-card');
    card.innerHTML = `
        <figure id="card-img" style="background-image:url(${offer.image}); width:292px; height:197px;">
        </figure>
        <p class="offers-card-price"><span class="offer-price">${offer.price}</span></p>
        <p class="offers-card-size"><span class="offer-size">${offer.size}</span> m<sup>2</sup></p>
        <p class="offers-card-info"><span class="offers-card-info-bedroom"><span class="offer-bedroom">${offer.bedrooms}</span> quartos</span> <span class="offers-card-info-bathroom"><span class="offer-bathroom">${offer.bathrooms}</span> banheiros</span></p>
    `
    offerContainer.appendChild(card)
}));

