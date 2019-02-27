import React, { Component } from 'react';
import { ISurveyItem } from '../../../reducers';

interface ISurveyListItemProps {
  surveyListItem: ISurveyItem
}

class SurveyListItem extends Component<ISurveyListItemProps, any> {
  render() {
      const listItem = this.props.surveyListItem;
      if (listItem) {
        return ( 
          <tr>
            <td>{listItem.id}</td>
            <td>{listItem.title}</td>
            <td>{listItem.description}</td>
            <td>{listItem.dateCreated.toDateString()}</td>
            <td>{listItem.dateClosed.toDateString()}</td>
            <td>{listItem.status.status}</td>
            <td>{listItem.privacy.privacy}</td>
          </tr>
        )
      } else {
        return null;
    }
  }
}

export default  SurveyListItem;