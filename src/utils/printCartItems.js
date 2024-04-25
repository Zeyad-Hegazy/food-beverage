const printCartItems = (cartItems, totalPrice) => {
	const printableContent = `
    <html>
      <head>
        <title>Cart Items</title>
        <style>
          body { font-family: Arial, sans-serif; }
          ul { list-style-type: none; padding: 0; }
          li { margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <h1>Cart Items</h1>
        <ul>
          ${cartItems.map(
						(item) => `<li>${item.name} - Quantity: ${item.amount}</li>`
					)}
        </ul>
        <p>Total Price: $ ${totalPrice}</p>
      </body>
    </html>
  `;

	const popupWin = window.open("", "_blank", "width=600,height=600");
	popupWin.document.open();
	popupWin.document.write(printableContent);
	popupWin.document.close();

	popupWin.onload = () => {
		popupWin.focus();
		popupWin.print();
		popupWin.close();
	};
};

export default printCartItems;
