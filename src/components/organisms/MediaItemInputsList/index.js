import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { MediaItemInputs } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const MediaItemInputsList = ({ list, loading, ...props }) => {
  return (
    <Wrapper {...props}>
      {list.map((mediaItemInput, idx) => <MediaItemInputs key={'itemInputs-'+idx} indexNumber={idx} {...mediaItemInput} />)}
      <MediaItemInputs key={'itemInputs-'+list.length} indexNumber={list.length} {...mediaItemInput} />
      <Button>Add Media</Button>
    </Wrapper>
  )
}

MediaItemInputsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
}

export default MediaItemInputsList
