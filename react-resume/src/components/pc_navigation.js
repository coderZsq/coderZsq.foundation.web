import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_navigation.css';

class PCNavigation extends Component {
    render() {
        return (
            <div>
                <div styleName="nav">
                    <div styleName="content">
                        <div styleName="title">
                            Castie!
                        </div>
                        <div styleName="items">
                            <span>
                                <a>Home</a>
                            </span>
                            <span>
                                <a>Projects</a>
                            </span>
                            <span>
                                <a>GitHub</a>
                            </span>
                            <span>
                                <a>Articles</a>
                            </span>
                            <span>
                                <a>Experience</a>
                            </span>
                            <span>
                                <a>Contact</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div styleName="nav-offset"></div>
            </div>
        )
    }
}

export default CSSModules(PCNavigation, styles);