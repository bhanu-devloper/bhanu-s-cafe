/* =========================================
   MOBILE NAVBAR
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* CLOSE MOBILE MENU AFTER CLICK */

const links =
    document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================================
   ORDER SYSTEM
========================================= */

let selectedCoffee = "";

let selectedPrice = 0;


/* OPEN ORDER */

function openOrder(coffee, price) {

    selectedCoffee = coffee;

    selectedPrice = price;


    document.getElementById("selectedItem").textContent =
        coffee + " — ₹" + price;


    updateTotal();


    document.getElementById("orderModal")
        .classList.add("active");


    document.body.style.overflow = "hidden";

}


/* CLOSE ORDER */

function closeOrder() {

    document.getElementById("orderModal")
        .classList.remove("active");


    document.body.style.overflow = "";

}


/* UPDATE TOTAL */

function updateTotal() {

    const quantity =
        Number(
            document.getElementById("quantity").value
        );


    const total =
        selectedPrice * quantity;


    document.getElementById("orderTotal")
        .textContent = "₹" + total;

}


/* QUANTITY CHANGE */

document.getElementById("quantity")
    .addEventListener("input", updateTotal);


/* =========================================
   SEND ORDER TO WHATSAPP
========================================= */

document.getElementById("orderForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("customerName")
                .value.trim();


        const phone =
            document.getElementById("customerPhone")
                .value.trim();


        const quantity =
            Number(
                document.getElementById("quantity")
                    .value
            );


        const orderType =
            document.getElementById("orderType")
                .value;


        const specialRequest =
            document.getElementById("specialRequest")
                .value.trim();


        const total =
            selectedPrice * quantity;


        /*
        =====================================
        PUT YOUR WHATSAPP NUMBER HERE
        =====================================

        India example:

        91 7838035263

        Don't use:
        +
        spaces
        -
        */

        const cafeWhatsApp =
            "91 78380 35263";


        const message =

`☕ BHANU"S CAFE ORDER

👤 Customer: ${name}

📞 Phone: ${phone}

☕ Item: ${selectedCoffee}

🔢 Quantity: ${quantity}

💰 Price: ₹${selectedPrice}

💵 Total: ₹${total}

🍽️ Order Type: ${orderType}

📝 Special Request:
${specialRequest || "None"}

Thank you!`;


        const whatsappURL =
            "https://wa.me/" +
            cafeWhatsApp +
            "?text=" +
            encodeURIComponent(message);


        window.open(
            whatsappURL,
            "_blank"
        );


        closeOrder();

    });


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

document.getElementById("orderModal")
    .addEventListener("click", function (event) {

        if (event.target === this) {

            closeOrder();

        }

    });


/* =========================================
   ESCAPE KEY CLOSE
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeOrder();

    }

});
