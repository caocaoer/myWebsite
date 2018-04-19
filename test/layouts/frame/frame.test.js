// import { assert } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Frame from '../../../src/layouts/frame/Frame';
import Footer from '../../../src/layouts/footer/Footer';
import Header from '../../../src/layouts/header/Header';

describe('Enzyme的浅渲染测试套件=====================', () => {
    it('Frame包含<Header/>', () => {
        const frame = shallow(<Frame />);
        expect(frame.find(Header).length).toEqual(1);
    });
    it('Frame包含<Footer/>', () => {
        const frame = shallow(<Frame />);
        expect(frame.find(Footer).length).toEqual(1);
    });
});