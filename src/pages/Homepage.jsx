import '../App.css';
import React from 'react';
import SpeechRecognition, {
    useSpeechRecognition,
} from 'react-speech-recognition';
import Button from '../components/Button';
import logo from '../img/chatgpt_logo.png';
import { useEffect } from 'react';
import axios from 'axios';

var prompt = `You: Did you sleep well last night?\nFriend: Yes I did! Did you sleep well last night?\nYou:`;
var response_txt = '';
const output_audio = new SpeechSynthesisUtterance();
output_audio.rate = 0.85;
output_audio.pitch = 1.2;

export default function Homepage() {

    /* Chat-GPT api process.env.REACT_APP_API */
    const { Configuration, OpenAIApi } = require('openai');
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_API,
    });
    const openai = new OpenAIApi(configuration);

    const [translatedtranscript, settranslated] = React.useState('');

    async function sentimentanalysis(text){
        fetch("/sentiment",{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
            },
            body:JSON.stringify(text)
            }).then((res) =>
                    res.json().then((data) => {
                        console.log(data);
                    })
                );
    }

    async function medicalanalysis(text){
        fetch("/medical",{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
            },
            body:JSON.stringify(text)
            }).then((res) =>
                    res.json().then((data) => {
                        console.log(data);
                    })
                );
    }

    const addtranslation = (translation) => {
        const tmp = translation + '\n\n';
        settranslated((prev) => tmp + prev);
    };

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

        // Define the API endpoint
    const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

    // Define the function to make the API request
    async function makeAPIRequest() {
        let messages = [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: 'I am Naveen, I want to learn AI' },
            { role: 'assistant', content: 'Hello, Naveen. That is awesome! What do you want to know about AI?' },
            { role: 'user', content: 'What is NLP?' }
          ];
        try {
            const response = await axios.post(API_ENDPOINT, {
            model: 'gpt-3.5-turbo',
            messages: messages,
            temperature: 0.7,
            max_tokens: 50 
            }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_API}`
            }
            });

            const assistantResponse = response;
            console.log(assistantResponse);

        } catch (error) {
            console.error('Error:', error.message);
        }
        }

    function handleclick(event) {
        event.preventDefault();
        

        if (listening) {
            SpeechRecognition.stopListening();

            console.log(transcript);
            sentimentanalysis(transcript);
            medicalanalysis(transcript);

            prompt += transcript;
            prompt += '\nFriend: ';

            openai
                .createCompletion({
                    model: 'gpt-3.5-turbo',
                    prompt: prompt,
                    temperature: 0.7,
                    max_tokens: 256,
                    top_p: 1.0,
                    frequency_penalty: 0.6,
                    presence_penalty: 0.6,
                    stop: ['You:'],
                })
                .then((response) => {
                    const tmp = response.data.choices[0].text;
                    prompt += tmp;
                    prompt += '\nYou:';
                    
                    console.log(tmp);
                    addtranslation(tmp);
                    output_audio.text = tmp;
                    window.speechSynthesis.speak(output_audio);
                });

            response_txt = response_txt.concat(translatedtranscript);

            console.log(translatedtranscript);
        } else {
            resetTranscript();
            console.log('listening start');
            console.log("hi");
            SpeechRecognition.startListening({
                continuous: true,
                language: 'en-US',
            });
        }
    }
    return (
        <html>
            <head></head>
            <body>
                <div className="flex">
                    <div className="bg-[#343541] flex-1">
                        <div className="flex flex-col items-center justify-center text-white h-screen px-2">
                            <div className="flex space-x-1">
                                <img src={logo} className="max-h-12" />
                                <h1 className="text-5xl font-bold mb-50">
                                    GPTimeless
                                </h1>
                            </div>
                            <div className="buttons">
                                <Button
                                    onClick={handleclick}
                                    listening={listening}
                                >
                                    {listening ? 'Listening...' : 'Talk to me'}
                                </Button>
                            </div>
                            <div className="text-area flex text-gray-800">
                                <textarea
                                    className="transcript-text"
                                    placeholder="Your Conversation"
                                    value={transcript}
                                    rows="5"
                                    cols="40"
                                ></textarea>
                                <textarea
                                    placeholder="Our response"
                                    value={translatedtranscript}
                                    rows="5"
                                    cols="40"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
