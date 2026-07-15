
# Phase 4: Project Design Phase - HouseRent Portal

## 1. High-Level Architecture
The system is built on the *MERN Stack (MongoDB, Express.js, React.js, Node.js)*. 
* *Frontend:* React with Vite, styled via Tailwind CSS, and managed with React Router.
* *Backend:* Express API server running on Node.js.
* *Database:* Non-relational MongoDB database storing users, listings, and bookings.

## 2. Database Schema (MongoDB Collections)

### Collection 1: Users
```json
{
  "_id": "ObjectId",
  "name": "String",
  "email": "String",
  "passwordHash": "String",
  "role": "String (Admin/Owner/Renter)",
  "phone": "String"
}
{
  "_id": "ObjectId",
  "ownerId": "ObjectId (Ref: Users)",
  "title": "String",
  "description": "String",
  "price": "Number",
  "location": "String",
  "images": "Array",
  "isApproved": "Boolean"
}
{
  "_id": "ObjectId",
  "renterId": "ObjectId (Ref: Users)",
  "propertyId": "ObjectId (Ref: Properties)",
  "status": "String (Pending/Approved/Declined)",
  "bookingDate": "Date"
}