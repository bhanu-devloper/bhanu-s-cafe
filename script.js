let selectedCoffee = "";
let selectedPrice = 0;


/* OPEN ORDER WINDOW */

function orderCoffee(coffeeName, price) {

    selectedCoffee = coffeeName;

    selectedPrice = price;

    document.getElementById("selectedCoffee").textContent =
        coffeeName + " — ₹" + price;

    document.getElementById("orderModal").style.display =
        "flex";
}


/* CLOSE ORDER WINDOW */

function closeOrder() {

    document.getElementById("orderModal").style.display =
        "none";
}


/* SUBMIT ORDER */

document.getElementById("orderForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("customerName").value;

        const phone =
            document.getElementById("customerPhone").value;

        const quantity =
            document.getElementById("quantity").value;

        const orderType =
            document.getElementById("orderType").value;

        const message =
            document.getElementById("message").value;


        const total =
            selectedPrice * quantity;


        /*
        CHANGE THIS NUMBER
        TO YOUR WHATSAPP NUMBER
        */

        const cafeWhatsApp =
            "91 78380 35263";


        const whatsappMessage =
            `☕ *ZUMBA CAFE ORDER*

👤 Customer: ${name}

📞 Phone: ${phone}

☕ Coffee: ${selectedCoffee}

🔢 Quantity: ${quantity}

💰 Price: ₹${selectedPrice}

💵 Total: ₹${total}

🍽️ Order Type: ${orderType}

📝 Special Request:
${message || "None"}`;


        const whatsappURL =
            "https://wa.me/" +
            cafeWhatsApp +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        window.open(
            whatsappURL,
            "_blank"
        );

    }
);