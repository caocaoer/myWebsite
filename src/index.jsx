import './styles/main.scss';
import 'antd/dist/antd.min.css';
import React from 'react';
import { render } from 'react-dom';
import Root from './routes/Root';

render(
    <Root/>,
    document.getElementById('app')
);