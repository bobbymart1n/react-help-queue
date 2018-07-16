import React from 'react';
import { connect } from 'react-redux';
import { addTicket } from './../actions';

function NewTicketForm(props){
  const formStyles = {
    width: '600px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
  };
  const inputFields = {
    margin: '10px 0',
    height: '40px',
    fontSize: '1em',
    border: '2px solid #000',
    padding: '10px',
    borderRadius: '10px'
  };
  const button = {
    padding: '10px',
    fontSize: '1em',
    borderRadius: '10px',
    backgroundColor: 'steelblue',
    color: 'white'
  }
  let _names = null;
  let _location = null;
  let _issue = null;
  function handleNewTicketFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(addTicket(_names.value, _location.value, _issue.value));
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
        <button
          style={button}
          type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default connect()(NewTicketForm);
