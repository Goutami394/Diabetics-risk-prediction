document.getElementById('predictionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const features = [
        parseFloat(document.getElementById('pregnancies').value),
        parseFloat(document.getElementById('glucose').value),
        parseFloat(document.getElementById('bloodPressure').value),
        parseFloat(document.getElementById('skinThickness').value),
        parseFloat(document.getElementById('insulin').value),
        parseFloat(document.getElementById('bmi').value),
        parseFloat(document.getElementById('dpf').value),
        parseFloat(document.getElementById('age').value)
    ];

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ features }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = `Prediction: ${data.prediction}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
