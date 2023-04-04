# weekender

An app to help plan your weekend trips.

Technologies used:

Axios,
AWS,
Webpack,
Babel,
Eslint,
NodeJS,
dotenv,
Express,
React,
React Router,
Passport,
MongoDb W/ Mongoose,

Developer Setup:
1. NPM INSTALL
2. NPM RUN BUILD
3. CREATE .ENV FILE USING TEMPLATE BELOW



APIs Used: 
Recreation.gov Link https://ridb.recreation.gov/docs#/Facilities/getFacilities (Key Required)
Open-Meteo: https://api.open-meteo.com/v1/forecast. (NO KEY REQ)


.ENV file config:
GOOGLE_CLIENT_ID= \n
GOOGLE_CLIENT_SECRET= \n
REC_KEY= \n
CLIENT_URL='http://localhost:8080/' \n
REACT_APP_CLIENT_URL=http://localhost:8080/ \n
DB_URI='mongodb://localhost/weekender' \n

Helpful information:

On some deployments of this app, the application breaks if the database is empty, if this is the case, Use postman to seed the database
Postman POST REQUEST TO: http://localhost:8080/trips/trips/<your user id> (user id will exist in the datbase AFTER logging in with google auth)
Set body settings in postman to raw and JSON
body: 
{"data":{ 
    "dateStart": "2023-04-08" , 
    "dateEnd": "2023-04-03", 
    "campsiteImg": [{"URL":"https://cdn.recreation.gov/public/images/68613.jpg"},{"URL":"https://cdn.recreation.gov/public/images/68805.jpg"}], /n
    "campsiteName": "GRAHAM CREEK CAMPGROUND", 
    "campsiteDesc": "<h2>An Amazing Getaway Just For You!</h2>", 
    "campsiteLong": -107.54, 
    "campsiteLat": 37.3902778 
  } 
}; 

Recieve 201, and database should be seeded, and you can use the website as intended.
Preview:
![Screenshot 2023-04-04 at 9 32 11 AM](https://user-images.githubusercontent.com/65569578/229809738-1d7ccd0b-ecba-444c-920f-362549f3a662.png)
![Screenshot 2023-04-04 at 9 34 09 AM](https://user-images.githubusercontent.com/65569578/229809858-f66c054b-b05a-4f09-9db7-0919ea8466a8.png)
![Screenshot 2023-04-04 at 9 33 11 AM](https://user-images.githubusercontent.com/65569578/229809978-d4429135-4134-4bfb-821b-6530ff29c930.png)
![Screenshot 2023-04-04 at 9 33 41 AM](https://user-images.githubusercontent.com/65569578/229810032-26361eeb-0bfd-4935-97bf-b1ff9ab00a38.png)
![Screenshot 2023-04-04 at 9 33 58 AM](https://user-images.githubusercontent.com/65569578/229810053-5d42405e-8ce8-4d37-be48-3cc8ffd71e71.png)



