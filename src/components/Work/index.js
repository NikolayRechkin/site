import React from 'react'
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import i18n from '../../i18n';
import './style.css';
import jobs_data from '../../jobs.json'

export default class Work extends React.Component{
    
    constructor(props, context) {
        super(props, context);
        
        
    }
    
    render() {
        let jobs = jobs_data.jobs;
        let lng = this.props.lng;

        let jobsElems = jobs.map((item, i) => {
                return (
                   <div className="job flex">
                        <div className="job-title">
                            <div className="job-company">
                                <span>{i18n.t('work.'+item.name+'.companyName', { lng })}</span>
                                <div className="dates">{i18n.t('work.'+item.name+'.date', { lng })}</div>
                            </div>
                        </div>
                        
                        <div className="job-description">
                            <h3>{i18n.t('work.'+item.name+'.position', { lng })}</h3>
                            <p>{i18n.t('work.'+item.name+'.positionDescription', { lng })}</p>
                        </div>
                    </div>
                )

        });

        return (
                <div id="work">
                    <h2 className="sectionTitle">{i18n.t('work.title', { lng })}</h2>
                    {jobsElems}
                </div>
            );

    }
}