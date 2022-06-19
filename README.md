<h1 align="center">HOME SECURITY SYSTEM</h1>

<p align="center">
 <a target="_blank" href="https://drive.google.com/file/d/1mwXoAp8VMO9XeV4o94l6xOgLkuQERjaD/view?usp=sharing">Video Demo</a> 
</p>

    
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#salient-features">Salient Features</a></li>
       <li><a href="#built-with">Built With</a></li>
        <li><a href="#compatible-platforms">Compatible Platforms</a></li>    
      </ul>
    </li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#navigating-through-the-app">Navigating through the App</a></li><ul>
      </ul>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project
* Face Recognition Security System project built during Microsoft Engage 2022 program. 
* This programme processes frames from live video and compares detected faces against a set of known face encodings. 
* If there is no match found, the person is considered to be an intruder and an email is sent with an image of the intruder by invoking a shell script..

### Salient Features
* Real Time Security
* It  deals with non frontal face detection.
* Identify unknown persons that are not registered and send notifications via emails with current date and time.


### Built With

###  Tech Stack: 
* Front-end :
  HTML5, CSS3,Javascript, Bootstrap
* Back-end :
  Flask, Python
* Face Recogntion library: 
 Opencv, cv2, os, sys, face_recognition

### Compatible Platforms
Laptops, Desktops and Tablet PCs


## Getting Started
To install and run the project on your local system, following are the requirements:
### Prerequisites
The `requirements.txt` file should list all Python libraries that your notebooks
depend on, and they will be installed using:

```
pip install -r requirements.txt
```

### Instruction

To run the application run the command 
```sh
  python app.py
```

* Web Application

To separately run the Web application on your local host, perform the following steps:

Run the following commands to start the server side.

```sh
  npm install && npm start
```
Run the following commands to start the client side and run it on your local host
```sh
  cd templates
```
```sh
  node index.js
```
## Features & Interfaces (Glimpses of Web Application):
#### Landing page
![Screenshot (51)](https://user-images.githubusercontent.com/77895187/170818251-df799419-cb49-4e54-826a-9521ffc30ab5.png)

#### Performing Face Recognition
![Screenshot (56)](https://user-images.githubusercontent.com/77895187/170836497-aaee0a01-f164-4250-b084-189a519525e8.png)


####  This programme processes frames from live video and compares detected faces against a set of known face encodings.
https://user-images.githubusercontent.com/77895187/170843516-f8a967de-abe2-4252-9dd8-068ede012c2c.mp4


#### Services
![Screenshot (52)](https://user-images.githubusercontent.com/77895187/170818250-1e3b6c17-4aa0-41f5-b5c8-94373752df7e.png)
