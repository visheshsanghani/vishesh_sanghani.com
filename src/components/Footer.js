import React from 'react';

export default function Footer(){
    return (
        <div className="footer">
            <p id="downres">To download my resume ,</p>
            <a href="PDF/Vishesh_Sanghani.pdf" download="Vishesh_Sanghani - Resume"><button className="btn"><i className="fa fa-download"></i> Download</button></a>
            <p id="mayank">Please be aware of shitty devolpers like <a href="http://mayankdhania.com/" target="_blank">Mayak </a>.
            <br />
                In case you missed it , this is him. ( <a href="https://www.facebook.com/mayank.dhania?fb_dtsg_ag=AdyoqDX7ZbQw4f8lSjxPi8mg4oke2T61B41UEPQyYusFdA%3AAdzHR4VftNem8lD55796zZpQkx_1n7tpDl83WU5oVYyAIg" target="_blank">
                    Mayank </a>) </p>
        </div>
    );
}