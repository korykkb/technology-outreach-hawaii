import React from "react"

export default function Community() {
    return (
        <>
        <div className="resources-container">
            {/* Banner Section */}
            <div className="resources-banner">
                <div className="resources-banner-text">
                    <div className="resources-banner-text-box">
                        <div className="resources-banner-text-box-word">
                            <h2>Community Spotlight</h2>
                            {/*}
                            {% assign communitySL = site.localResources | where:"spotlight", "include" %}
                            */}
                                <h2>{/*
                                {{communitySL[0].title}}
                                */}
                                </h2>
                                <br/>
                                <div className="tags-horizontal">
                                    {/*}
                                    {% for tag in communitySL[0].tags %}
                                    */}
                                    <p className='tags'>
                                        {/*{{tag}}*/}
                                    </p>
                                    {/*}
                                    {% endfor %}
                                    */}
                                </div>
                                <br/>
                                <p id="SLSummary">
                                    {/*
                                    {{communitySL[0].summary}}
                                    */}
                                </p>
                                {/*<a href="{{communitySL[0].url}}" target="blank"/>
                                */}

                        </div>
                    </div>
                </div>
                <br/>
                {/* temporary spacing once submit button as form */}
                <br/>
                <br/>
                <br/>
                <br/>
                {/* Submit Section */}
                {/* <div className="resources-submit">
                    <div className="resources-submit-text">
                        <p>Know of a great resources not listed here?  Want to nominate an organization for our next community spotlight? </p>
                    </div>
                    <br>
                    <div className="resources-submit-button">
                        <button type="button" name="button">Submit a Resource</button>
                    </div>
                </div> */}
            </div>

            {/* Research Section */}
            <div className="resources-box">
                <br/>
                {/*
                {% include communityResearch.html %}
                */}
            </div>
                {/* Online Section */}
                <div className="resources-online">
                    <div className="resources-box">
                        <div className="resources-online-text">
                            <h2>National Resources</h2>
                        </div>
                        <div className="resources-online-bar">
                            {/*
                            <a id="link-basic" style="color: #E4FCFF;">Basic Digital Skills</a>

                            <a 
                            id="link-intermediate">Intermediate</a>
                            <a id="link-hard">Advanced</a>
                            */}
                        </div>
                        <hr/>
                            {/*}
                            {% assign possibleLevels = "basic,intermediate,hard,helpful" | split: ',' %}
                            {% for level in possibleLevels %}
                                {% assign levelResources = site.onlineResources | where:'level', level %}
                                {% assign levelSplit = level | split:' ' %}
                                {% assign id = levelSplit[0] %}
                            */}    
                                <div /*id={{id}}*/ className="resources-online-summary">
                                {/*{% case level %}/*}
                                    {/*{% when "basic" %}*/}
                                        <p className="resources-online-summary-intro">Learning how to use the computer for the first time? This section includes online resources on basic digital skills for the beginner.</p>
                                    {/*{% when "intermediate" %}*/}
                                        <p className="resources-online-summary-intro">Are you familiar with everyday technologies but are interested in learning more? This section includes online resources to explore a variety of tech interests (e.g. coding, intermediate to advanced usage of Excel). </p>
                                    {/*{% when "hard" %}*/}
                                        <p className="resources-online-summary-intro">Are you looking for more in-depth courses or resources to understand the fundamentals of technology? This section includes online resources that dive deeper into the nitty gritty details of technology, research, and interdisciplinary uses. </p>
                                {/*{% endcase %}*/}
                                <br/>
                                {/*{% for resource in levelResources %}*/}
                                    <div className="resources-online-summary-section">  {/*
                                        <a href={{resource.link}} target=“_blank”>{{resource.title}}</a>
                                        <p>{{resource.excerpt}}</p>
                                        <br>
                                        */}
                                    </div>
                                {/*{% endfor %}*/}
                            </div>
                        {/*{% endfor %}*/}
                    </div>
                </div>
        </div>
        <script src="/assets/js/hideOnlineResources.js"></script>
        </>
    )
}