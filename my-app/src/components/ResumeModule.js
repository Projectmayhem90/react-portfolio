import React from 'react';
import classes from './Resume.module.css'; 

function ResumeModule(props) {
    return (
        <div className={classes.container}>
            <a href={props.pdfPath} className={classes.viewResumeLink}>View Resume</a>
        </div>
    );
}

function ResumeItem() {
    return (
        <ResumeModule
            pdfPath="/JoshuaOBrienRS.pdf.pdf"
            name='Resume'
        />
    );
}

export default ResumeItem;
