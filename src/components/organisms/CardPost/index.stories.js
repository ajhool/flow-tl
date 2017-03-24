import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { CardPost } from 'components'

storiesOf('CardPost', module)
  .add('default', () => (
    <CardPost
      title="Hello"
      body="The governor of Illinois seeks prison tower cameras in an effort to maintain the prison tower camera system of Illinois governmentship. Ipsom dollard wollard collard."
      startDate={1490222841664}
      postDate={Date.now()}
      media={[{
        title:"Illinois governor seeks prison tower cameras",
        mediaLink:"http://bigstory.ap.org/article/9b3998b11d814f1abec39e042afe12bd/apnewsbreak-illinois-governor-seeks-prison-tower-cameras",
        agencyName:"Associated Press",
        agencyLink:"https://www.ap.org/en-us/"
      },
      {
        title:"Illinois governor seeks prison tower cameras",
        mediaLink:"http://bigstory.ap.org/article/9b3998b11d814f1abec39e042afe12bd/apnewsbreak-illinois-governor-seeks-prison-tower-cameras",
        agencyName:"Associated Press",
        agencyLink:"https://www.ap.org/en-us/"
      },
      {
        title:"Illinois governor seeks prison tower cameras",
        mediaLink:"http://bigstory.ap.org/article/9b3998b11d814f1abec39e042afe12bd/apnewsbreak-illinois-governor-seeks-prison-tower-cameras",
        agencyName:"Associated Press",
        agencyLink:"https://www.ap.org/en-us/"
      }]}
      tags={[
        {
          keyword: 'Illinois', score: 90
        },
        {
          keyword: 'Prison Tower Cameras', score: 10
        }
      ]}
    />
  ))
