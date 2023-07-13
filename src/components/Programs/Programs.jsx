import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
    return (
        <div className="Programs" id="programs">
            <div className="program-header">
                <span className="stroke-text">Explore our</span>
                <span>Programs</span>
                <span className="stroke-text">To shape you</span>
            </div>
            <div className="program-categories">
                {programsData.map((props, index) => (
                    <div className="category" key={index}>
                        {props.image}
                        <span>{props.heading}</span>
                        <span>{props.details}</span>

                        <div className="join-now">
                            Join Now
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Programs;
