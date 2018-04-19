import style from './home.scss';
import React, { Component } from 'react';
import { Button } from 'antd';

export default class Home extends Component {
    render() {
        return (
            <div className={style.home}>
                <Button type="primary">Primary</Button>
                HomeHomeHomeHomeHomeHome
            </div>
        );
    }
}