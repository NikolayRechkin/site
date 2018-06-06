import React from 'react'
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import i18n from '../../i18n';
import skill_data from '../../skills.json'
import './style.css'

export default class Skill extends React.Component{
    
    constructor(props, context) {
        super(props, context);
        
        
    }
    
    render() {
        let lng = this.props.lng;
        let skillsElems = skill_data.skills.map((item, i) => {
                return <div className="skill"><img src={ item.img }></img><h3>{ item.title }</h3></div>
        });

        return (
                <div className="skills">
                    <h4>{i18n.t('about.skills.title', { lng })}</h4>
                    {skillsElems}
                </div>
            );

    }
}