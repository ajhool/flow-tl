import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TagsInputsList } from 'components'

const list = [
]

storiesOf('TagsInputsList', module)
  .add('default', () => (
    <TagsInputsList list={list} />
  ))
  .add('loading', () => (
    <TagsInputsList list={[]} loading />
  ))
