# Transnet-Test

This is a code project for Back-end Transnet test.  

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
- node
- npm
- express
- nodemon
- morgan
```

### Installing

1. Make sure you have installed node and npm using this command below

```
node -v && npm -v
```

2. Install all depedencies using this command below

```
npm install
```


3. Run the project using this command below

```
npn run dev
```

4. If you use node version ≤ 8.2.1, add "-harmony" flag using spread operator before test in package.json

```
"dev": "node_modules/.bin/nodemon --harmony -e js",
```

## Running the tests

### Accept GET request to / and return a "Hello World" response

```
curl -i http://127.0.0.1:3000
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 25
ETag: W/"19-c6Hfa5VVP+Ghysj+6y9cPi5QQbk"
Date: Sat, 19 Oct 2019 14:49:41 GMT
Connection: keep-alive

{"message":"Hello World"}
```

### Accept GET request to /api/users and get all users from users.json file

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 10953
ETag: W/"2ac9-YAESFxaMNZEmSZhTMvrNArVIrOM"
Date: Sat, 19 Oct 2019 14:50:59 GMT
Connection: keep-alive

[{"id":1,"first_name":"Rafaellle","last_name":"Kuhnhardt","email":"rkuhnhardt0@tinypic.com","gender":"Male"},{"id":2,"first_name":"Liz","last_name":"Ramelet","email":"lramelet1@ed.gov","gender":"Female"},...]
```

### Accept POST request to /api/users to add a new user into users.json file

```
curl -i -X POST -H "Content-Type: application/json" -d '{ "first_name": "Bobby", "last_name": "Kurniawan", "email": "theascool@gmail.com", "gender": "Male" }' http://127.0.0.1:3000/api/users 
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 156
ETag: W/"9c-fLojJALugZx3Q9tVzJT6ytigfys"
Date: Sat, 19 Oct 2019 17:17:38 GMT
Connection: keep-alive

{"message":"The user #106 has been created","content":{"id":106,"first_name":"Bobby","last_name":"Kurniawan","email":"theascool@gmail.com","gender":"Male"}}
```

### Accept PUT request to /api/users/:id to update a user in users.json file

```
curl -i -X PUT -H "Content-Type: application/json" -d '{ "first_name": "Bobby", "last_name": "Frozen", "email": "theascool@gmail.com", "gender": "Female" }' http://127.0.0.1:3000/api/users/104
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 155
ETag: W/"9b-20VgCSpTZPGfpEgjDRikA6/klDs"
Date: Sat, 19 Oct 2019 17:23:23 GMT
Connection: keep-alive

{"message":"The user #104 has been updated","content":{"id":104,"first_name":"Bobby","last_name":"Frozen","email":"theascool@gmail.com","gender":"Female"}}
```


### Accept DELETE request to /api/users/:id to remove a user from users.json file

```
curl -i -X DELETE http://127.0.0.1:3000/api/users/104
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 44
ETag: W/"2c-NC1/i1gs+5XVlu0n0qyR5qEw+LI"
Date: Sat, 19 Oct 2019 17:25:16 GMT
Connection: keep-alive

{"message":"The user #104 has been deleted"}
```


### Implement pagination for GET /api/users endpoint

```
curl -i -X GET 'http://127.0.0.1:3000/api/users?page=1&limit=10'
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 1083
ETag: W/"43b-ghIcSnAd42XU7RT8n930pLMxfGI"
Date: Sat, 19 Oct 2019 17:30:14 GMT
Connection: keep-alive

{"page":1,"limit":10,"total":106,"users":[{"id":1,"first_name":"Rafaellle","last_name":"Kuhnhardt","email":"rkuhnhardt0@tinypic.com","gender":"Male"},{"id":2,"first_name":"Liz","last_name":"Ramelet","email":"lramelet1@ed.gov","gender":"Female"},{"id":3,"first_name":"Lyon","last_name":"Coggill","email":"lcoggill2@nih.gov","gender":"Male"},{"id":4,"first_name":"Ricardo","last_name":"Beaglehole","email":"rbeaglehole3@webmd.com","gender":"Male"},{"id":5,"first_name":"Pen","last_name":"Rosenfelt","email":"prosenfelt4@fastcompany.com","gender":"Male"},{"id":6,"first_name":"Gilly","last_name":"Thormwell","email":"gthormwell5@networksolutions.com","gender":"Female"},{"id":7,"first_name":"Florette","last_name":"Jarvis","email":"fjarvis6@about.me","gender":"Female"},{"id":8,"first_name":"Chandal","last_name":"Islip","email":"cislip7@shareasale.com","gender":"Female"},{"id":9,"first_name":"Pedro","last_name":"Mandifield","email":"pmandifield8@domainmarket.com","gender":"Male"},{"id":10,"first_name":"Deerdre","last_name":"Bellas","email":"dbellas9@unblog.fr","gender":"Female"}]}
```

