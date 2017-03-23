import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Button } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const FilterBuilder = ({ list, loading, ...props }) => {
  return (
    <Wrapper {...props}>
      { list.map(filterItem => <Button key={filterItem}>{filterItem}</Button>) }
      <Button>Add Filter</Button>
    </Wrapper>
  )
}

FilterBuilder.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default FilterBuilder
