import React from 'react'
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import i18n from '../../i18n';
import './style.css';
import UserForm from '../UserForm'

export default class Contacts extends React.Component{
    
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let lng = this.props.lng;
        
        return (
                <div id="contacts">
                <h2 className="sectionTitle">{i18n.t('contacts.title', { lng })}</h2>
                <div className="contacts flex">
                    <div className="links">
                        <ul>
                            <li className="item">
                                <p className="subtitle">{i18n.t('contacts.email', { lng })}</p><a href="mailto:nikolaynikcher@gmail.com" className="link">nikolaynikcher@gmail.com</a>
                            </li>
                            <li className="item">
                                <p className="subtitle">{i18n.t('contacts.phone', { lng })}</p><a href="tel:+79127105191" className="link">+7 (912) 710 5191</a>
                            </li>
                            <li className="item">
                                <p className="subtitle">{i18n.t('contacts.social', { lng })}</p>
                                <ul className="social">
                                    <li className="social__item"><a href="https://vk.com/id120790426" target="_blank" className="social__link"><i aria-hidden="true" className="fa fa-vk"></i></a></li>
                                    <li className="social__item"><a href="https://github.com/NikolayRechkin" target="_blank" className="social__link"><i aria-hidden="true" className="fa fab fa-github"></i></a></li>
                                   
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="form">
                        <UserForm name="" email="" mess="" lng={lng}/>
                    </div>
                </div>
            </div>
        );
    }
}