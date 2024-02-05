// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;
require('dotenv').config();

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
// Creates a client
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.projectId
});

 const text = 'The text to translate, e.g. Hello, world!';
 const target = 'ru';

const translateText= async(text) => {
try{
  let [translations] = await translate.translate(text, 'en');
  return translations;

}catch(error){
    console.log('Error at translateText --> ${error}');
    return 0;
}

}

export default translateText();