import './styles/popup.css';
import * as dotenv from 'dotenv';
import React, { useState, useEffect } from "react";
import {render} from "react-dom";
const {Translate} = require('@google-cloud/translate').v2

function Popup(){
  const [ inputText, setInputText ] = useState('');

  

  const translateText = async (text, target) => {
    dotenv.config()
    const GOOGLE_APPLICATION_CREDENTIALS = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);
    const PROJECT_ID = JSON.parse(process.env.PROJECT_ID);
    // Translates the text into the target language. "text" can be a string for
    // translating a single piece of text, or an array of strings for translating
    // multiple texts.
    const translate = new Translate({
      credentials: GOOGLE_APPLICATION_CREDENTIALS,
      projectId: PROJECT_ID
    });
  
    let [translations] = await translate.translate(text, target);
    translations = Array.isArray(translations) ? translations : [translations];
    console.log('Translations:');
    translations.forEach((translation, i) => {
      console.log(`${text[i]} => (${target}) ${translation}`);
    });
  }

  const handleTranslate = () => {
    // make api call

    const text = 'Hello, world!';
    const target = 'ru';

    translateText(text, target);
    
    // useEffect(() => {
    // }, [])
    
    // pass inputText

    // receive translated text

    // display on output text-area
  }

  const handleChange = (e) => {
    const txt = e.target.value;
    setInputText(txt);
    // console.log(inputText);
  }


  return (
    <>
    <div id="bkgnd">
      <div id="first-row">
        <div className="inline1">
          <img src="/images/ukFlag.png" alt="British English" id="flag-from" />
        </div>
        <div className="inline1">
          <p id="language-from">English</p>
        </div>
        <div className="inline1">
          <img src="images/arrow.png" alt="arrow" id="arrow" />
        </div>
        <div className="inline1">
          <img src="images/chinaFlag.png" alt="Chinese" id="flag-to" />
        </div>
        <div className="inline1">
          <p id="language-to">Chinese</p>
        </div>
        <div className="inline1">
          <button id="translate-button" 
          onClick={handleTranslate}
          >
            Translate</button>
        </div>
      </div>
      <div>
        <div className="inline2">
          <textarea
            id="input-text"
            cols="30"
            rows="10"
            placeholder="Enter text..."
            className="text-area"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="inline2">
          <textarea
            name=""
            id="output-text"
            cols="30"
            rows="10"
            className="text-area"
          ></textarea>
        </div>
      </div>
      <div>
        <hr id="hr-line" />
      </div>
      <div>
        <button id="trans-cur-btn">Translate Current Page</button>
      </div>
    </div>
  </>
  )
}

render(<Popup />, document.getElementById("react-target"));