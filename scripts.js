document.addEventListener('DOMContentLoaded', function() {
    const changePasswordBtn = document.querySelector('.change-password-btn');
    changePasswordBtn.addEventListener('click', function() {
        alert('Change password functionality to be implemented.');
    });

    // Chart.js code for Test 1
    const ctx1 = document.getElementById('marksChart1').getContext('2d');
    const marksChart1 = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                label: 'Test 1 Marks',
                data: [60, 100 - 60],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(201, 203, 207, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Test 1 Analysis'
                }
            }
        }
    });

    // Chart.js code for Test 2
    const ctx2 = document.getElementById('marksChart2').getContext('2d');
    const marksChart2 = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                label: 'Test 2 Marks',
                data: [80, 100 - 80],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(201, 203, 207, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Test 2 Analysis'
                }
            }
        }
    });

    // Chart.js code for Test 3
    const ctx3 = document.getElementById('marksChart3').getContext('2d');
    const marksChart3 = new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                label: 'Test 3 Marks',
                data: [90, 100 - 90],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(201, 203, 207, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Test 3 Analysis'
                }
            }
        }
    });
});

function viewMaterials() {
    window.location.href = 'study-materials.html'; // Replace with the actual URL of the study materials page
}
