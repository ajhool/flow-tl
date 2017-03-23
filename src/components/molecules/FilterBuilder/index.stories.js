import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { FilterBuilder } from 'components'

const list = [
  //TODO: Add actual MediaItems
  'Story',
  'Lines'
]

storiesOf('FilterBuilder', module)
  .add('default', () => (
    <FilterBuilder list={list} />
  ))
  .add('loading', () => (
    <FilterBuilder list={[]} loading />
  ))
