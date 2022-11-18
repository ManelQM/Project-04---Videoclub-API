# Project-04: API REST - MOVIE RENTAL - BACKEND


## ABSTRAC 
Project number 4 it´s an asigned task from GeeksHubs Academy - Bootcamp Full Stack Developer course.
The main goal of this project it´s the development of a full API Rest for a simulated movie rental business. 
The student should show their skills and knowledge of the technologies learned in classroom and searching their own information and learning sources.


## TECHNOLOGIES AND DEPENDENCIES


![JavaScript](/assets/logo-javascript-logo-png-transparentj.png) 
![VisualStudioCode](/assets/visual-studio-code-2020.png)
![Sequelize](/assets/sequelizejs-ar21.svg)
![Express](/assets/expressjs-ar21.svg)
![Nodemon](/assets/nodemonio-ar21.svg)
![Postman](/assets/getpostman-icon.svg)
![MySQL](/assets/mysql-ar21.svg)

Other technologies and dependencies used ---> Morgan, Cors, Winston, Docker and Railway. 

## INSTALLATION 
Here is a list of instructions to test the API; 

1. The full API can be downloaded here; [Github](https://github.com/ManelQM/Project-04---Videoclub-API)

2. The the best way to test the API with the DB in the railway server it´s using Postman. Download link [Postman](https://www.postman.com/downloads/) 

## DEPENDENCIES COMMANDS 

As all the dependencies are instaled the user should only initialize on the console the following commmands; 

npm i 

npm run dev 

## TEST THE PROJECT 
In Postman, select the request you want to test from the API, configure the inputs if needed and click "Send".

You can also do it manually: select CRUD method, copy the endpoint URL, configure inputs if needed and click "Send".


## DATABASE ARCHITECTURE

The architecture of the DataBase is structured under the relational integrity rules. 

![DB](/assets/db2.png)

Relationship construction; 

Users --- Orders --- Films - one (user/films) to many 
Users --- SeriesOrders --- Series - one (user/series) to many 


## ENDPOINTS 

***
FILMS
***
Toprated Films: http://localhost:3000/films/toprated/1

Toprated its a boolean value so 1 should be interpreted as true. 

Films Id: http://localhost:3000/films/1 

You can obtain each film by their number id

Films by title: http://localhost:3000/films/title/nosferatu

Obtains film by his title name 

Films by genre: http://localhost:3000/filmenre/western

Obtains a list of films by their genre (horror,western,kurosawa(yes, for me Akira Kurosawa it´s a genre itself))
***
SERIES
***

Toprated series: http://localhost:3000/series/toprated/1

Toprated its a boolean value so 1 should be interpreted as true. 


Series by Id: http://localhost:3000/series/1


You can obtain each serie by their number id

Series by title: http://localhost:3000/series/title/twinpeaks

Obtains film by his title name 

***
USERS
***

Register a new user: http://localhost:3000/users/register

Login user: http://localhost:3000/users/login

User by Id: http://localhost:3000/users/3

Update user (only admin): http://localhost:3000/users/update/

Delete user (only admin): http://localhost:3000/users/delete/4

***
ORDERS (FILMS)
***
Create new order(rent a movie): http://localhost:3000/ofilms/neworder


List of all rented movies: http://localhost:3000/ofilms/rented/


Rented films by user: http://localhost:3000/ofilms/userid/2

***
ORDERS (SERIES)
***
Create new order(rent a serie): http://localhost:3000/oseries/neworder


List of all rented series: http://localhost:3000/oseries/rented/


Rented series by user: http://localhost:3000/oseries/userid/2


## THANKS

Family, friends and teachers. 