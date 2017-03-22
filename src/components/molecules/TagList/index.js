import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Button } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const TagList = ({ list, loading, ...props }) => {
  return (
    <Wrapper {...props}>
      { list.map(tag => <Button href="https://github.com/diegohaz/arc">{tag.keyword}</Button>) }
    </Wrapper>
  )
}

TagList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
}

export default TagList
