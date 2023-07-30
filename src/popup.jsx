import React from "react";
import {render} from "react-dom";
import './styles/popup.css';

function Popup(){
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
          <button id="translate-button">Translate</button>
        </div>
      </div>
      <div>
        <div className="inline2">
          <form>
            <textarea
              name=""
              id="input-text"
              cols="30"
              rows="10"
              placeholder="Enter text..."
              className="text-area"
            ></textarea>
          </form>
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