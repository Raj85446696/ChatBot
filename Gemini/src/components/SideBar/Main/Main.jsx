import React, { useContext } from "react";
import "./Main.css";
import {
  FaRegCompass,
  FaLightbulb,
  FaRocketchat,
  FaCode,
  FaMicrophone,
  FaRegUserCircle,
} from "react-icons/fa";
import { WiStars } from "react-icons/wi";
import { GrGallery } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { Context } from "../../../config/context";

function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <div className="nav-right">
          <p>
            <WiStars size={30} /> try Gemini Advanced{" "}
          </p>
          {/* <img src="https://avatar.iran.liara.run/public" alt="avtar"/> */}
        </div>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello , Ritu Raj Verma</span>
              </p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful place to see on upcoming Trip. </p>
                <span>
                  <FaRegCompass />
                </span>
              </div>
              <div className="card">
                <p>Suggest beautiful place to see on upcoming Trip. </p>
                <span>
                  <FaLightbulb />
                </span>
              </div>
              <div className="card">
                <p>Suggest beautiful place to see on upcoming Trip. </p>
                <span>
                  <FaRocketchat />
                </span>
              </div>
              <div className="card">
                <p>Suggest beautiful place to see on upcoming Trip. </p>
                <span>
                  <FaCode />
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <span>
                <FaRegUserCircle />
              </span>
              <p>{recentPrompt}</p>
            </div>
            <div class="result-data">
              <span>
                <WiStars size={30} />
              </span>
              {loading ? (
                <div className="loader">
                    <hr/>
                    <hr/>
                    <hr/>
                </div>
              ) : (
                <p dangerouslySetInnerHtml={{ __html: resultData }}>
                  {resultData}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search for anything"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div>
              <span>
                <GrGallery size={25} />
              </span>
              <span>
                <FaMicrophone size={25} />
              </span>
              <span>
                <IoSend size={25} onClick={() => onSent()} />
              </span>
            </div>
          </div>
          <p className="bottom-info">Gemini may inaccurate info . </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
