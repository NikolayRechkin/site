import React from 'react'
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import i18n from '../../i18n';
import './style.css'

export default class Header extends React.Component{
    
    constructor(props, context) {
        super(props, context);
        
        this.onClickContactMe = this.onClickContactMe.bind(this);
    }
    onClickContactMe(){
        jQuery('#menu_contacts').trigger('click');        
    }
    render() {
        let lng = this.props.lng;
        jQuery(document).ready(function(){
            particlesJS.load('canvas', 'js/particle.json', function() {});
        });
        return (
                <div id="header">
                    <div id="canvas"></div>
                    <div className="text">
                        <h1>{i18n.t('header.title_name', { lng })} <br></br> {i18n.t('header.title_position', { lng })}</h1> 
                        <a className="button" onClick={this.onClickContactMe} >{i18n.t('header.contact_me', { lng })}</a>
                    </div>
                    
                </div>
            );
    }
}