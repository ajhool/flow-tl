import React from 'react'
import { mount, shallow } from 'enzyme'
import CardPost from '.'

const wrap = (props = {}) => shallow(<CardPost title="test title" body="test body" {...props} />)

it('mounts with different combination of props', () => {
  const wrapMounted = (props = {}) => mount(<CardPost title="a" body="b" {...props} />)
  wrapMounted()
  wrapMounted({ loading: true })
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders title', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test title')).toBe(true)
})

it('renders body', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test body')).toBe(true)
})
