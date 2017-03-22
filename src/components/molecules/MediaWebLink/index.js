import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Icon, Link, Paragraph, Heading, Badge } from 'components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  opacity: ${props => props.soon ? 0.4 : 1};
`

const StyledIcon = styled(Icon)`
  flex: none;
`

const Text = styled.div`
  margin-left: 1rem;
  & > :first-child {
    margin: 0;
  }
`

const StyledBadge = styled(Badge)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`

const MediaWebLink = ({ icon, title, mediaLink, agencyName, agencyLink, children, ...props }) => {
  return (
    <Wrapper {...props}>
      {icon && <StyledIcon icon={icon} height={64} />}
      <Text>
        <Heading level={2}>
          {agencyLink ? <Link href={agencyLink}>{agencyName}</Link> : agencyName}
        </Heading>
        <Link href={mediaLink}>{title}</Link>
      </Text>
    </Wrapper>
  )
}

MediaWebLink.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  mediaLink: PropTypes.string,
  agencyName: PropTypes.string,
  agencyLink: PropTypes.string,
  children: PropTypes.any
}

export default MediaWebLink
