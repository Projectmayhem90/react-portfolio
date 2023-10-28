import React from 'react';
import classes from '../pages/Work.module.css';
import pokedexmin from '../images/pokedexmin.png';
import regexgist from '../images/regexgist.png';
import JATE from '../images/JATE.png';
import SocialAPI from '../images/18.ch18.png';
import Virtuoso from '../images/VirtuosoBandPage.png'
import Steamup from '../images/STEAMUPHOME.png'

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
                desc={`The Pokedex Mini application allows users to search Pokémon dex entries used in the many forms of media created by the Japanese video game company Game Freak. This product used a few industry staples such as an API, JS, HTML.`}
                github='https://github.com/RetroTechCode/Pokedex-Mini'
            />
            <WorkModule
                deploy='https://github.com/Projectmayhem90/regex-gist'
                image={regexgist}
                Name='Regex-gist'
                desc={'Regular expressions, or regex, are a sequence of characters that defines a set of search parameters. They are extremely versatile and customizable, so they are an important tool for any developer to know how to use. This shows my understanding of such items'}
                github='https://github.com/Projectmayhem90/regex-gist/blob/main/regex-gist.md'
            />
            <WorkModule
                deploy='https://pwa-0527.herokuapp.com/'
                image={JATE}
                Name='PWA Text Editor'
                desc={'J.A.T.E. or Just Another Text Editor is simply a text editor with added features. It supports Javascript syntax formatting, allowing you to practice your Javascript coding either within the browser or by installing the app to work offline.'}
                github='https://github.com/Projectmayhem90/progressive-web-applications-text-editor'
            />
             <WorkModule
                deploy='https://drive.google.com/file/d/1AvnS6jmJvypA10Zv3jB4p2c_qxN8r1L3/view'
                image={SocialAPI}
                Name='Social Api Mongo DB'
                desc={'This database stores extra information related to each user, thought, and reaction. For instance, for each user, it keeps track of their friends, friend count, and thoughts. Similarly, for each thought, it stores the user who posted it, the number of reactions it received, and the time it was created.'}
                github='https://github.com/Projectmayhem90/progressive-web-applications-text-editor'
            />
            <WorkModule
                deploy='https://team-6-virtuoso.herokuapp.com/'
                image={Virtuoso}
                Name='Virtuoso'
                desc={'Virtuoso is a business and performance-focused social media platform that works through artist job-listings and crowds size played using Chart.js.'}
                github='https://github.com/RetroTechCode/virtuoso'
            />
            <WorkModule
                deploy='https://t4-steam-up.herokuapp.com/'
                image={Steamup}
                Name='Steamup'
                desc={'Steam-up is a social gaming interactive application that allows users to create a profile, see top games and vote on what theyre most intrested in and the ability to add comments.'}
                github='https://github.com/lutz143/steam-up'
            />
        </>
    );
};

export default WorkItem;