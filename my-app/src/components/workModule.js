import React from 'react';
import classes from '../pages/Work.module.css';
import pokedexmin from '../images/pokedexmin.png';
import regexgist from '../images/regexgist.png';
import JATE from '../images/JATE.png';

function WorkModule(props) {
    return (
        <figure className={classes.workModule}>
            <a href={props.deploy}><img src={props.image} alt={props.alt} /></a>
            <p>{props.desc}</p>
            <a href={props.github} className={classes.githubLink}>Github Repo</a>
        </figure>
    )
}

function WorkItem() {
    return (
        <>
            <WorkModule
                deploy='https://retrotechcode.github.io/Pokedex-Mini'
                image={pokedexmin}
                Name='Pokedex Mini'
                desc={`Text`}
                github='https://github.com/RetroTechCode/Pokedex-Mini'
            />
            <WorkModule
                deploy='https://github.com/Projectmayhem90/regex-gist'
                image={regexgist}
                Name='Regex-gist'
                desc={'text'}
                github='https://github.com/Projectmayhem90/regex-gist/blob/main/regex-gist.md'
            />
            <WorkModule
                deploy='https://pwa-0527.herokuapp.com/'
                image={JATE}
                Name='PWA Text Editor'
                desc={'text'}
                github='https://github.com/Projectmayhem90/progressive-web-applications-text-editor'
            />
        </>
    );
};

export default WorkItem;