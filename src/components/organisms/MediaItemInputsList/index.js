import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { MediaItemInputs, Button } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const MediaItemInputsList = ({ addItem, list, ...props }) => {
  return (
    <Wrapper {...props}>
      {list.map((mediaItemInput, idx) => <MediaItemInputs key={'itemInputs-'+idx} indexNumber={idx} {...mediaItemInput} />)}
      <MediaItemInputs key={'itemInputs-'+list.length} indexNumber={list.length} />
      <Button onClick={addItem}>Save Item</Button>
    </Wrapper>
  )
}

MediaItemInputsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  addItem: PropTypes.func.isRequired
}

export default MediaItemInputsList
