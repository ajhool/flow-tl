import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { MediaItemInputsList } from 'components'

const list = [

]

storiesOf('MediaItemInputsList', module)
  .add('default', () => (
    <MediaItemInputsList list={list} />
  ))
  .add('loading', () => (
    <MediaItemInputsList list={[]} loading />
  ))
