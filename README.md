# Weekender

An app to help plan your weekend trips.

## Technologies used

- Axios
- AWS
- Webpack
- Babel
- Eslint
- NodeJS
- dotenv
- Express
- React
- React Router
- Passport
- MongoDB with Mongoose

## Developer Setup

1. Run `npm install`
2. Run `npm run build`
3. Create a `.env` file using the template below:



## APIs Used

- Recreation.gov Link: https://ridb.recreation.gov/docs#/Facilities/getFacilities (Key Required)
- Open-Meteo: https://api.open-meteo.com/v1/forecast (NO KEY REQ)

## .ENV file config:
`GOOGLE_CLIENT_ID= `
`GOOGLE_CLIENT_SECRET= `
`REC_KEY=`
`CLIENT_URL='http://localhost:8080/' `
`REACT_APP_CLIENT_URL=http://localhost:8080/ `
`DB_URI='mongodb://localhost/weekender' `

On some deployments of this app, the application breaks if the database is empty. If this is the case, use Postman to seed the database.

Postman POST REQUEST TO: http://localhost:8080/trips/trips/<your user id> (user id will exist in the database AFTER logging in with Google Auth)

Set body settings in Postman to raw and JSON. Body:

{"data":{ 
    "dateStart": "2023-04-08" , 
    "dateEnd": "2023-04-03", 
    "campsiteImg": [{"URL":"https://cdn.recreation.gov/public/images/68613.jpg"},{"URL":"https://cdn.recreation.gov/public/images/68805.jpg"}],
    "campsiteName": "GRAHAM CREEK CAMPGROUND", 
    "campsiteDesc": "&lt;h2&gt;An Amazing Getaway Just For You!&lt;/h2&gt;", 
    "campsiteLong": -107.54, 
    "campsiteLat": 37.3902778 
  } 
};

Recieve 201, and database should be seeded, and you can use the website as intended.
    
## Preview:
![Screenshot 2023-04-04 at 9 32 11 AM](https://user-images.githubusercontent.com/65569578/229809738-1d7ccd0b-ecba-444c-920f-362549f3a662.png)
![Screenshot 2023-04-04 at 9 34 09 AM](https://user-images.githubusercontent.com/65569578/229809858-f66c054b-b05a-4f09-9db7-0919ea8466a8.png)
![Screenshot 2023-04-04 at 9 33 11 AM](https://user-images.githubusercontent.com/65569578/229809978-d4429135-4134-4bfb-821b-6530ff29c930.png)
![Screenshot 2023-04-04 at 9 33 41 AM](https://user-images.githubusercontent.com/65569578/229810032-26361eeb-0bfd-4935-97bf-b1ff9ab00a38.png)
![Screenshot 2023-04-04 at 9 33 58 AM](https://user-images.githubusercontent.com/65569578/229810053-5d42405e-8ce8-4d37-be48-3cc8ffd71e71.png)



