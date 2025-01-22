document.getElementById('ticket-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const quantity = document.getElementById('ticket-quantity').value;
    const coupon = document.getElementById('coupon').value.trim().toLowerCase();

    let ticketPrice = 20; // Price per ticket
    let totalAmount = ticketPrice * quantity;

    // Apply discount if coupon is valid
    if (coupon === "johnnyfree") {
        totalAmount = 0; // Free ticket if coupon is valid
    }

    // Populate the ticket visual
    document.getElementById('ticket-name').textContent = name;
    document.getElementById('ticket-email').textContent = email;
    document.getElementById('ticket-quantity').textContent = quantity;
    document.getElementById('ticket-price').textContent = totalAmount === 0 ? "Free" : `$${totalAmount}`;

    // Show the ticket
    document.getElementById('ticket-visual').style.display = 'block';
});
