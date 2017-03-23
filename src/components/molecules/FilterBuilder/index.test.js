import React from 'react'
import { shallow } from 'enzyme'
import FilterBuilder from '.'

const list = [
  'Story',
  'Lines'
]

const wrap = (props = {}) => shallow(<FilterBuilder list={list} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders loading when passed in', () => {
  const wrapper = wrap({ loading: true })
  expect(wrapper.contains('Loading')).toBe(true)
})
