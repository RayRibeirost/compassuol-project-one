'use strict';

const offerContainer = document.getElementById("offers-container");
const modalContainer = document.getElementById("modal-container");
const modalCloseButton = document.getElementById("close-button");
const overlayObject = document.getElementById("overlay");

/* Card generator */

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
    `;
    offerContainer.appendChild(card);
    card.addEventListener("click", () => openModal(offer));
    }
));


/* Modal features */

function openModal(offer) {
    const modalCard = document.createElement("section");
    modalCard.classList.add("modal");
    modalCard.innerHTML = `
            <figure class="modal-close-button flex-container row">
                <img src="src/images/close-icon.svg" alt="fechar modal" title="fechar" id="close-button" onclick="closeModal()">
            </figure>
            <div class="modal-box-info">
                <figure class="modal-image" style="background-image:url(${offer.image})"></figure>
                <p class="modal-price">${offer.price}</p>
                <div class="modal-info flex-container row">
                    <p class="modal-info-bedroom"><span class="modal-bedrooms">${offer.bedrooms}</span> quartos</p>
                    <p class="modal-info-bathroom"><span class="modal-bathrooms">${offer.bathrooms}</span> banheiros</p>
                    <p class="modal-info-size"><span class="modal-size">${offer.size}</span> m<sup>2</sup></p>
                    <button class="modal-info-buy">Comprar</button>
                </div>
            </div>
    `;
    modalContainer.appendChild(modalCard);
    modalContainer.style.display = "block";
    overlayObject.style.display = "block";
}
 
function closeModal() {
    modalContainer.style.display = "none";
    overlayObject.style.display = "none";
    document.querySelector('.modal').remove();
}

