import React from 'react'
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import i18n from '../../i18n';
import './style.css';

export default class UserForm extends React.Component {
      constructor(props) {
        super(props);
        var lng = props.lng;
        var name = props.name;
        var nameIsValid = this.validateName(name);
        var email = props.email;
        var mess = props.mess;
        var emailIsValid = this.validateEmail(email);
        this.state = {
            name: name, 
            email: email, 
            mess: mess, 
            nameValid: nameIsValid, 
            emailValid: emailIsValid,

            isNameError:false,
            isEmailError: false,

            isNameLabelActive: false,
            isEmailLabelActive: false,
            isMessLabelActive: false,

            isNameFocus: false,
            isEmailFocus: false,
            isMessFocus: false,

            isSuccessSent: false
        };
   
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onMessChange = this.onMessChange.bind(this);

        this.onSetFocusName = this.onSetFocusName.bind(this);
        this.onSetFocusEmail = this.onSetFocusEmail.bind(this);
        this.onSetFocusMessage = this.onSetFocusMessage.bind(this);

        this.onRemoveFocusName= this.onRemoveFocusName.bind(this);
        this.onRemoveFocusEmail= this.onRemoveFocusEmail.bind(this);
        this.onRemoveFocusMess= this.onRemoveFocusMess.bind(this);
       
      }

        validateEmail(email){

            if(email){
                this.setState({isEmailLabelActive:true});
            }else{
                this.setState({isEmailLabelActive:false});
            }

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            return pattern.test(email);
        }
        validateName(name){
            if(name){
                this.setState({isNameLabelActive:true});
            }else{
                this.setState({isNameLabelActive:false});
            }
            return name.length>2;
        }
        onEmailChange(e) {
            var val = e.target.value;
            var valid = this.validateEmail(val);
            if(valid){
                this.setState({isEmailError:false});

            }
            this.setState({email: val, emailValid: valid});
        }
        onNameChange(e) {
            var val = e.target.value;
            var valid = this.validateName(val);
            if(valid){
                this.setState({isNameError:false});
            }
            this.setState({name: val, nameValid: valid});
        }
        onMessChange(e) {
            var val = e.target.value;
            if(val){
                this.setState({isMessLabelActive:true});
            }else{
                this.setState({isMessLabelActive:false});
            }
            this.setState({mess: val});
        }
        onSetFocusName(e) {
            this.setState({isNameFocus: true,isEmailFocus: false, isMessFocus: false});
        }
        onSetFocusEmail(e) {
            this.setState({isNameFocus: false,isEmailFocus: true, isMessFocus: false});
        }
        onSetFocusMessage(e) {
            this.setState({isNameFocus: false,isEmailFocus: false, isMessFocus: true});
        }

        onRemoveFocusName(e) {
            this.setState({isNameFocus: false});
        }
        onRemoveFocusEmail(e) {
            this.setState({isEmailFocus: false});
        }
        onRemoveFocusMess(e) {
            this.setState({isMessFocus: false});
        }

        async handleSubmit(e) {
            e.preventDefault();
            if(!this.state.isSuccessSent){
                let lng = this.props.lng;
                let errorName = i18n.t('contacts.nameError', { lng });
                let errorEmail = i18n.t('contacts.emailError', { lng });
                let _this = this;
                if(this.state.nameValid !=true){
                   this.setState({isNameError: true, nameError: errorName});
                }else if(this.state.emailValid !=true){
                   this.setState({isEmailError: true,emailError: errorEmail});
                }else{
                    const { name, email, mess } = this.state;
                    console.log(name, email, mess)
                    try {
                       await axios.post('/sentemail', { name, email, mess })
                          .then(function (response) {
                            if(response.status == 200){
                                _this.setState({isSuccessSent: true});
                            }
                            console.log(response);
                          })
                          .catch(function (error) {
                            console.log(error);
                            _this.setState({isSuccessSent: false});
                          });
                    } catch (err) {
                       console.log(err);
                       _this.setState({isSuccessSent: false});
                    }
                }
            }
            
        }
   
        render() {
            let lng = this.props.lng;
            var isNameError=this.state.isNameError === true ? "block" : "none";
            var isEmailError=this.state.isEmailError === true ? "block" : "none";

            var isNameLabelActive=this.state.isNameLabelActive === true ? <label className="formLabel active">{i18n.t('contacts.name', { lng })}</label> : <label className="formLabel">{i18n.t('contacts.name', { lng })}</label>;
            var isEmailLabelActive=this.state.isEmailLabelActive === true ? <label className="formLabel active">{i18n.t('contacts.email', { lng })}</label> :  <label className="formLabel">{i18n.t('contacts.email', { lng })}</label>;
            var isMessLabelActive=this.state.isMessLabelActive === true ? <label className="formLabel active">{i18n.t('contacts.message', { lng })}</label> :  <label className="formLabel">{i18n.t('contacts.message', { lng })}</label>;

            var isSuccessSent = this.state.isSuccessSent === true ? "is_active" : "";
            var svgString='<svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  viewBox="0 0 29.756 29.756" style="enable-background:new 0 0 29.756 29.756" xml:space="preserve">'+
                        '<path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z"/>'+
                        '</svg>';
            return (
                <form onSubmit={this.handleSubmit}>
                    <div className={'dataItem Name ' + (this.state.isNameLabelActive || this.state.isNameFocus ? 'active' : '')}>
                        <input type="text" tabindex="1" className="txtName" maxlength="64" required="" value={this.state.name} 
                            onChange={this.onNameChange} 
                            onFocus={this.onSetFocusName}
                            onBlur ={this.onRemoveFocusName}
                        ></input>
                        {isNameLabelActive}
                        <div className="errorArea" style={{display : isNameError}}>{this.state.nameError}</div>
                    </div>
                    <div className={'dataItem Email ' + (this.state.isEmailLabelActive || this.state.isEmailFocus ? 'active' : '')}>
                        <input type="text" tabindex="2" maxlength="64" required="" value={this.state.email} 
                            onChange={this.onEmailChange} 
                            onFocus={this.onSetFocusEmail}
                            onBlur ={this.onRemoveFocusEmail}
                        ></input>
                        {isEmailLabelActive}
                        <div className="errorArea" style={{display :isEmailError}}>{this.state.emailError}</div>
                    </div>
                    <div className={'dataItem Message ' + (this.state.isMessLabelActive || this.state.isMessFocus ? 'active' : '')}>
                        <textarea type="text" tabindex="3" maxlength="150" required="" value={this.state.mess} 
                            onChange={this.onMessChange} 
                            onFocus={this.onSetFocusMessage}
                            onBlur ={this.onRemoveFocusMess}
                        ></textarea>
                        {isMessLabelActive}
                    </div>
                    
                    <button className={isSuccessSent} type="submit">
                        <span>{i18n.t('contacts.sent', { lng })}</span>
                        <div className="success">
                            <div dangerouslySetInnerHTML={{ __html: svgString }}></div>
                        </div>
                    </button>
                    
                </form>

            );
        }
    }