import style from './frame.scss';
import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default class Frame extends Component {
    render() {
        return (
            <div className={style.frame}>
                <Header/>
                <div className={style.container}>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}