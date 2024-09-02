import React from "react"
import Teams from "./other_components/Teams"
import members from "../data/members"

export default function About() {
    const teams = members.map(item => {
        return (
            <Teams
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div className="about-container">
            {/* ABOUT SECTION */}
            <div className="banner-box">
                <div className="about">
                    <div className="about-img">
                    </div>
                    <div className="about-text">
                        <h2>ABOUT US</h2>
                        <p>Technology Outreach Hawaii (TORCH) began in December 2020 to encourage technology education and access across the islands of Hawaii. Our founding members believe that technology is an essential part of our everyday lives, our professional endeavors, and our future. </p>
                        <br/>
                        <p>Each day a child is born farther in time from the ideas that inspired the creation of the computer and the construction of the physical underpinnings of the Internet. To use and advance technology to address complex world issues, we must pass the torch. </p>
                    </div>
                </div>
            </div>

            <div className="wave">

            </div>

            {/* TEAM SECTION */}
            <div>
                {teams}
            </div>
        </div>
    )   
};