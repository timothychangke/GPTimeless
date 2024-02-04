

## Files

In the root folder, you can type in `npm start`
which will run the chat bot interface that will be shown to the elderlies. 

In this webpage, the elderlies will be able to speak into it and a voice will talk back to them.

Behind the scenes, with the conversation data collected, we used AWS Comprehend to detect sentiment throughout the conversation and relay extremely negative conversations back to the workers. 

Additionally, we also used Med7, a python-based AI library that is effective in detecting medication related data throughout the conversation.

## Tech used 

* text-davinci-003 - OpenAi
* AWS Comprehend - Amazon
* Med7 - HuggingFace
* React JS
