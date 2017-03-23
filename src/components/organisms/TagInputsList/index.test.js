import React from 'react'
import { shallow } from 'enzyme'
import TagInputsList from '.'

const list = [

]

const wrap = (props = {}) => shallow(<TagInputsList list={list} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders loading when passed in', () => {
  const wrapper = wrap({ loading: true })
  expect(wrapper.contains('Loading')).toBe(true)
})
