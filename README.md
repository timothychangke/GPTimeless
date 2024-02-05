## Description:
This project aims to bridge the digital divide for elderly individuals by providing them with easy access to ChatGPT through voice interaction while also acting as a virtual caretaker of elderlies. Many elderly individuals may face challenges with typing, which can limit their ability to engage with AI-powered chatbots like ChatGPT. 

To address this barrier, our Voice-to-Text AI Bot enables elderly users to interact with ChatGPT using only their voice, eliminating the need for navigating to the chatgpt website, typing and using its elder-unfriendly interface. 

Additionally, this chatbot is equipped with state of the art artifical intelligence algorithms that help detect negative sentiments throughout the conversation which can then be used to raise an alert to social workers who could take human action and pay more attention to elderlies in need. Medical information provided by elderlies throughout the conversation with our program would also be relayed to the social workers who could make a more informed decision when deciding to help the elderlies out.

This enhanced accessibility for elderly individuals improves their digital inclusion by providing an intuitive and user-friendly interface for interacting with AI technologies. Furthermore, it could provide the medical industry with a reliable automation process that could look out for elderlies with fewer manpower needed. 

We believe in leveraging cutting-edge technologies to create **positive social impact** and **empower individuals** of all ages to benefit from the advancements in artificial intelligence.

## Key Features:
Voice Interaction: Elderly users can communicate with the program using their voice, making it accessible and user-friendly.

Translation: Our program translates the user's voice commands into English before processing them, ensuring seamless communication with ChatGPT.

Sentiment Analysis: Our program can accurately analyze elderlies' conversations throughout to catch any negative/dangerous sentiments.

Medical Assistance: Integration with Med7 ensures that the prgoram can understand and provide relevant information to medical personnel when necessary.


## Technologies Used: (subject to changes)
Chat Model: gpt-3.5-turbo, a powerful language model developed by OpenAI, is utilized for generating responses to user queries.

Sentiment Analysis: Distilbert, finetuned on emotions, is employed for extracting insights from user queries and understanding their emotions throughout conversations.

Medical Integration: Med7 is integrated to enable the program to understand medical terminology and provide relevant information to medical personnel when necessary.

Backend: Flask was used to communicate without database, Firebase to store the necessary data such as the users' sentiments and relevant medical information throughout the conversations.

Frontend: React and tailwind was used.


## How to Use:
Simply activate the bot and start speaking your query or message.
The bot will translate your voice input into English and process it using ChatGPT.
Enjoy seamless communication with ChatGPT.

## Files

Run `pip install -r requirements.txt` to install all necessary python packages for the backend. 
Run `npm install` to install all necessary npm packages.

In the root folder, run `python3 server/server.py` to run the server.
In the root folder, you can type in `npm start` to run the website.

In this webpage, the elderlies will be able to speak into it and a voice will talk back to them.

Behind the scenes, with the conversation data collected, we used Distilbert to detect sentiment throughout the conversation, saving them to our firebase database and relaying extremely negative conversations back to the workers. 

Additionally, we also used Med7, a deep learning model that is effective in detecting medication related data throughout the conversation.

## Tech used 

* ReactJS
* Flask 
* Firebase
* OpenAI API - gpt-3.5-turbo
* Med7 - HuggingFace