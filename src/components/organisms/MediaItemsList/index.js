import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { MediaWebLink } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const MediaItemList = ({ list, loading, ...props }) => {
  return (
    <Wrapper {...props}>
      {loading && <div>Loading</div>}
      {
        list.map(mediaItem => {
          switch(mediaItem.mediaType){
            case 'WEB_LINK':
              return (<MediaWebLink key={mediaItem.id} mediaItem {...mediaItem}></MediaWebLink>)
            case 'YT_LINK':
              //TODO:
              return
            default:
              return null
          }
        }
      }
    </Wrapper>
  )
}

MediaItemList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
}

export default MediaItemList
