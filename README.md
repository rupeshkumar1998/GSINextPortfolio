# **GSI NEXT Portfolio**

## **Introduction**
GSINextPortfolio is a dynamic and fully responsive portfolio platform built to showcase a company's mission, services, awards, recognitions, etc. This project serves as a centralized hub for highlighting achievements and client testimonials, enabling seamless interaction between users and the company.
            This project includes a powerful Admin Dashboard designed for managing (add,delete, update) content efficiently.

## **Section**
- **Fontend for Client**
- **Backend**
- **Dashboard For Admin**

## **Technologies Used**
- **Frontend**: React.js, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Others**: CLOUDINARY, Axios, Swiper.js, etc.

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/rupeshkumar1998/GSINextPortfolio.git


2. cd your-repository (Client/Backend/dashboard):


3. In the backend/config/config.env

PORT=4000

MONGO_URI=mongodb+srv://username:password@cluster0.7ycp1.mongodb.net/?retryWrites=true


PORTFOLIO_URL=

DASHBOARD_URL=


JWT_SECRET_KEY=

JWT_EXPIRES=

COOKIE_EXPIRE=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

SMPT_HOST=

SMPT_PORT=

SMPT_SERVICE=

SMPT_MAIL=

SMPT_PASSWORD=



3. npm install

4.npm run dev (in each repo.)

5. To add Data, first register admin to the database using **POSTMAN** 
**API key :** http://localhost:4000/api/v1/user/register

  fullName:
  email:
  phone: 
  aboutMe:
  password:
    "Password Must Contain At Least 8 Characters,
  avatar:
  instagramURL:
  twitterURL:
  linkedInURL:
  facebookURL:

  fill all above data and register 
  6. for admin login through dashboard use email and password