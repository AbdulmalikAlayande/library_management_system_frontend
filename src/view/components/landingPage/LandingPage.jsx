import React from "react";
import bookIcon from "../../../assets/images/svg/bookIcon.svg"
import "../../../styles/components/landingPage/LandingPage.css"
import Lottie, {useLottie} from "lottie-react";
import bookLover from "../../../assets/lotties/bookLover.json"
import {defaultOptions} from "yaml";

const LandingPage = () => {

    return (
        <div className="Main-Frame">
            <div className="Nav-Bar-Frame">
                <div className="Logo">
                    <div className="Logo-Frame">
                        <img src={bookIcon} alt="Books"/>
                    </div>
                    <div className="Logo-Name-Frame">
                        <p>REACHH</p>
                    </div>
                    <div className="Info-Frame">
                        <ul className="link-bars">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="">CONTACT US</a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="">ABOUT US</a></li>
                        </ul>
                    </div>
                    <div className="auth-buttons">
                        <div>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" ><button id="header-signUp">Sign up</button></a>
                        </div>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <div>
                            <a href="#" ><button id="header-signIn">Sign in</button></a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="Activity-Frame">
                <div className="word-frame">
                    <h1>Open the Door to a Universe of Knowledge</h1>
                    <p>Where Reading Brings Dreams to Life"</p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" ><button id="author-register">Register as a Contributing Author</button></a>
                </div>
                <div className="Lottie-frame">
                    <Lottie className="Lottie-image" animationData={bookLover} options={defaultOptions} height={400}
                            width={500}/>
                </div>
            </div>
            <div className="End-Frame"></div>
        </div>
    )
}
export default LandingPage
