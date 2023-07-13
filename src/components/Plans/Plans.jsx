import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
    return (
        <div className="plans-container" id="plans">
            <div className="blur plan-blur_1"></div>
            <div className="blur plan-blur_2"></div>
            <div className="program-header" style={{ gap: "2rem" }}>
                <span className="stroke-text">Ready to Start</span>
                <span>Your Journey</span>
                <span className="stroke-text">now withus</span>
            </div>
            <div className="plans">
                {plansData.map((props) => (
                    <div className="plan" key={props.name}>
                        {props.icon}
                        <span>{props.name}</span>
                        <span>$ {props.price}</span>
                        <div className="features">
                            {props.features.map((feature1, index) => (
                                <div
                                    className="feature"
                                    key={index}
                                    style={{ lineHeight: "1.5rem" }}
                                >
                                    <img src={whiteTick} alt="" />
                                    <span>{feature1}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefits {"->"}</span>
                        </div>
                        <button className="btn">Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plans;
