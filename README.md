## Inspiration
While brainstorming ideas at a cafe, we realized that neither of us knew whether or not you could recycle a paper coffee cup and/or its lid. And we weren't alone! Everyone we talked to had agreed that while everyone tries to recycle and be environmentally conscious, it's too difficult to keep track of all the different rules and materials. 

Even worse, after some research, we found that recycling improperly can contaminate a whole bale, causing tonnes of recyclable material to be put into landfills! So we decided to create **Sustainify, a mobile application that leverages computer vision AI to identify and instruct users on how to properly dispose of waste material**.

## What it does
Sustainify is a mobile application, available for both iOS and Android devices, which allows users to **scan any waste material, and be given proper instructions on how to dispose of it**. The application also allows you to **locate the nearest recycling and garbage bin** in New York City, so you can be environmentally friendly even on the go! You even get to **view your stats on how much energy, pollution, and water you saved.**

## How We built it
In order to quickly and efficiently create a dual platform mobile application, we used React-Native. Using the mobile camera, snapshots are taken of the material being identified and POSTed to a Google Cloud Nodejs server as a blob, which then interacts with a custom vision machine learning model. After analyzing the material(s), the server responds to the mobile application with the identified materials. A second API call is then made using an HTTP GET request to obtain the data/disposal instructions pertaining to the identified material, which is then displayed to the user on application. After seeing the materials and instructions of their waste, users can click a button to find the closest recycling and garbage bin to them, provided via an API by the city of New York. 

## Challenges We ran into
One of the biggest challenges was figuring out how to convert the image taken via the camera to a base64 blob, which can then be transferred to our Nodejs server and computer vision model. Through lots of trial and error, research, and configuring http request headers/bodies, we were able to send the blob file in chunks, so that the server would not overload with 413 errors. 

Another big challenge we ran into, was that the current version of React-Native [has a problem with their debugging and reloading modules](https://github.com/facebook/react-native/issues/23235). This made it difficult to debug, as we would constantly encounter errors we had no control over. To solve this challenge, we figured out that removing the bundler and rebuilding the application with debugging off would fix the issue, and allow us to turn the debugging back on for a while.

## Accomplishments that we're proud of

We set out to build an application that would use computer vision to help people recycle and save energy while reducing waste. We are extremely proud of not only accomplishing that, but designing beautiful UI, easy UX, and integrating extra features such as finding the nearest recycle/garbage bin and being able to view your recycling accomplishments. We truly believe that this could be a huge help to everyone, so that not only do people recycle more, but they do it properly so that they don't contaminate other recyclable material.

## What we learned
We both learned quite a lot, from designing easy flowing and beautiful UI, to deploying servers with our own database and interacting with machine learning models we trained. This was Meagan Lai's first time making http requests, using MongoDB, as well as using flexbox and native mobile libraries to create a responsive application. For Ryan Nourbaran, this was a first in training a custom machine learning model, as well as working with data requests and blob images to work on our Nodejs server.


## What's next for Sustainify
We hope to incorporate more types of reclycing as right now we only have 12 classes of waste products. We also hope to add incentives to the sustainability profile to encourage more people to be environmentally conscious while also learning.
