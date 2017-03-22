import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TagList } from 'components'

const list = [
  //TODO: Add actual MediaItems
  {keyword: "Jake", score: 70},
  {keyword: "State Farm", score: 20}
]

storiesOf('TagList', module)
  .add('default', () => (
    <TagList list={list} />
  ))
  .add('loading', () => (
    <TagList list={[]} loading />
  ))
