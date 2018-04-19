// import { assert } from 'chai';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import Index from '../../../src/Index';
// import Frame from '../../../src/layouts/frame/Frame';
import Footer from '../../../src/layouts/footer/Footer';

const { shallow } = Enzyme;

Enzyme.configure({
    adapter: new Adapter()
});

describe('Enzyme的浅渲染测试套件=====================', () => {
    it('Frame是否包含<Header/>', () => {
        shallow(<Footer />);
        // assert.equal(app.find('div'));
        // expect(app.find(Header));
    });
});