# Mimesis-Backend
##### by Camila Souza - Jackson
***
This is a section of Labenu-Jackson's first full-stack project, where each student should create an image or music management system.
I chose to create an Image Management System by the name "Mimesis", originally a Greek word, used in aesthetic or artistic theory to refer to the attempt to imitate or reproduce reality.
***
## About
The user should be able to signup, login, insert images and access them.
***
## Data
### User (signup)
```
id
name
email
nickname
password (min of 6char)
token (signup and login with JWT)
```
### Images
```
id
subtitle
author
date
file
tags []
collection
```
***
## Endpoints

### Signup 
```
    Method: POST
    Path: /signup
    Input:
        Body:
        {
            "name": "Leonardo Da Vinci",
            "email": "davinci@gmail.com",
            "nickname": "LeoDV",
            "password": "123456"
        }
    Output:
        {
            "access token": ""
        }
    Attention:
        - Password must have 6 or more characters;
        - All params must be validated, return message in case of error:
            * Empty;
            * Invalid;
```
### Login
```
    Method: POST
    Path: /login
    Input:
        Body:
        {
            "email": "davinci@gmail.com",
            "password": "123456"
        } OR
        {
            "nickname": "LeoDV",
            "password": "123456"
        }
    Output:
        {
            "access token": ""
        }
    Attention:
        - All params must be validated, return message in case of error:
            * Empty;
            * Invalid;
```
### Insert Image
```
    Method: POST
    Path: /image
    Input:
        Headers:
            - Authorization: "access token"
        Body:
        {
            "subtitle": "Mona Lisa",
            "author": "Leonardo Da Vinci",
            "date": ,
            "file": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
            "tags": "monalisa, renaissance, davinci"
            "collection": "Renaissance"
        }
    Output:
        {
            "id": "",
            "subtitle": "",
            "author": "",
            "date": "",
            "tags": "",
            "collection": ""
        }
    Attention:
        - The date must be sent at the moment of the imag's insertion by the user;
```
### Get Image
```
    Method: GET
    Path: /image/:id
    Input:
        Path Param:
            - "id": "Image's id"
        Headers:
            - Authorization: "access token"
    Output:
        {
            "id": "",
            "subtitle": "",
            "author": "",
            "date": "",
            "file": "",
            "tags": "",
            "collection": ""
        }
```
### Get Feed
```
    Method: GET
    Path: /image/feed
    Input:
        Headers:
            - Authorization: "access token"
    Output:
        {
            "id": "",
            "subtitle": "",
            "author": "",
            "date": "",
            "file": "",
            "tags": "",
            "collection": ""
        }
```