// ======================================
// PRODUCT SEARCH
// ======================================

function searchProduct() {

    const searchInput =
    document.getElementById("searchInput");

    if(!searchInput) return;

    const input =
    searchInput.value.toLowerCase().trim();

    const cards =
    document.querySelectorAll(".card");

    let visible = 0;

    cards.forEach(card => {

        const title =
        card.querySelector("h3");

        if(!title) return;

        const productName =
        title.textContent.toLowerCase();

        if(productName.includes(input)){

            card.style.display = "block";

            visible++;

        }else{

            card.style.display = "none";

        }

    });

    const resultCount =
    document.getElementById("resultCount");

    if(resultCount){

        resultCount.textContent =
        `Showing ${visible} Items`;

    }

}


// ======================================
// HOTEL SEARCH
// ======================================

function searchHotels() {

    const input =
    document.getElementById("hotelSearchInput")
    .value.toLowerCase().trim();

    const cards =
    document.querySelectorAll("#hotels-container .card");

    cards.forEach(card => {

        const text =
        card.textContent.toLowerCase();

        if(text.includes(input)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// ======================================
// FLIGHT SEARCH
// ======================================

function searchFlights() {

    const input =
    document.getElementById("flightSearchInput")
    .value.toLowerCase().trim();

    const cards =
    document.querySelectorAll(".flight-card");

    cards.forEach(card => {

        const text =
        card.textContent.toLowerCase();

        if(text.includes(input)) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

}


// ======================================
// ENTER KEY SEARCH
// ======================================

const searchInput =
document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("keyup",(e)=>{

        if(e.key === "Enter"){

            searchProduct();

        }

    });

}