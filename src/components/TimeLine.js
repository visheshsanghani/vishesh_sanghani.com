import React from 'react';

import '../styles-sheet/timeline.css';

export default function TimeLine() {
    return (
        // Timeline LINK --> https://bootsnipp.com/snippets/k7KxQ 

        <div className="container-time">
            <header className="page-header" >
                <h1 style={{margin: "0px"}}>Zindagi ka saafar</h1>
            </header>

            <ul className="timeline">
                <li><div className="tldate">Apr 2014</div></li>

                <li>
                    <div className="tl-circ"></div>
                    <div className="timeline-panel">
                        <div className="tl-heading">
                            <h4>Surprising Headline Right Here</h4>
                            <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 3 hours ago</small></p>
                        </div>
                        <div className="tl-body">
                            <p>Lorem Ipsum and such.</p>
                        </div>
                    </div>
                </li>

                <li className="timeline-inverted">
                    <div className="tl-circ"></div>
                    <div className="timeline-panel">
                        <div className="tl-heading">
                            <h4>Breaking into Spring!</h4>
                            <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 4/07/2014</small></p>
                        </div>
                        <div className="tl-body">
                            <p>Hope the weather gets a bit nicer...</p>

                            <p>Y'know, with more sunlight.</p>
                        </div>
                    </div>
                </li>

                <li><div className="tldate">Mar 2014</div></li>

                <li>
                    <div className="tl-circ"></div>
                    <div className="timeline-panel">
                        <div className="tl-heading">
                            <h4>New Apple Device Release Date</h4>
                            <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 3/22/2014</small></p>
                        </div>
                        <div className="tl-body">
                            <p>In memory of Steve Jobs.</p>
                        </div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-panel">
                        <div className="tl-heading">
                            <h4>No icon here</h4>
                            <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 3/16/2014</small></p>
                        </div>
                        <div className="tl-body">
                            <p>Here you'll find some beautiful photography for your viewing pleasure, courtesy of .</p>

                            <p><img src="http://lorempixel.com/600/300/nightlife/" alt="lorem pixel" /></p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="tl-circ"></div>
                    <div className="timeline-panel">
                        <div className="tl-heading">
                            <h4>Some Important Date!</h4>
                            <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 3/03/2014</small></p>
                        </div>
                        <div className="tl-body">
                            <p>Write up a quick summary of the event.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="timeline-panel noarrow">
                        <div className="tl-heading">
                            <h4>Secondary Timeline Box</h4>
                            <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 3/01/2014</small></p>
                        </div>
                        <div className="tl-body">
                            <p>This might be a follow-up post with related info. Maybe we include some extra links, tweets, user comments, photos, etc.</p>
                        </div>
                    </div>
                </li>

                <li><div className="tldate">Feb 2014</div></li>

                <li className="timeline-inverted">
                    <div className="tl-circ"></div>
                    <div className="timeline-panel">
                        <div className="tl-heading">
                            <h4>The Winter Months</h4>
                            <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 02/23/2014</small></p>
                        </div>
                        <div className="tl-body">
                            <p>Gee time really flies when you're having fun.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="tl-circ"></div>
                    <div className="timeline-panel">
                        <div className="tl-heading">
                            <h4>Yeah we're pretty much done here</h4>
                            <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 02/11/2014</small></p>
                        </div>
                        <div className="tl-body">
                            <p>Wasn't this fun though?</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}