import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './mobile_experience.css';
import MobileCareer from './mobile_career';

@CSSModules(styles)
export default class MobileExperience extends Component {

    render() {
        return (
            <div>
                <div styleName="subtitle">
                    <h2>Experience</h2>
                </div>
                <MobileCareer time="Jul. 2015 ~ Now" job="Software Engineer" corp="J1 Crop" href="https://www.j1.com" />
                <MobileCareer time="Aug. 2013 ~ Feb. 2015" job="Freight Operator" corp="TVL Group" href="http://www.tvlgroups.com/En/ugC_AboutUs.asp" />
            </div>
        )
    }
}