import React from "react";
import pic1 from "../../images/pic1.jpg"
import '../../styles/content.css'
import { IoClose } from "react-icons/io5";
import Constants from '../../constants'

const Hobbies = ({ setCurrent }) => {
    return (

        <div className="content-container c1">
            <div className="content-titleContainer">
                <div style={{ fontSize: "8vh", lineHeight: "7vh" }} className="content-text title">{"H\nO\nB\nB\nI\nE\nS"}</div>
                <div className="content-text mini">updated {Constants.updated}</div>
            </div>
            <div className="content-textContainer">
                <div className="content-text subject">
                    {"Cooking\n"}
                </div>
                <div className="content-line"></div>
                <div className="content-text body2">
                    {"uh"}
                </div>
                <div className="content-text subject">
                    {"Reading\n"}
                </div>
                <div className="content-line"></div>
                <div className="content-text body2">
                    {"hm"}
                </div>
                <div className="content-text subject">
                    {"Bouldering\n"}
                </div>
                <div className="content-line"></div>
                <div className="content-text body2">
                    {"hm"}
                </div>
            </div>
            <div className="content-image-pic1-container">
                <img className="content-image-pic1" src={pic1} alt="garden"></img>
            </div>
            <IoClose onClick={() => { setCurrent(0); }} size={'2vw'} className="content-close" />
        </div >
    )
}

export default Hobbies;