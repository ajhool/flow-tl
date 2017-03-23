import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TagInputs } from 'containers'

storiesOf('TagInputs', module)
  .add('default', () => (
    <TagInputs />
  ))
