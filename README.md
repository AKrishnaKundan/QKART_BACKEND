
# QKart Backend

**Note: 
• As these projects are developed in Crio.Do program, I was not allowed to make the code repository public. 
• If you are a recruiter and wants to see my code, message me so that I can provide you access to the code repository.**

QKart is an E-commerce application offering a variety of products for customers to choose from. 

During the course of this project,

• Built the complete set of REST APIs for an E-commerce application following the best practices

• Followed a layered approach for easy maintenance

• Used MongoDB NoSQL database for data storage

• Implemented multiple authentication schemes

• Wrote unit and integration tests to test the implementation

![image](https://github.com/AKrishnaKundan/QKART_BACKEND/assets/93312488/f0fc1781-892d-4631-b37b-538d2b56c75d)

**QKart Layered Architecture**

## Set up application and implemented the first API
• Implemented `GET /v1/users` API endpoint to send user data to clients

• Used Mongoose (Node.js-MongoDB ODM) to fetch user data from MongoDB

• Defined JOI schema to easily validate client requests

• Utilized middlewares to reduce code duplication


## Secured API endpoints and implemented register/login APIs

• Implemented logic to generate short-lived JWT tokens

• Set token authentication strategy by using the Passport library

• Secured `GET /v1/users` endpoint using token authentication

• Created POST APIs for user registration and login

• Implemented password authentication to facilitate register / login flow

![image](https://github.com/AKrishnaKundan/QKART_BACKEND/assets/93312488/0fe00e3d-62c2-4401-a96c-d9ac59c38cfa)

JWT Token authentication flow for QKart APIs

## Implemented APIs related to shopping cart
• Implemented the GET/POST/PUT API endpoints for a user’s shopping cart

• Improved the `GET /v1/users` endpoint by supporting filtering for user address via query parameters
## Completed the checkout logic using TDD
• Added Jest-based assertions to unit tests for checkout requirements provided

• Implemented the checkout logic in a Test-driven development style

• Utilized integration tests to find and resolve bugs on integrating checkout logic to the application
## Deployment

**Database**: MongoDB Atlas cloud

**Frontend:** Netlify

**Backend:** Render



## Links

**Frontend**: https://a-krishnakundan-qkart-backend.netlify.app/

**Backend**: https://qkart-backend-re47.onrender.com
