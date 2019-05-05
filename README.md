# dwi-coding-challenge

Take-home coding challenge for Direct Wines

## Workflow

All submissions should include source code and a readme that explains how their reviewers should download and run the code. Please provide a link to your work hosted on GitHub or Bitbucket (your choice).

### Dev Setup

- Create a local dev server using Webpack or Parcel
- Use the latest version of React to create a standalone app
- Use Bootstrap to style the elements and make it responsive
- Create dev and build commands and make sure your code runs!

## Front-end challenge #1: Build a responsive product listing web component based on a Direct Wines Offer.

This should outline how comfortable you are with displaying data from a REST API.

### Screenshots

1. [Product Listing - On Load](https://www.dropbox.com/s/eyszs155u6ob2ul/Screenshot%202019-05-05%2008.34.08.png?dl=0)

### Requirements

- On page load, the REST API for the offer should be called using this code "0033008".
- There will be 3 products inside of the mainItems array
- Loop through the items and pull out the productName, numberOfBottlers and Price and display it on the page to look like the below

## Front-end challenge #2: Build a ZIP code lookup field

This should outline how comfortable you are with building a web component that will dynamically changed based on inputs from the user.

### Screenshots

1. [Zip Code Lookup - On Load](https://www.dropbox.com/s/7vj7swiujvp9ize/Screenshot%202019-05-05%2008.44.57.png?dl=0)
2. [Zip Code Lookup - After Lookup](https://www.dropbox.com/s/fa6fnqx9c09ixfh/Screenshot%202019-05-05%2008.46.12.png?dl=0)

### Requirements

- The city and state fields should be hidden by default
- When the user enters their zip code, a call to the REST API should happen and pass along the zip code into the URL
- The API will respond with the city / state values
- The city and state fields should show on the page (slide down) and the values should be filled out
- If the user selects CT as in the example below, an additional message should appear.
- If a NY zip code is entered, the message below should be hidden and only the city and state should be shown alongside the zip code.

## Resources

### Offer API

GET Request - https://www.wsjwine.com/api/offer/0033008

### ZIP Code API

GET Request - https://www.wsjwine.com/api/address/zipcode/12345

### Sample Landing Page

https://www.wsjwine.com/discovery-club
