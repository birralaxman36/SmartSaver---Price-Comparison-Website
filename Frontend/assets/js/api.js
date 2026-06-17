// ======================================
// BASE URL
// ======================================
const BASE_URL = "https://smartsaver-price-comparison-website-production.up.railway.app";
// const BASE_URL =
// "https://smartsaver-price-comparison-website-production.up.railway.app";

// ======================================
// PRODUCTS API
// ======================================
const productsContainer =
document.getElementById("products-container");

if(productsContainer){

    fetch(`${BASE_URL}/products`)
    .then(response => response.json())
    .then(products => {

        productsContainer.innerHTML = "";

        products.forEach(product => {

            productsContainer.innerHTML += `
            <div class="card show">

                <img src="${product.imageUrl}" alt="Product">

                <h3>${product.productName}</h3>

                <p>${product.description}</p>

                <p>₹${product.price}</p>

                <p>⭐ ${product.rating}</p>

                <a href="product-details.html?id=${product.id}">
                    <button>View Details</button>
            </a>

            </div>
            `;
        });

        setupLoadMore();
    })
    .catch(error => {
        console.error("Products Error:", error);
    });

}


// ======================================
// FASHION API
// ======================================

const fashionContainer =
document.getElementById("fashion-container");

if(fashionContainer){

    fetch(`${BASE_URL}/fashion`)
    .then(response => response.json())
    .then(products => {

        fashionContainer.innerHTML = "";

        products.forEach(product => {

            fashionContainer.innerHTML += `
            <div class="card show">

                <img src="${product.imageUrl}" alt="Fashion Product">

                <h3>${product.productName}</h3>

                <p>${product.description}</p>

                <p>₹${product.price}</p>

                <p>⭐ ${product.rating}</p>

                <a href="product-details.html?id=${product.id}">
                    <button>View Details</button>
            </a>
                

            </div>
            `;
        });

        setupLoadMore();
    })
    .catch(error => {
        console.error("Fashion Error:", error);
    });

}


// ======================================
// HOTELS API
// ======================================
fetch(`${BASE_URL}/hotels`)
.then(response => response.json())
.then(hotels => {

    let container =
    document.getElementById("hotels-container");

    if(!container) return;

    container.innerHTML = "";

    hotels.forEach(hotel => {

        container.innerHTML += `
        <div class="card show">

            <img src="${hotel.imageUrl}" alt="Hotel">

            <h3>${hotel.name}</h3>

            <p>${hotel.location}</p>

            <p>₹${hotel.price}</p>

            <p>⭐ ${hotel.rating}</p>

            <a href="hotel-details.html?id=${hotel.id}">
                <button>View Details</button>
            </a>

        </div>
        `;
    });

    setupLoadMore();

});


// ======================================
// LOAD MORE FUNCTION
// ======================================

// Load More Functionality for products and hotels
function setupLoadMore() {

    const cards =
    document.querySelectorAll(".card");

    let currentItems = 8;

    cards.forEach((card,index) => {

        if(index >= currentItems){
            card.style.display = "none";
        }

    });

    const loadMoreBtn =
    document.getElementById("loadMoreBtn");

    if(!loadMoreBtn) return;

    loadMoreBtn.addEventListener("click", () => {

        currentItems += 8;

        cards.forEach((card,index) => {

            if(index < currentItems){
                card.style.display = "block";
            }

        });

        if(currentItems >= cards.length){
            loadMoreBtn.style.display = "none";
        }

    });

}


// ======================================
// FLIGHTS API
// ======================================

