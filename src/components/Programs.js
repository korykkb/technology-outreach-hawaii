import React from "react"

export default function Programs() {
    return (
        <div className="program-container">
             {/*Header Section*/}
            <div className="program-banner">
                <div className="program-banner-text">
                    <div className="program-banner-body">
                        <h2>Programs</h2>
                        <br/>
                        <p>We take on projects that can promote technology education, make resources accessible, and empower our youth to be skilled technology users, creators, and leaders of change. Projects must be manageable for our team of students. No one is ever too old or too young to learn something new!  </p>
                    </div>
                </div>
            </div>

            <div className="special-events">
                <h2>Special Events</h2>
                {/*
                    {% include calendar.html %}
                */}
            </div>

            <div className="special-events">
                <h2>Programs</h2>
            </div>

            <div className="program-card">
                <div className="program-body">
                    <div className="program-image">
                        <img src="/assets/images/program/web_dev.jpg" alt="classNameroom-image"/>
                    </div>
                    <div className="program-text">
                        <h2>ICSpark</h2>
                        <br/>
                        <p>ICSpark is a Registered Independent Organization (RIO) at the University of Hawaii offering free coding classNamees during the spring semester.</p>
                        <br/>
                        <a href="https://icspark.github.io/index.html">Learn More</a>
                        <br/>
                    </div>
                </div>
            </div>  
        </div>
    )
};