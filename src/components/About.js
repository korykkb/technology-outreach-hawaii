import React from "react"

export default function About() {
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
            <div class="background">
                <div class="team-box">
                    <div class="team-display">
                        <div class="team-display-head">
                            <h2>Our Leadership</h2>
                            {/* <p>Our members share a passion for technology and social change in their professional and academic endeavors.  </p>
                            <br>
                            <div class="team-display-nav">
                                <a href="#Directors">Directors</a>
                                <a href="#Creative">Creative Media Team</a>
                                <a href="#Volunteers">Volunteers</a>
                            </div> */}
                        </div>
                        {/*}
                        {% assign offset = 0 %}
                        {% assign possibleRoles = "Directors" | split: ',' %}
                        {% for role in possibleRoles %}
                            {% assign roleSplit = role | split:' ' %}
                            {% assign id = roleSplit[0] %}
                            */}
                            <div class="team-display-role" /*id={{id}}*/>
                                {/* <h2> {{ role }} </h2> */}
                            </div>
                            <div class="team-display-row">
                                {/*}
                                {% for member in site.data.members offset: offset %}
                                {% if member[1].role != role %}
                                    {% break %}
                                {% endif %}
                                {% assign offset = offset | plus: 1 %}
                                */}
                                <div class="team-display-all">
                                    <div class="team-display-all-img">
                                        <img src="{{ member[1].profile }}" alt="TORCH-profile-image"/>
                                    </div>
                                    <div class="team-display-all-text">
                                        {/*}
                                        <h3>{{ member[1].full_name }}</h3>
                                        <p style="font-style: italic;">{{ member[1].title }}</p>
                                        */}
                                    </div>
                                    {/* ICONS */}
                                    <div class="team-display-all-icon">
                                    {/*
                                    {% if member[1].github != NULL %}
                                    */}
                                        <a href="{{ member[1].github }}">
                                        <img src="/assets/images/logo/github-white.png" alt="github-logo"/>
                                        </a>
                                    {/*
                                    {% endif %}
                                    */}
                                    {/*
                                    {% if member[1].linkedin != NULL %}
                                    */}
                                        <a href="{{ member[1].linkedin }}">
                                        <img src="/assets/images/logo/in-white.png" alt="linkedin-logo"/>
                                        </a>
                                    {/*
                                    {% endif %}
                                    */}
                                    </div>
                                    {/* END ICONS */}
                                </div>
                                {/*
                                {% endfor %}
                                */}
                            </div>
                            {/*
                            {% endfor %}
                            */}
                        </div>
                    </div>
                    <div class="advisory">
                        <h2>Advisory Board</h2>
                        {/*
                        {% for member in site.data.members %}
                        */}
                            {/*
                            {% if member[1].role == "Advisors" %}
                            */}
                            <div class="profile">
                                <img src="{{ member[1].profile }}" alt=""/>
                                <div class="profile-text">
                                    {/*}
                                    <h3>{{ member[1].full_name }}</h3>
                                    <br/>
                                    <p>{{ member[1].bio }}</p>
                                    */}
                                </div>
                            </div>
                            {/*
                            {% endif %}  
                        {% endfor %}
                        */}
                    </div>
                    {/*
                    {% include sponsor.html %}
                    */}
                </div>
            </div>
    )
};