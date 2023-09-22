import React from 'react';
import classes from '../pages/Resume.module.css';


function ResumeModule(props) {
    return (
        <figure className={classes.resumeModule}>
            <a href={props.deploy}><img src={props.image} alt={props.alt} /></a>
            <p>{props.desc}</p>
            <a href={props.github} className={classes.githubLink}>Github Repo</a>
        </figure>
    )
}

function ResumeItem() {
    return (
        <>
            <ResumeModule
                deploy='/my-app/public/JoshuaOBrienRS.pdf'
            />
        </>
    );
};

export default ResumeItem;