```
curl -i -X GET 'http://127.0.0.1:3000/api/users?page=3&limit=30'
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 3168
ETag: W/"c60-qIAdHGRVw9tmUlUp5d8t5s1OKxA"
Date: Sat, 19 Oct 2019 17:31:34 GMT
Connection: keep-alive

{"page":3,"limit":30,"total":106,"users":[{"id":61,"first_name":"Robbin","last_name":"Manderson","email":"rmanderson1o@google.com.hk","gender":"Female"},{"id":62,"first_name":"Astra","last_name":"Andryszczak","email":"aandryszczak1p@netscape.com","gender":"Female"},{"id":63,"first_name":"Keriann","last_name":"Bernardeau","email":"kbernardeau1q@ftc.gov","gender":"Female"},{"id":64,"first_name":"Waylin","last_name":"Glowacki","email":"wglowacki1r@phpbb.com","gender":"Male"},{"id":65,"first_name":"Penny","last_name":"Grooby","email":"pgrooby1s@cnet.com","gender":"Female"},{"id":66,"first_name":"Marquita","last_name":"Fishlock","email":"mfishlock1t@sfgate.com","gender":"Female"},{"id":67,"first_name":"Jocko","last_name":"Georg","email":"jgeorg1u@is.gd","gender":"Male"},{"id":68,"first_name":"Brendan","last_name":"Leasor","email":"bleasor1v@cyberchimps.com","gender":"Male"},{"id":69,"first_name":"Ozzy","last_name":"Fothergill","email":"ofothergill1w@oaic.gov.au","gender":"Male"},{"id":70,"first_name":"Max","last_name":"Bealing","email":"mbealing1x@arizona.edu","gender":"Female"},{"id":71,"first_name":"Willette","last_name":"Brisley","email":"wbrisley1y@pen.io","gender":"Female"},{"id":72,"first_name":"Dorena","last_name":"Humes","email":"dhumes1z@google.fr","gender":"Female"},{"id":73,"first_name":"Glenna","last_name":"Stansell","email":"gstansell20@flickr.com","gender":"Female"},{"id":74,"first_name":"Penny","last_name":"Waldocke","email":"pwaldocke21@washington.edu","gender":"Female"},{"id":75,"first_name":"Itch","last_name":"Wyper","email":"iwyper22@canalblog.com","gender":"Male"},{"id":76,"first_name":"Mal","last_name":"Colton","email":"mcolton23@blinklist.com","gender":"Male"},{"id":77,"first_name":"Murray","last_name":"Linsley","email":"mlinsley24@example.com","gender":"Male"},{"id":78,"first_name":"Rich","last_name":"Thieme","email":"rthieme25@yahoo.com","gender":"Male"},{"id":79,"first_name":"Manny","last_name":"Van Schafflaer","email":"mvanschafflaer26@ycombinator.com","gender":"Male"},{"id":80,"first_name":"Kay","last_name":"Batterbee","email":"kbatterbee27@usgs.gov","gender":"Female"},{"id":81,"first_name":"Gennifer","last_name":"Gapper","email":"ggapper28@twitpic.com","gender":"Female"},{"id":82,"first_name":"Sheena","last_name":"Rearden","email":"srearden29@marriott.com","gender":"Female"},{"id":83,"first_name":"Ashli","last_name":"Firsby","email":"afirsby2a@dot.gov","gender":"Female"},{"id":84,"first_name":"Davey","last_name":"O' Quirk","email":"doquirk2b@devhub.com","gender":"Male"},{"id":85,"first_name":"Quillan","last_name":"Chucks","email":"qchucks2c@state.tx.us","gender":"Male"},{"id":86,"first_name":"Konstantine","last_name":"Acome","email":"kacome2d@google.es","gender":"Male"},{"id":87,"first_name":"Osmund","last_name":"Bignold","email":"obignold2e@squarespace.com","gender":"Male"},{"id":88,"first_name":"Jodie","last_name":"Connolly","email":"jconnolly2f@time.com","gender":"Female"},{"id":89,"first_name":"Kalvin","last_name":"Gaul","email":"kgaul2g@istockphoto.com","gender":"Male"},{"id":90,"first_name":"Aldin","last_name":"McGilleghole","email":"amcgilleghole2h@google.com.hk","gender":"Male"}]}
```

### Implement simple search function to GET /api/users endpoint.

```
curl -i -X GET 'http://127.0.0.1:3000/api/users?search_key=first_name&search_value=Rafaellle'
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 109
ETag: W/"6d-BM9iq8Tj7H1M7nX+BJ4igpDJQic"
Date: Sat, 19 Oct 2019 17:34:26 GMT
Connection: keep-alive

[{"id":1,"first_name":"Rafaellle","last_name":"Kuhnhardt","email":"rkuhnhardt0@tinypic.com","gender":"Male"}]
```

## Built With

* [Node](https://nodejs.org/en/docs/) - Engine
* [Express](https://expressjs.com/) - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management

## Authors

* **Bobby Kurniawan** - *Initial work* - [LebahBeku](https://github.com/LebahBeku/)

