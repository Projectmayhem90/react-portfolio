import React from 'react';
import classes from '../pages/Resume.module.css';

function ResumeModule(props) {
    return (
        <figure className={classes.resumeModule}>
        </figure>
    )
}

function ResumeItem() {
    return (
        <>
            <ResumeModule
                pdfPath="/JoshuaOBrienRS.pdf"
                name='Resume'
            />
        </>
    );
};

export default ResumeItem;
