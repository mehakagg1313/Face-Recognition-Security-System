<h1 align="center">HOME SECURITY SYSTEM</h1>

<p align="center">
 <a target="_blank" href="https://microsoft-teams-engage.netlify.app/">Link to the App</a>
    ·
 <a target="_blank" href="https://youtu.be/O7uGtnhZe2s">Video Demo</a>
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
* At the time of Face is captured and matched with face associated with the dataset
* Creating and deleting chat groups, adding and removing people by the group admin, photo sharing, chat text formatting, read receipts, typing status of users
* One-on-one video call with randomly generated unique link and the ability to mute and unmute audio and video during the call

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