fetch(`${BASE_URL}/flights`)
.then(response => response.json())
.then(flights => {

    let container =
    document.getElementById("flights-container");

    if(!container) return;

    container.innerHTML = "";

    flights.forEach((flight,index) => {

        container.innerHTML += `

        <div class="flight-card"
             style="${index >= 8 ? 'display:none;' : 'display:flex;'}">

            <div class="flight-airline">
                <h3>${flight.airline}</h3>
                <p>${flight.flightNumber}</p>
                <small>${flight.aircraft}</small>
            </div>

            <div class="flight-time">
                <h2>${flight.departureTime}</h2>
                <p>${flight.source}</p>
            </div>

            <div class="flight-duration">
                <p>${flight.duration}</p>
                <p>✈</p>
                <p>${flight.stops}</p>
            </div>

            <div class="flight-time">
                <h2>${flight.arrivalTime}</h2>
                <p>${flight.destination}</p>
            </div>

            <div class="flight-price">
                <h2>₹${flight.price}</h2>
                <p>${flight.travelDate}</p>
                <p style="color:green;">
                    ${flight.discount}% OFF
                </p>

                <a href="flight-details.html?id=${flight.id}">
                    <button>View Details</button>
                </a>
            </div>

        </div>
        `;
    });

    // LOAD MORE FOR FLIGHTS

    const flightCards =
    document.querySelectorAll(".flight-card");

    const loadMoreBtn =
    document.getElementById("loadMoreBtn");

    let visibleItems = 8;

    if(loadMoreBtn){

        loadMoreBtn.onclick = () => {

            visibleItems += 8;

            flightCards.forEach((card,index) => {

                if(index < visibleItems){

                    card.style.display = "flex";
                }

            });

            if(visibleItems >= flightCards.length){

                loadMoreBtn.style.display = "none";
            }
        };
    }

});

// ======================================
// HOTEL DETAILS
// ======================================

// loadHotelDetails()

const hotelId =
new URLSearchParams(window.location.search)
.get("id");

const hotelName =
document.getElementById("hotelName");

if(hotelId && hotelName){

    fetch(`${BASE_URL}/hotels/${hotelId}`)
    .then(response => response.json())
    .then(hotel => {

        if(!hotel) return;

        document.getElementById("hotelName")
        .innerText = hotel.name;

        document.getElementById("hotelImage")
        .src =
        hotel.imageUrl ||
        "../images/no-img.png";

        document.getElementById("hotelDescription")
        .innerText =
        "Luxury Hotel with premium rooms and excellent service.";

        document.getElementById("hotelLocation")
        .innerText =
        "📍 " + hotel.location;

        document.getElementById("hotelPrice")
        .innerText =
        "₹" + hotel.price;

        document.getElementById("hotelRating")
        .innerText =
        "⭐ " + hotel.rating;

        document.getElementById("bookingPrice")
        .innerText =
        "₹" + hotel.price;

        document.getElementById("agodaPrice")
        .innerText =
        "₹" + (hotel.price - 500);

        document.getElementById("mmtPrice")
        .innerText =
        "₹" + (hotel.price - 300);

        document.getElementById("bestPrice")
        .innerText =
        "🏆 Best Price: ₹" +
        (hotel.price - 500);

    })
    .catch(error => {

        console.error(
            "Hotel Error:",
            error
        );

    });

}


// loadSimilarHotels()

fetch(`${BASE_URL}/hotels`)
.then(response => response.json())
.then(hotels => {

    let container =
    document.getElementById("similarHotels");

    if(!container) return;

    container.innerHTML = "";

    hotels.slice(0,3).forEach(hotel => {

        container.innerHTML += `

        <div class="card">

            <img
            src="${hotel.imageUrl || '../images/no-img.png'}"
            alt="Hotel">

            <h3>${hotel.name}</h3>

            <p>${hotel.location}</p>

            <p>₹${hotel.price}</p>

            <p>⭐ ${hotel.rating}</p>

            <a href="hotel-details.html?id=${hotel.id}">

                <button>
                    View Details
                </button>

            </a>

        </div>

        `;

    });

})
.catch(error => {

    console.error(
        "Similar Hotels Error:",
        error
    );

});


// ======================================
// PRODUCT DETAILS
// ======================================

// loadProductDetails()
// ======================================
// PRODUCT DETAILS
// ======================================

