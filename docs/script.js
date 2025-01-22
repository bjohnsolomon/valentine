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

    // Generate ticket details
    const ticketDetails = `
        Name: ${name}<br>
        Email: ${email}<br>
        Ticket Quantity: ${quantity}<br>
        Total Price: $${totalAmount === 0 ? "Free" : totalAmount}
    `;

    // Display the ticket
    document.getElementById('ticket-details').innerHTML = ticketDetails;
    document.getElementById('ticket-display').style.display = 'block';
});
