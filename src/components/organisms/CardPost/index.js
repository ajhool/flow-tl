import React, { PropTypes } from 'react'
import styled from 'styled-components'
import moment from 'moment'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

import { MediaItemList, TagList } from 'components'

export default class CardPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    postDate: PropTypes.string,
    media: PropTypes.arrayOf(PropTypes.object),
    tags: PropTypes.arrayOf(PropTypes.object)
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    const startDateStr = moment(this.props.startDate).format('MM-DD-YY, h:mm:ss a');

    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardTitle title={this.props.title} subtitle={'(' + startDateStr + ')'} expandable={true} />
        <CardText>
          <div>{this.props.body}</div>
          <MediaItemList list={this.props.media}></MediaItemList>
          <TagList list={this.props.tags}></TagList>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="This toggle controls the expanded state of the component."
          />
        </CardText>
        <CardMedia
          expandable={true}
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src="images/nature-600-337.jpg" />
        </CardMedia>
      </Card>
    );
  }
}
