import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { MediaItemInputs } from 'containers'

storiesOf('MediaItemInputs', module)
  .add('default', () => (
    <MediaItemInputs />
  ))
