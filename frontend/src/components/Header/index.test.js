import React from 'react'
import {shallow} from 'enzyme'
import Header from './index'


const setUp = (props = {}) => {
    return shallow(<Header {...props}/>)
}


describe('Header Component Unit Testing', () => {
    let component;
    beforeEach(() => {
        component = setUp()
    })

    it('Should render well without any errors', () => {
        const wrapper = component.find(".header")
        expect(wrapper.length).toBe(1)
    })

    it('Should render one (2) logo image', () => {
        const wrapper = component.find("NavLink img")
        expect(wrapper.length).toBe(2)
    })

    it('Should render with 4 links', () => {
        const wrapper = component.find('li NavLink')
        expect(wrapper.length).toBe(4)
    })
})