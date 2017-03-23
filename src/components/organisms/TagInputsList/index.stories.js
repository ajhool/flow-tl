import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TagInputsList } from 'components'

const list = [
]

storiesOf('TagInputsList', module)
  .add('default', () => (
    <TagInputsList list={list} />
  ))
  .add('loading', () => (
    <TagInputsList list={[]} loading />
  ))
