document.addEventListener("DOMContentLoaded", function() {
    const removeButtons = document.querySelectorAll(".remove-button");
    const quantityElements = document.querySelectorAll(".quantity");
    const addButtons = document.querySelectorAll(".add-button");
    const likeButtons = document.querySelectorAll(".like-button");
    const priceElements = document.querySelectorAll(".price");
    const totalPriceElement = document.getElementById("total-price");
    const deleteButtons = document.querySelectorAll(".delete-button");



    function updateTotalPrice() {
        let totalPrice = -9850*2;
        
        for (let i = 0; i < quantityElements.length; i++) {
            const quantity = parseInt(quantityElements[i].textContent);
            const price = parseFloat(priceElements[i].textContent.slice(1)); 
            totalPrice += price * quantity;
        }
        
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

  
    removeButtons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            const quantity = parseInt(quantityElements[index].textContent);
            if (quantity > 1) {
                quantityElements[index].textContent = quantity - 1;
            } else {
                quantityElements[index].textContent = "1";
            }
            updateTotalPrice();
        });
    });

    addButtons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            const quantity = parseInt(quantityElements[index].textContent);
            quantityElements[index].textContent = quantity + 1;
            updateTotalPrice();
        });
    });

   
    for (var i = 0; i < likeButtons.length; i++) {
        likeButtons[i].addEventListener("click", function() {
            if (this.textContent == "🤍like") {
                this.textContent = "❤️";
            } else {
                this.textContent = "🤍like";
            }
        });
    }
    deleteButtons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            button.closest(".item").remove();
            updateTotalPrice();
        });
    });
    updateTotalPrice();
});





