import React from 'react'
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import i18n from '../../i18n';
import './style.css'
import Skill from '../Skill'

export default class About extends React.Component{
    
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let lng = this.props.lng;
        
        return (
                <div id="about">
                    <h2 className="sectionTitle">{i18n.t('about.title', { lng })}</h2>
                    <div className="column">
                      
                       <div>
                            <p>{i18n.t('about.text_from', { lng })}</p>
                            <p>{i18n.t('about.text_work', { lng })}</p>
                            <p>{i18n.t('about.text_about', { lng })}</p>
                       </div>
                       <Skill lng = {lng}/>
                    </div>
                </div>
            );
    }
}