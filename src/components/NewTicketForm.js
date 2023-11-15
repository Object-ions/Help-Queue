import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewTicketForm(props){

  function handleNewTicketFormSubmission(e) {
    e.preventDefault();
    props.onNewTicketCreation({
      names: e.target.names.value,
      loction: e.target.loction.value,
      issue: e.target.issue.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit = {handleNewTicketFormSubmission}>
        <input 
          type='text'
          name='names'
          placeholder = 'Pair Names'/>
        <input 
          type='text'
          name='location'
          placeholder='Location'/>
        <textarea 
          name='issue'
          placeholder='Describe Your Issue.'/>
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;