import React from 'react'
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import i18n from '../../i18n';
import './style.css'

export default class Menu extends React.Component{
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false
        };
    }
    
    render() {
        let lng = this.props.lng;
        jQuery(document).ready(function(){
            var menu_home = $("#header").offset().top,
                menu_about = $("#about").offset().top,
                menu_work = $("#work").offset().top,
                menu_contacts = $("#contacts").offset().top;
            let s_top = $("html").scrollTop();
            let menu_nav_a = jQuery('#main-nav ul li a');
            menu_nav_a.removeClass('active');
           

            if(s_top >= (menu_contacts-150)){
                 console.log(4)
                menu_nav_a.removeClass('active');
                jQuery("#menu_contacts").addClass('active');
            }else if(s_top >= (menu_work-50) && s_top < (menu_contacts-150)){
                console.log(3)
                menu_nav_a.removeClass('active');
                jQuery("#menu_work").addClass('active');
            }else if(s_top >= menu_about && s_top < (menu_work-50)){
                 console.log(2)
                 menu_nav_a.removeClass('active');
                jQuery("#menu_about").addClass('active');
            }else if(s_top >= 0 && s_top < menu_about){
                console.log(1)
                menu_nav_a.removeClass('active');
                jQuery("#menu_home").addClass('active');
            }
            
            

            if(jQuery('#menu-toggle').length == 0){
                jQuery('#main-nav').stellarNav({
                  breakpoint: 810, 
                  menuLabel: '<a id="menu-toggle" class="button"><span class="sr">Toggle Navigation</span><span class="menu-bar bar1"></span><span class="menu-bar bar2"></span><span class="menu-bar bar3"></span></a>',  
                });
            }
            
            var mainNav = jQuery('#main-nav')
            mainNav.show();

            jQuery('#main-nav ul li a').unbind('click').click(function(){
                console.log('click')
                var _this = jQuery(this);
                
                event.preventDefault();
                var id  = _this.attr('href'),
                    top = jQuery(id).offset().top;
                console.log('click1')
                jQuery('body,html').animate({scrollTop:top},400);
                if(mainNav.hasClass('mobile') && jQuery('.stellarnav.mobile > ul').is(':visible')){
                    jQuery('#menu-toggle').trigger('click');
                }
                jQuery('#main-nav ul li a').removeClass('active');
                _this.addClass('active');
                console.log('click2')
            });


            
            
            jQuery(document).unbind('scroll').scroll(function () {
                let s_top = $("html").scrollTop();
                jQuery('#main-nav ul li a').removeClass('active');
               
                
                if(s_top >= (menu_contacts-150)){
                    console.log(4)
                    menu_nav_a.removeClass('active');
                    jQuery("#menu_contacts").addClass('active');
                }else if(s_top >= (menu_work-50) && s_top < (menu_contacts-150)){
                    console.log(3)
                    menu_nav_a.removeClass('active');
                    jQuery("#menu_work").addClass('active');
                }else if(s_top >= menu_about && s_top < (menu_work-50)){
                     console.log(2)
                     menu_nav_a.removeClass('active');
                    jQuery("#menu_about").addClass('active');
                }else if(s_top >= 0 && s_top < menu_about){
                    console.log(1)
                    menu_nav_a.removeClass('active');
                    jQuery("#menu_home").addClass('active');
                }
            });

            var menu = jQuery('#menu-toggle'),
                toggled = false;

            menu.unbind('click').click(function(){
                if ( !toggled ) {
                    this.className += " toggled";
                    toggled = true;
                    $('.stellarnav.mobile > ul').show();
                } else {
                    this.className = this.className.replace(/\b\stoggled\b/, "");
                    toggled = false;
                    $('.stellarnav.mobile > ul').hide();
                }
            });
        });
        
        return (
            <header>
                <div id="main-nav" className="stellarnav">
                   
                        <ul>
                            <li>
                                <a href="#home" id="menu_home">{i18n.t('menu.home', { lng })}</a>
                            </li>
                            <li>
                                <a href="#about" id="menu_about">{i18n.t('menu.about_me', { lng })}</a>
                            </li>
                            <li>
                                <a href="#work" id="menu_work">{i18n.t('menu.work_experience', { lng })}</a>
                            </li>
                            <li>
                                <a href="#contacts" id="menu_contacts">{i18n.t('menu.contacts', { lng })}</a>
                            </li>
                        </ul>
                   
                    
                </div>
            </header>
        );
        
        
    }
}