const productId =
new URLSearchParams(window.location.search)
.get("id");

const productName =
document.getElementById("productName");

if(productId && productName){

    fetch(`${BASE_URL}/products/${productId}`)
    .then(response => response.json())
    .then(product => {

        if(!product) return;

        document.getElementById(
        "productName"
        ).innerText =
        product.productName;

        document.getElementById(
        "productImage"
        ).src =
        product.imageUrl ||
        "../assets/images/no-image.png";

        document.getElementById(
        "productDescription"
        ).innerText =
        product.description;

        document.getElementById(
        "productPrice"
        ).innerText =
        "₹" + product.price;

        document.getElementById(
        "productRating"
        ).innerText =
        "⭐ " + product.rating;

        document.getElementById(
        "amazonPrice"
        ).innerText =
        "₹" + product.price;

        document.getElementById(
        "flipkartPrice"
        ).innerText =
        "₹" + (product.price - 500);

        document.getElementById(
        "cromaPrice"
        ).innerText =
        "₹" + (product.price - 300);

        document.getElementById(
        "bestPrice"
        ).innerText =
        "🏆 Best Price: ₹" +
        (product.price - 500);

    })
    .catch(error => {

        console.error(
        "Product Details Error:",
        error
        );

    });

}
// loadSimilarProducts()

fetch(`${BASE_URL}/products`)
.then(response => response.json())
.then(products => {

    let container =
    document.getElementById("similarProducts");

    if(!container) return;

    container.innerHTML = "";

    products.slice(0,3).forEach(product => {

        container.innerHTML += `

        <div class="card">

            <img
            src="${product.imageUrl}"
            alt="Product">

            <h3>
                ${product.productName}
            </h3>

            <p>
                ₹${product.price}
            </p>

            <a href=
            "product-details.html?id=${product.id}">

            <button>
                View Details
            </button>

            </a>

        </div>

        `;

    });

});




// ======================================
// FLIGHT DETAILS
// ======================================

// loadFlightDetails()


const flightId =
new URLSearchParams(window.location.search)
.get("id");

const flightAirline =
document.getElementById("flightAirline");

if(flightId && flightAirline){

    fetch(`${BASE_URL}/flights/${flightId}`)
    .then(response => response.json())
    .then(flight => {

        if(!flight) return;

        document.getElementById("flightAirline")
        .innerText =
        flight.airline + " (" +
        flight.flightNumber + ")";

        document.getElementById("flightRoute")
        .innerText =
        flight.source +
        " ➜ " +
        flight.destination;

        document.getElementById("airlineName")
        .innerText =
        flight.airline;

        document.getElementById("flightNumber")
        .innerText =
        flight.flightNumber;

        document.getElementById("aircraft")
        .innerText =
        flight.aircraft;

        document.getElementById("departureTime")
        .innerText =
        flight.departureTime;

        document.getElementById("arrivalTime")
        .innerText =
        flight.arrivalTime;

        document.getElementById("duration")
        .innerText =
        flight.duration;

        document.getElementById("stops")
        .innerText =
        flight.stops;

        document.getElementById("travelDate")
        .innerText =
        flight.travelDate;

        document.getElementById("flightPrice")
        .innerText =
        "₹" + flight.price;

        document.getElementById("discount")
        .innerText =
        flight.discount + "% OFF";

        document.getElementById("mmtPrice")
        .innerText =
        "₹" + flight.price;

        document.getElementById("cleartripPrice")
        .innerText =
        "₹" + (flight.price - 200);

        document.getElementById("yatraPrice")
        .innerText =
        "₹" + (flight.price - 100);

        document.getElementById("bestPrice")
        .innerText =
        "🏆 Best Price: ₹" +
        (flight.price - 200);

    })
    .catch(error => {

        console.error(
            "Flight Details Error:",
            error
        );

    });

}



// loadSimilarFlights()

// ======================================
// SIMILAR FLIGHTS
// ======================================

