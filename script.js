const data = [
    { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', trip: 'France', start: '01/01/2024', end: '01/10/2024' },
    { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com', trip: 'Italy', start: '02/01/2024', end: '02/10/2024' },
    { name: 'Sam Brown', phone: '555-123-4567', email: 'sam@example.com', trip: 'Japan', start: '03/01/2024', end: '03/10/2024' },
    { name: 'Lisa White', phone: '555-987-6543', email: 'lisa@example.com', trip: 'Australia', start: '04/01/2024', end: '04/10/2024' },
    { name: 'Paul Green', phone: '555-654-3210', email: 'paul@example.com', trip: 'Brazil', start: '05/01/2024', end: '05/10/2024' },
    { name: 'Emily Davis', phone: '555-321-0987', email: 'emily@example.com', trip: 'Canada', start: '06/01/2024', end: '06/10/2024' },
    { name: 'Michael Wilson', phone: '555-678-1234', email: 'michael@example.com', trip: 'Germany', start: '07/01/2024', end: '07/10/2024' },
    { name: 'Sophia Martinez', phone: '555-876-5432', email: 'sophia@example.com', trip: 'Spain', start: '08/01/2024', end: '08/10/2024' },
    { name: 'David Anderson', phone: '555-234-5678', email: 'david@example.com', trip: 'India', start: '09/01/2024', end: '09/10/2024' },
    { name: 'Olivia Thomas', phone: '555-345-6789', email: 'olivia@example.com', trip: 'Mexico', start: '10/01/2024', end: '10/10/2024' },
    { name: 'James Jackson', phone: '555-456-7890', email: 'james@example.com', trip: 'Egypt', start: '11/01/2024', end: '11/10/2024' },
    { name: 'Amelia Hernandez', phone: '555-567-8901', email: 'amelia@example.com', trip: 'China', start: '12/01/2024', end: '12/10/2024' },
    { name: 'Ethan Moore', phone: '555-678-9012', email: 'ethan@example.com', trip: 'South Africa', start: '01/11/2024', end: '01/20/2024' },
    { name: 'Mia Taylor', phone: '555-789-0123', email: 'mia@example.com', trip: 'Russia', start: '02/11/2024', end: '02/20/2024' },
    { name: 'Alexander Lee', phone: '555-890-1234', email: 'alexander@example.com', trip: 'South Korea', start: '03/11/2024', end: '03/20/2024' },
    { name: 'Isabella Harris', phone: '555-901-2345', email: 'isabella@example.com', trip: 'Argentina', start: '04/11/2024', end: '04/20/2024' },
    { name: 'Benjamin Clark', phone: '555-012-3456', email: 'benjamin@example.com', trip: 'Australia', start: '05/11/2024', end: '05/20/2024' },
    { name: 'Charlotte Robinson', phone: '555-123-4567', email: 'charlotte@example.com', trip: 'Greece', start: '06/11/2024', end: '06/20/2024' },
    { name: 'William Lewis', phone: '555-234-5678', email: 'william@example.com', trip: 'Thailand', start: '07/11/2024', end: '07/20/2024' },
    { name: 'Emma Walker', phone: '555-345-6789', email: 'emma@example.com', trip: 'Portugal', start: '08/11/2024', end: '08/20/2024' },
    { name: 'Liam Hall', phone: '555-456-7890', email: 'liam@example.com', trip: 'Turkey', start: '09/11/2024', end: '09/20/2024' },
    { name: 'Ava Young', phone: '555-567-8901', email: 'ava@example.com', trip: 'Norway', start: '10/11/2024', end: '10/20/2024' },
    { name: 'Noah King', phone: '555-678-9012', email: 'noah@example.com', trip: 'New Zealand', start: '11/11/2024', end: '11/20/2024' },
    { name: 'Sophia Wright', phone: '555-789-0123', email: 'sophia@example.com', trip: 'Netherlands', start: '12/11/2024', end: '12/20/2024' },
    { name: 'Mason Scott', phone: '555-890-1234', email: 'mason@example.com', trip: 'Switzerland', start: '01/21/2024', end: '01/30/2024' },
    { name: 'Isabella Green', phone: '555-901-2345', email: 'isabella@example.com', trip: 'Ireland', start: '02/21/2024', end: '02/28/2024' },
];

function validateForm() {
    const searchTerm = document.getElementById('search').value.trim();
    const notFoundDiv = document.getElementById('notFound');

    if (searchTerm.length < 3) {
        alert("Please enter at least 3 characters.");
        return false;
    }

    filterResults();
    return false;
}

function filterResults() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const mainFilter = document.querySelector('input[name="main_filter"]:checked');
    const notFoundDiv = document.getElementById('notFound');

    const filteredData = data.filter(item => {
        if (!mainFilter) {
            return item.name.toLowerCase().includes(searchTerm) ||
                   item.phone.toLowerCase().includes(searchTerm) ||
                   item.email.toLowerCase().includes(searchTerm) ||
                   item.trip.toLowerCase().includes(searchTerm) ||
                   item.start.toLowerCase().includes(searchTerm) ||
                   item.end.toLowerCase().includes(searchTerm);
        } else if (mainFilter.value === 'customer') {
            return item.name.toLowerCase().includes(searchTerm) ||
                   item.phone.toLowerCase().includes(searchTerm) ||
                   item.email.toLowerCase().includes(searchTerm);
        } else if (mainFilter.value === 'trip') {
            return item.trip.toLowerCase().includes(searchTerm) ||
                   item.start.toLowerCase().includes(searchTerm) ||
                   item.end.toLowerCase().includes(searchTerm);
        }
    });

    if (filteredData.length === 0) {
        notFoundDiv.style.display = 'block';
    } else {
        notFoundDiv.style.display = 'none';
    }

    displayResults(filteredData);
}

function displayResults(results) {
    const resultsTableBody = document.getElementById('dataBody');
    resultsTableBody.innerHTML = '';

    const mainFilter = document.querySelector('input[name="main_filter"]:checked');
    const tableHeader = document.getElementById('tableHeader');
    tableHeader.innerHTML = '';

    let headers = [];
    if (!mainFilter) {
        headers = ['Name', 'Phone No', 'Email', 'Trip Name', 'Start Date', 'End Date'];
    } else if (mainFilter.value === 'customer') {
        headers = ['Name', 'Phone No', 'Email'];
    } else if (mainFilter.value === 'trip') {
        headers = ['Name', 'Trip Name', 'Start Date', 'End Date'];
    }

    const headerRow = tableHeader.insertRow();
    headers.forEach(headerText => {
        const headerCell = document.createElement('th');
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    });

    results.forEach(result => {
        const row = resultsTableBody.insertRow();
        if (!mainFilter) {
            row.insertCell(0).textContent = result.name;
            row.insertCell(1).textContent = result.phone;
            row.insertCell(2).textContent = result.email;
            row.insertCell(3).textContent = result.trip;
            row.insertCell(4).textContent = result.start;
            row.insertCell(5).textContent = result.end;
        } else if (mainFilter.value === 'customer') {
            row.insertCell(0).textContent = result.name;
            row.insertCell(1).textContent = result.phone;
            row.insertCell(2).textContent = result.email;
        } else if (mainFilter.value === 'trip') {
            row.insertCell(0).textContent = result.name;
            row.insertCell(1).textContent = result.trip;
            row.insertCell(2).textContent = result.start;
            row.insertCell(3).textContent = result.end;
        }
    });
}

// Initial display of all data with full headers
const resultsTableBody = document.getElementById('dataBody');
data.forEach(result => {
    const row = resultsTableBody.insertRow();
    row.insertCell(0).textContent = result.name;
    row.insertCell(1).textContent = result.phone;
    row.insertCell(2).textContent = result.email;
    row.insertCell(3).textContent = result.trip;
    row.insertCell(4).textContent = result.start;
    row.insertCell(5).textContent = result.end;
});
