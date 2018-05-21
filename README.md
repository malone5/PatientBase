# PatientBase exercise
This exercise consists of two parts:
1. ReactJS implementation of a basic API.
2. Minimal backend API with two endpoints.


## Tool versions used
+ Node >= 6
+ npm >= 5


## Backend API Set-up
Setting up the development server for the backend api
`cd api`
`npm install`
`npm start`

The server will run on port `:5000`


## Frontend Set-up
Open up another terminal and enter the following to run the frontend dev server:

`cd client`
`npm install`
`npm start`

**NOTE** 
Currently the backend API is set to run local port `:5000` and the frontend runs on the local port `:3000`

In the client package.json there is a line 
` "proxy": "http://localhost:5000/", `
that routes all api calls to that address. This line must match the address that the backend API is running on





### Endpoints

| Endpoint | Supported Methods | Description |
| -------- | ----------------- | ----------- |
| /        | GET | Description of the exercise |
| /patients| GET | List of patients          |
| /patients?name=[search_query]| GET | List of patients filtered by name search  |


## Post-mortem

### What could be imporved upon with more time
 + Unit Testing could have been more comprehensive on the front-end with more time + tools(enzyme, supertest)
 + Break down components into even smaller modules
 + Better error handling and validation


## Requirements
**At a minimum:**
- [x] Instructions on how to use/run your implementation of this exercise.
- [x] Backend API has an endpoint of `/patients` in any language that you choose.
- [x] Endpoint: `/patients` with no arguments returns a valid JSON list of patients.
- [x] Endpoint: `/patients` with the name argument should return a valid list of patients that include that string in their `full_name`
- [x] Frontend includes a main page that displays the description of the application, along with a method of navigating or viewing a patient list.
- [x] Frontend view that shows a list of all patients (Showing the id, name, and mrn ) from the backend API.
- [x] Frontend view that allows the ability to search for a specific string via the Backend API and shows the result.

**Bonus:**
- [x] Add a Frontend view and Backend endpoint to view one patient specifically by mrn.
- [x] Sortability of the patient list.
- [x] Unit testing of any of the above logic. 
- [x] Anything you could think of that may be valuable in this application.