const GET_ALL_USERS_URL = "http://localhost:8080/user"

async function getUserById() {
    clearTable("usersTable");

    // Searching for a user
    const userId = document.getElementById("userIdInput").value.trim();
    const GET_USER_BY_ID_URL = `http://localhost:8080/user/id/${userId}`;
    const resp = await fetch(GET_USER_BY_ID_URL);

    if (resp.status === 200) {
        const userData = await resp.json();
        const userRow = createRow(userData)
        addRow(userRow, "usersTable");
    }
}

async function getUserByDocument() {
    clearTable("usersTable")

    // Searching for a user
    const userDocument = document.getElementById("userDocumentInput").value.trim();
    const GET_USER_BY_DOCUMENT_URL = `http://localhost:8080/user/document/${userDocument}`;
    const resp = await fetch(GET_USER_BY_DOCUMENT_URL);

    if (resp.status === 200) {
        const userData = await resp.json();
        const userRow = createRow(userData);
        addRow(userRow, "usersTable");
    }
}

async function getAllUsers() {
    clearTable("usersTable");

    const resp = await fetch(GET_ALL_USERS_URL);
    if (resp.status === 200) {
        const usersData = await resp.json();
        usersData.forEach(user => {
            const userRow = createRow(user);
            addRow(userRow, "usersTable");
        });
    }
}


function createRow(user) {
    const row = document.createElement("tr");

    // Creating table headers
    const tdId = document.createElement("td");
    const tdFirstName = document.createElement("td");
    const tdLastName = document.createElement("td");
    const tdDocument = document.createElement("td");
    const tdEmail = document.createElement("td");
    const tdPassword = document.createElement("td");
    const tdBalance = document.createElement("td");
    const tdUserType = document.createElement("td");

    // Assigning each value to its respective table column
    tdId.innerHTML = user.id;
    tdFirstName.innerHTML = user.firstName;
    tdLastName.innerHTML = user.lastName;
    tdDocument.innerHTML = user.document;
    tdEmail.innerHTML = user.email;
    tdPassword.innerHTML = user.password;
    tdBalance.innerHTML = user.balance;
    tdUserType.innerHTML = user.userType;

    // Adding data to the row
    row.appendChild(tdId);
    row.appendChild(tdFirstName);
    row.appendChild(tdLastName);
    row.appendChild(tdDocument);
    row.appendChild(tdEmail);
    row.appendChild(tdPassword);
    row.appendChild(tdBalance);
    row.appendChild(tdUserType);

    return row;
}

function clearTable(tableId) {
    const table = document.getElementById(tableId);

    if (!table) {
        console.error(`Table with ID "${tableId}" not found.`);
        return;
    }

    // Delete all rows except the headers
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
}

function addRow(line, tableId) {
    const table = document.getElementById(tableId);

    if (!table) {
        console.error(`Table with ID "${tableId}" not found.`);
        return;
    }

    table.appendChild(line);
}

async function main() {
    // const users = await getAllUsers();
    /*
        users.forEach(user => {
            const line = createLine(user);
            table.appendChild(line);
        }); 
    */
}

main();