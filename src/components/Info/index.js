//This is for the contact me page

import React from "react";
import "./style.css"

function Info() {
    return (
        <section id="index">
            <h2>About Me</h2>
            <hr class="line" />
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-12">
                        <div class="card-body">
                            <img src="../../assets/Husband.png" alt="Matt Duffield Picture" class="me" />
                            <p class="about-me">I'm Matt Duffield, a 30 year old living in Grand Rapids, MI. I
                                grew in Caledonia, Michigan and attended Grand
                                Valley State University for 2
                                years with the hope of obtaining a photography degree, but I dropped out before
                                completing my degree.
                                I am happily married to an amazing women. We met in 2016 and have been together
                                ever since.
                                <br />
                                <br />
                                I am an applications engineer for Iscar Metals. I provide tools to
                                help increase productivity in manufacturing settings. I started this job in
                                January, 2020. Covid-19 has made this job extremely difficult, since I have to
                                travel to different shops around the Grand Rapids area. Many facilities have
                                limited their outside visitors to try and mitigate the risks of the virus. This
                                is when I decided to learn how to become a full stack developer.
                                <br />
                                <br />
                                Currently, I am enrolled in a MSU programming bootcamp. When this course is
                                over, I will be looking for a career to utilize my newly developed skills. So
                                far, we have covered HTML, CSS, Javascript, Jquery, and Node.js. In the coming
                                months, I will also learn SQL and React.
                                <br />
                                <br />

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Info;
