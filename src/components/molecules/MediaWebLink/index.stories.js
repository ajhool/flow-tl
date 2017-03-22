import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { MediaWebLink } from 'components'

storiesOf('MediaWebLink', module)
  .add('default', () => (
    <MediaWebLink
      title="Illinois governor seeks prison tower cameras"
      mediaLink="http://bigstory.ap.org/article/9b3998b11d814f1abec39e042afe12bd/apnewsbreak-illinois-governor-seeks-prison-tower-cameras"
      agencyName="Associated Press"
      agencyLink="https://www.ap.org/en-us/">
    </MediaWebLink>
  ))
  .add('without agency link', () => (
    <MediaWebLink
      title="Illinois governor seeks prison tower cameras"
      mediaLink="http://bigstory.ap.org/article/9b3998b11d814f1abec39e042afe12bd/apnewsbreak-illinois-governor-seeks-prison-tower-cameras"
      agencyName="Associated Press">
    </MediaWebLink>
  ))
  .add('with icon', () => (
    <MediaWebLink
      icon="close"
      title="Illinois governor seeks prison tower cameras"
      mediaLink="http://bigstory.ap.org/article/9b3998b11d814f1abec39e042afe12bd/apnewsbreak-illinois-governor-seeks-prison-tower-cameras"
      agencyName="Associated Press"
      agencyLink="https://www.ap.org/en-us/">
    </MediaWebLink>
  ))
