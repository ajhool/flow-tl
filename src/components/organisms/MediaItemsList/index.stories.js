import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { MediaItemList } from 'components'

const list = [
  //TODO: Add actual MediaItems
]

storiesOf('MediaItemList', module)
  .add('default', () => (
    <MediaItemList list={list} />
  ))
  .add('loading', () => (
    <MediaItemList list={[]} loading />
  ))
