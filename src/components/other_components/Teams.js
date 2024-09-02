import React from "react"

export default function Teams(props) {
    return (
        <div className="background">
            <div className="team-box">
                <div className="team-display">
                    <div className="team-display-head">
                        <h2>Our Leadership</h2>
                        {/* <p>Our members share a passion for technology and social change in their professional and academic endeavors.  </p>
                        <br>
                        <div className="team-display-nav">
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
                        <div className="team-display-role" /*id={{id}}*/>
                            {/* <h2> {{ role }} </h2> */}
                        </div>
                        <div className="team-display-row">
                            {/*}
                            {% for member in site.data.members offset: offset %}
                            {% if member[1].role != role %}
                                {% break %}
                            {% endif %}
                            {% assign offset = offset | plus: 1 %}
                            */}
                            <div className="team-display-all">
                                <div className="team-display-all-img">
                                    <img src={`....assets/images/profiles/${props.profileImg}`} alt="TORCH-profile-image"/>
                                </div>
                                <div className="team-display-all-text">
                                    <h3>{props.fullName}</h3>
                                    <p>{props.title}</p>
                                    {/*}
                                    <h3>{{ member[1].full_name }}</h3>
                                    <p style="font-style: italic;">{{ member[1].title }}</p>
                                    */}
                                </div>
                                {/* ICONS */}
                                <div className="team-display-all-icon">
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
                <div className="advisory">
                    <h2>Advisory Board</h2>
                    {/*
                    {% for member in site.data.members %}
                    */}
                        {/*
                        {% if member[1].role == "Advisors" %}
                        */}
                        <div className="profile">
                            <img src="{{ member[1].profile }}" alt=""/>
                            <div className="profile-text">
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
    )
};