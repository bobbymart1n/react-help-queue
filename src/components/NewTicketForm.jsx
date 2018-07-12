import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';


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
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    };
    dispatch(action);
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

export default connect()(NewTicketForm);
