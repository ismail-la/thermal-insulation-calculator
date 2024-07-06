function calculatePrice() {
    const areaSize = document.getElementById('area-size').value;
    const materialType = document.getElementById('material-type').value;
    const additionalFeatures = document.getElementById('additional-features').value;

    // Define material costs per square meter
    const materialCosts = {
        'material1': 10,  // Example cost
        'material2': 15   // Example cost
        // Add more materials and their costs as needed
    };

    // Calculate base cost
    let baseCost = areaSize * materialCosts[materialType];

    // Add additional features cost if any (example logic, adjust as needed)
    if (additionalFeatures) {
        baseCost += 50; // Example additional cost
    }

    // Display the result
    document.getElementById('result').innerText = 'Estimated Price: $' + baseCost.toFixed(2);
}
