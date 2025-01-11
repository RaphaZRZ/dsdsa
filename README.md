﻿<h1>Simplified PicPay</h1>
> Status: DEVELOPMENT(front-end side) ⚠️


<h2>IMPORTANT</h2>
<p>
Go to application.properties and make sure that <code>spring.datasource.username=root</code> and
<code>spring.datasource.password=root</code> are the correct username and password for your database.<br>
This project uses swagger documentation, to access it, open your browser and go
to: <a href="http://localhost:8080/swagger-ui/index.html">http://localhost:8080/swagger-ui/index.html</a> 
while the application is running. Make sure you're using the correct port, in this case it is "8080";
</p>

<h2>About the project</h2>
<p>
Simplified PicPay is a simplified payment platform. In it, it is possible to make transactions between two users.
We have two types of users: common users and merchants, both have wallets with money and can realize transactions.
</p>


<h2>Business Rules</h2>
<p>
Both types of users have a first name, last name, document, email and password. The document must be unique 
in the system. Therefore, the system can only allow one registration with the same document or email;<br>
Users can only update their password;<br>
Common users can send money (make transactions) to merchants and to other users;<br>
Merchants can only receive money, they cannot send money;<br>
Validate if the user has the necessary balance to make a transaction before performing it;<br>
Create a MOCK API or an internal API to authorize the transaction.<br>
Create a MOCK API or an internal API to simulate sending an email. This API may be offline occasionally;<br>
Use your imagination to simulate the logic of the result return of the APIs;<br>
Transactions must be reversed in any case of inconsistency, and the money shall be returned to the user who sent it;<br>
This service must be RESTful.
</p>


<h2>Data to test the system</h2>
<p>
[<br>
    {
        "firstName": "Raphael",<br>
        "lastName": "Carsh",<br>
        "document": "75292019735",<br>
        "email": "rapha@gmail.com",<br>
        "password": "raphaSenha",<br>
        "balance": 90.00,<br>
        "userType": "COMMON"<br>
    },<br><br>
    {
        "firstName": "Lucas",<br>
        "lastName": "Silva",<br>
        "document": "40129592132",<br>
        "email": "lucas@gmail.com",<br>
        "password": "lucasSenha",<br>
        "balance": 310.00,<br>
        "userType": "COMMON"<br>
    },<br><br>
    {
        "firstName": "Felipe",<br>
        "lastName": "Torkov",<br>
        "document": "31295212332314",<br>
        "email": "felipe@gmail.com",<br>
        "password": "felipeSenha",<br>
        "balance": 100.00,<br>
        "userType": "MERCHANT"<br>
    },<br>
    {
        "firstName": "Carlos",<br>
        "lastName": "Oliveira",<br>
        "document": "72682217902162",<br>
        "email": "carlos@gmail.com",<br>
        "password": "carlosSenha",<br>
        "balance": 175.00,<br>
        "userType": "MERCHANT"<br>
    }<br>
]
</p>
