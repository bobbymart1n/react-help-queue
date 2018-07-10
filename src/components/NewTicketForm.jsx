import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { connect } from 'react-redux';


function NewTicketForm(props){
  const formStyles = {
    width: '600px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
  };
  const inputFields = {
    margin: '10px 0',
    height: '50px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#ccc'
  };
  let _names = null;
  let _location = null;
  let _issue = null;
  function handleNewTicketFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_TICKET',
      id: null,
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment()
    };
    dispatch(action);
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, timeOpen: new Moment()});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }
  return (
    <div>
      <form
        style={formStyles}
        onSubmit={handleNewTicketFormSubmission}>
        <input
          style={inputFields}
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          style={inputFields}
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          style={inputFields}
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default connect()(NewTicketForm);
