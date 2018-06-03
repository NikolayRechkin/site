import React from 'react'
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import i18n from '../../i18n';
import './style.css';

export default class Footer extends React.Component{
    
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let lng = this.props.lng;
        let year = new Date().getFullYear();
        return (
            <footer>
                <p className="footer_text">{i18n.t('footer.text', { lng })} {year}</p>
            </footer>
        );
    }
}