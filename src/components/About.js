import React from "react"
import Teams from "./other_components/Teams"
import members from "../data/members"

export default function About() {
    const teams = members.map(item => {
        return (
            <Teams
                {...item}
            />
        )
    })

    return (
        <div class="about-container">
            {/* ABOUT SECTION */}
            <div class="banner-box">
                <div class="about">
                    <div class="about-img">
                    </div>
                    <div class="about-text">
                        <h2>ABOUT US</h2>
                        <p>Technology Outreach Hawaii (TORCH) began in December 2020 to encourage technology education and access across the islands of Hawaii. Our founding members believe that technology is an essential part of our everyday lives, our professional endeavors, and our future. </p>
                        <br/>
                        <p>Each day a child is born farther in time from the ideas that inspired the creation of the computer and the construction of the physical underpinnings of the Internet. To use and advance technology to address complex world issues, we must pass the torch. </p>
                    </div>
                </div>
            </div>

            <div class="wave">

            </div>

            {/* TEAM SECTION */}
            <div>
                {teams}
            </div>
        </div>
    )   
};