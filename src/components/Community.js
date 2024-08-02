import React from "react"

export default function Community() {
    return (
        <>
        <div class="resources-container">
            {/* Banner Section */}
            <div class="resources-banner">
                <div class="resources-banner-text">
                    <div class="resources-banner-text-box">
                        <div class="resources-banner-text-box-word">
                            <h2>Community Spotlight</h2>
                            {/*}
                            {% assign communitySL = site.localResources | where:"spotlight", "include" %}
                            */}
                                <h2>{/*
                                {{communitySL[0].title}}
                                */}
                                </h2>
                                <br/>
                                <div class="tags-horizontal">
                                    {/*}
                                    {% for tag in communitySL[0].tags %}
                                    */}
                                    <p class='tags'>
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
                                <a href="{{communitySL[0].url}}" target="blank"/>

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
                {/* <div class="resources-submit">
                    <div class="resources-submit-text">
                        <p>Know of a great resources not listed here?  Want to nominate an organization for our next community spotlight? </p>
                    </div>
                    <br>
                    <div class="resources-submit-button">
                        <button type="button" name="button">Submit a Resource</button>
                    </div>
                </div> */}
            </div>

            {/* Research Section */}
            <div class="resources-box">
                <br/>
                {/*
                {% include communityResearch.html %}
                */}
            </div>
                {/* Online Section */}
                <div class="resources-online">
                    <div class="resources-box">
                        <div class="resources-online-text">
                            <h2>National Resources</h2>
                        </div>
                        <div class="resources-online-bar">
                            <a id="link-basic" style="color: #E4FCFF;">Basic Digital Skills</a>
                            <a id="link-intermediate">Intermediate</a>
                            <a id="link-hard">Advanced</a>
                        </div>
                        <hr/>
                            {/*}
                            {% assign possibleLevels = "basic,intermediate,hard,helpful" | split: ',' %}
                            {% for level in possibleLevels %}
                                {% assign levelResources = site.onlineResources | where:'level', level %}
                                {% assign levelSplit = level | split:' ' %}
                                {% assign id = levelSplit[0] %}
                            */}    
                                <div /*id={{id}}*/ class="resources-online-summary">
                                {/*{% case level %}/*}
                                    {/*{% when "basic" %}*/}
                                        <p class="resources-online-summary-intro">Learning how to use the computer for the first time? This section includes online resources on basic digital skills for the beginner.</p>
                                    {/*{% when "intermediate" %}*/}
                                        <p class="resources-online-summary-intro">Are you familiar with everyday technologies but are interested in learning more? This section includes online resources to explore a variety of tech interests (e.g. coding, intermediate to advanced usage of Excel). </p>
                                    {/*{% when "hard" %}*/}
                                        <p class="resources-online-summary-intro">Are you looking for more in-depth courses or resources to understand the fundamentals of technology? This section includes online resources that dive deeper into the nitty gritty details of technology, research, and interdisciplinary uses. </p>
                                {/*{% endcase %}*/}
                                <br/>
                                {/*{% for resource in levelResources %}*/}
                                    <div class="resources-online-summary-section">  {/*
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