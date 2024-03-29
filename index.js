const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", calculateProfitOrLoss);

function calculateProfitOrLoss() {
	const purchasePrice = document.getElementById("purchasePrice").value;
	const sellingPrice = document.getElementById("sellingPrice").value;

	const difference = sellingPrice - purchasePrice;

	if (difference > 0) {
		document.getElementById("result").innerText = `Profit: ₹${difference} (100Rs Profit)`;
	} else {
		// Use Math.abs() to ensure the amount of loss is not shown with a negative sign
		const absDifference = Math.abs(difference);
		document.getElementById("result").innerText = `Loss: ₹${absDifference} (100Rs loss)`;
	}
}