
// Changes the text when the add to cart button is clicked
function changeText() {
    const descriptions = document.querySelectorAll(".product-description");
    descriptions.forEach(description => {
        description.textContent = "Congratulations on your purchase!";
    });
}


// Change the text color to black when the change colour button is clicked
function updateStockInfo(productDescription1, stockInfo1, stockQuantity=20) {
    
    const descriptionElement = document.getElementById(productDescription1);
    if (descriptionElement) {
        descriptionElement.style.color = "black";
    }
}
   


// Displays the stock information on change colour button
["stockInfo1", "stockInfo2"].forEach(id => {
    const buttonElement = document.getElementById(id);

    if (buttonElement) {
        buttonElement.addEventListener("click", function () {
            buttonElement.textContent = `In Stock: ${20} units`;


        // Change the background color of the product card when change colour button is clicked 
            const productCard = buttonElement.closest("div");
            if (productCard) {
                productCard.style.backgroundColor = "peachpuff";
            }
        });
    }
});










