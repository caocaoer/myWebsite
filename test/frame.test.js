import { assert } from 'chai';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import Frame from '../src/layouts/frame/Frame';
import Header from '../src/layouts/header/Header';

const { shallow } = Enzyme;

Enzyme.configure({
    adapter: new Adapter()
});

describe('frame的浅渲染测试', () => {
    it('frame中包含Header组件', () => {
        let app = shallow(<Header/>);
        assert.equal(app.find('div'));
    });
});