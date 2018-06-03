import React from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import i18n from './i18n';

import data from './languages/en.json'
import axios from 'axios';

import Menu from './components/Menu'
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import Contacts from './components/Contacts'
import Footer from './components/Footer'



class App extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
          lng: 'ru'
        }
        this.onLanguageChanged = this.onLanguageChanged.bind(this)
      }

    componentWillMount() {
      this.setLanguage('en');
    }
    componentDidMount() {
        i18n.on('languageChanged', this.onLanguageChanged)
    }

    componentWillUnmount() {
        i18n.off('languageChanged', this.onLanguageChanged)
    }

    onLanguageChanged(lng) {
        this.setState({
          lng: lng
        })
    }
    setLanguage(language) {
        console.log(language)
        
    }
    render() {
        let  lng = this.state.lng;
        var isRu= lng === "ru" ? "block" : "none";
        var isEN= lng === "en" ? "block" : "none";
        return (
            <div>
                <div>{i18n.t('menu.home', { lng })}</div>
                <div className="langs">
                   <div className="ru" style={{display : isRu}} onClick={this.onLanguageChanged.bind(this, 'en')}></div>
                   <div className="en" style={{display : isEN}} onClick={this.onLanguageChanged.bind(this, 'ru')}></div>
                </div>
                <Menu lng={lng}/>
                <Header lng={lng}/>
                <About lng={lng}/>
                <Work lng={lng}/>
                <Contacts lng={lng}/>
                <Footer lng={lng}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
