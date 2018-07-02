import React from 'react';
import PropTypes from 'prop-types';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';



class NewTicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }
  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }
  render(){
    let currentlyVisibleContent = null;
    this.state.formVisibleOnPage ? currentlyVisibleContent = <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation}/> : currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketControl;