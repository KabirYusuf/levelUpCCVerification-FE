# Credit Card Verification System Frontend

This Credit Card Verification System Frontend Application is a web application designed by Yusuf Kabir Adekunle, email: kabiryusuf2307@gmail.com. It is built using HTML, CSS, JavaScript, and React. The application communicates with a backend server by making API calls to verify the validity of credit cards.

**Node.js Version:** v16.17.1

## Table of Contents

- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Features](#features)
- [Input Fields](#input-fields)
- [Supported Card Types](#supported-card-types)

## Getting Started

### Clone the Repository

To get started, clone this repository to your local machine using the following command on you terminal:

git clone https://github.com/KabirYusuf/levelUpCCVerification-FE.git

### Install Dependencies
Navigate to the project directory and install the necessary dependencies using the commands below:
cd cc_verify
npm install

### Running the Application
Start the React application on your local development server using the command below:
npm start

The application will be available at http://localhost:3000 in your web browser.

## Usage
The application provides a user-friendly interface for verifying credit card information. Input your card details and click the "Validate" button. The response from the backend server will be displayed below the button.

## Features
Credit card information validation.
Response display for successful requests and exceptions.
Reusable components for a clean and maintainable codebase.

## Input Fields
The application has three input fields:

Expiry Date: Enter the expiry date in the format mm/yy. Both the month and year must be two-digit numbers. The field accepts only digits, with no spaces or special characters.

CVV: Enter the CVV (Card Verification Value), which must be a three-digit number. The field accepts only digits, with no spaces or special characters.

Card Number (PAN): Enter the card number, which must be a minimum of 16 characters and a maximum of 19 characters. The field accepts only digits, with no spaces or special characters.

## Supported Card Types
The application supports the validation of the following card types:

Visa
Mastercard
Discover
JCB
Diners Club and Carte Blanche


