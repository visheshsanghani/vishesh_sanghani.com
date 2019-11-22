import React from 'react';

import '../styles-sheet/SkillSet-JQuery.js';

export default function SkillSet() {
    return (
        <div id="container-out">
            <div className="container-skill">
                <p id="skill-title">My Skills</p>
                {/* First-Bar */}
                <div className="progress-bar" data-percentage="90%">
                    <h4 className="progress-title-holder">
                        <span className="progress-title">HTML(5)</span>
                        <span className="progress-number-wrapper">
                            <span className="progress-number-mark">
                                <span className="percent"></span>
                                <span className="down-arrow"></span>
                            </span>
                        </span>
                    </h4>
                    <div className="progress-content-outter">
                        <div className="progress-content"></div>
                    </div>
                </div>
                {/* Second - Bar */}
                <div className="progress-bar" data-percentage="75%">
                    <h4 className="progress-title-holder clearfix">
                        <span className="progress-title">CSS(3)</span>
                        <span className="progress-number-wrapper">
                            <span className="progress-number-mark">
                                <span className="percent"></span>
                                <span className="down-arrow"></span>
                            </span>
                        </span>
                    </h4>
                    <div className="progress-content-outter">
                        <div className="progress-content"></div>
                    </div>
                </div>
                {/* Third - Bar */}
                <div className="progress-bar" data-percentage="75%">
                    <h4 className="progress-title-holder">
                        <span className="progress-title">Bootstrap Framework</span>
                        <span className="progress-number-wrapper">
                            <span className="progress-number-mark">
                                <span className="percent"></span>
                                <span className="down-arrow"></span>
                            </span>
                        </span>
                    </h4>
                    <div className="progress-content-outter">
                        <div className="progress-content"></div>
                    </div>
                </div>
                <div className="progress-bar" data-percentage="75%">
                    <h4 className="progress-title-holder">
                        <span className="progress-title">Javascript</span>
                        <span className="progress-number-wrapper">
                            <span className="progress-number-mark">
                                <span className="percent"></span>
                                <span className="down-arrow"></span>
                            </span>
                        </span>
                    </h4>
                    <div className="progress-content-outter">
                        <div className="progress-content"></div>
                    </div>
                </div>
                <div className="progress-bar" data-percentage="85%">
                    <h4 className="progress-title-holder">
                        <span className="progress-title">React.js</span>
                        <span className="progress-number-wrapper">
                            <span className="progress-number-mark">
                                <span className="percent"></span>
                                <span className="down-arrow"></span>
                            </span>
                        </span>
                    </h4>
                    <div className="progress-content-outter">
                        <div className="progress-content"></div>
                    </div>
                </div>
                <div className="progress-bar" data-percentage="55%">
                    <h4 className="progress-title-holder">
                        <span className="progress-title">Node.js</span>
                        <span className="progress-number-wrapper">
                            <span className="progress-number-mark">
                                <span className="percent"></span>
                                <span className="down-arrow"></span>
                            </span>
                        </span>
                    </h4>
                    <div className="progress-content-outter">
                        <div className="progress-content"></div>
                    </div>
                </div>
                <div className="progress-bar" data-percentage="80%">
                    <h4 className="progress-title-holder">
                        <span className="progress-title">Redux and other React helper libraries</span>
                        <span className="progress-number-wrapper">
                            <span className="progress-number-mark">
                                <span className="percent"></span>
                                <span className="down-arrow"></span>
                            </span>
                        </span>
                    </h4>
                    <div className="progress-content-outter">
                        <div className="progress-content"></div>
                    </div>
                </div>
                <div className="progress-bar" data-percentage="85%">
                    <h4 className="progress-title-holder">
                        <span className="progress-title">PhotoShop</span>
                        <span className="progress-number-wrapper">
                            <span className="progress-number-mark">
                                <span className="percent"></span>
                                <span className="down-arrow"></span>
                            </span>
                        </span>
                    </h4>
                    <div className="progress-content-outter">
                        <div className="progress-content"></div>
                    </div>
                </div>
                <div className="progress-bar" data-percentage="100%">
                    <h4 className="progress-title-holder">
                        <span className="progress-title">Manchester United Fan</span>
                        <span className="progress-number-wrapper">
                            <span className="progress-number-mark">
                                <span className="percent"></span>
                                <span className="down-arrow"></span>
                            </span>
                        </span>
                    </h4>
                    <div className="progress-content-outter">
                        <div className="progress-content"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}