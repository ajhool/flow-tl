import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TimelinePage } from 'components'

storiesOf('TimelinePage', module)
  .add('default', () => (
    <TimelinePage />
  ))