fetch(`${BASE_URL}/flights`)
.then(response => response.json())
.then(flights => {

    let container =
    document.getElementById("similarFlights");

    if(!container) return;

    container.innerHTML = "";

    flights.slice(0,3).forEach(flight => {

        container.innerHTML += `

        <div class="card">

            <h3>
                ${flight.airline}
            </h3>

            <p>
                ${flight.source}
                ➜
                ${flight.destination}
            </p>

            <p>
                ₹${flight.price}
            </p>

            <a href="flight-details.html?id=${flight.id}">

                <button>
                    View Details
                </button>

            </a>

        </div>

        `;

    });

})
.catch(error => {

    console.error(
        "Similar Flights Error:",
        error
    );

});


// ======================================
// CONTACT FORM API
// ======================================

// Send contact form details to backend
// Store user inquiries and messages
async function submitContact(event){

    event.preventDefault();

    const contact = {

        name:
        document.getElementById("contactName").value,

        email:
        document.getElementById("contactEmail").value,

        message:
        document.getElementById("contactMessage").value
    };

    const response = await fetch(
        `${BASE_URL}/contact`,
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(contact)
        }
    );

    if(response.ok){

        alert("Message Sent Successfully");

    }else{

        alert("Failed To Send Message");

    }
}

// ======================================
// FEEDBACK FORM API
// ======================================

// Send feedback details to backend
// Store user feedback and suggestions
async function submitFeedback(event){

    event.preventDefault();

    const feedback = {

        name:
        document.getElementById("feedbackName").value,

        email:
        document.getElementById("feedbackEmail").value,

        message:
        document.getElementById("feedbackMessage").value
    };

    const response = await fetch(
        `${BASE_URL}/feedback`,
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(feedback)
        }
    );

    if(response.ok){

        alert("Feedback Submitted");

    }else{

        alert("Submission Failed");

    }
}


// ======================================
// USER REGISTRATION API
// ======================================

// Send registration details to backend
// Create a new user account

async function registerUser(event){

    event.preventDefault();

    if(!validateRegister()){
        return;
    }

    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    try{

        const response = await fetch(
            `${BASE_URL}/register`,
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            }
        );

        // PASTE HERE

        const result =
        await response.text();

        const registerMessage =
        document.getElementById("registerMessage");

        if(response.ok){

            registerMessage.style.color =
            "green";

            registerMessage.innerText =
            "✅ " + result;

            setTimeout(() => {

                window.location.href =
                "login.html";

            }, 1500);

        }else{

            registerMessage.style.color =
            "red";

            registerMessage.innerText =
            "❌ " + result;

        }

    }catch(error){

        console.error(error);

    }

}


// ======================================
// USER LOGIN API
// ======================================

// Verify user credentials
// Redirect to home page after successful login

async function loginUser(event) {

    event.preventDefault();

    const loginMessage =
    document.getElementById("loginMessage");

    const email =
    document.getElementById("email").value.trim();

    const password =
    document.getElementById("password").value.trim();

    if(email === ""){

        loginMessage.style.color = "red";
        loginMessage.innerText =
        "❌ Email is required";

        return;
    }

    if(password === ""){

        loginMessage.style.color = "red";
        loginMessage.innerText =
        "❌ Password is required";

        return;
    }

    const user = {
        email: email,
        password: password
    };

    try {

        const response = await fetch(
            `${BASE_URL}/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }
        );

        const result =
        await response.text();

        if (result === "Login Successful") {

            loginMessage.style.color =
            "limegreen";

            loginMessage.innerText =
            "✅ Login Successful";

            setTimeout(() => {

                window.location.href =
                "../index.html";

            }, 1000);

        } else {

            loginMessage.style.color =
            "red";

            loginMessage.innerText =
            "❌ Invalid Email or Password";

        }

    } catch (error) {

        console.error(error);

        loginMessage.style.color =
        "red";

        loginMessage.innerText =
        "❌ Server Error";

    }

}