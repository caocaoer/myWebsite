import styles from './scrollTop.scss';
import goTopPNG from '../../../images/goTop.png';
import React, { Component } from 'react';

export default class ScrollTop extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        showBackTop: false
    };

    componentWillMount() {
        window.addEventListener('scroll', this.bindScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.bindScroll);
    }

    bindScroll = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= 300) {
            this.setState({
                showBackTop: true
            });
        } else {
            this.setState({
                showBackTop: false
            });
        }
    }

    /**
     * 置顶
     */
    backTop = () => {
        this.timer = setInterval(() => {
            if (document.body.scrollTop) {
                document.body.scrollTop -= 40;
                if (document.body.scrollTop <= 0) {
                    clearInterval(this.timer);
                }
            } else {
                document.documentElement.scrollTop -= 40;
                if (document.documentElement.scrollTop <= 0) {
                    clearInterval(this.timer);
                }
            }
        }, 12);
    }

    render() {
        const { showBackTop } = this.state;
        return (
            <div className={styles.scrollTop}>
                {
                    showBackTop
                    ?
                    <img title="置顶" onClick={this.backTop} className={styles.backTop} src={goTopPNG}/>
                    :
                    null
                }
            </div>
        );
    }
}
