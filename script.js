// Cart State
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');
const notification = document.getElementById('notification');
const notificationMsg = document.getElementById('notification-msg');

// Add to Cart Function
function addToCart(itemName) {
    cartCount++;
    cartCountElement.textContent = cartCount;
    
    // Animate cart icon
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);

    showNotification(`Added ${itemName} to timeline.`);
}

// Show Notification Toast
function showNotification(message) {
    notificationMsg.textContent = message;
    notification.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Cart (Placeholder for future implementation)
function toggleCart() {
    if (cartCount > 0) {
        showNotification(`You have ${cartCount} items ready for transport.`);
    } else {
        showNotification("Your temporal vessel is empty.");
    }
}
