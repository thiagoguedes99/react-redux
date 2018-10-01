import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addContact } from '../actions';

import './ContactPersonal.css';

class ContactPersonal extends Component {
  // constructor (props) {
    // super(props);

    // this.state = {
    state = {
      inputValue: ''
    };
  // }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  sendValue = () => {
    this.props.addContact(this.state.inputValue)
    this.setState({inputValue: ''})
  }

  render() {
    const { addContact, contacts } = this.props;
    const { inputValue } = this.state;    
    
    return (
      <article>
        foi aqui ContactPersonal
        <br/>

        <input type='text'
          onChange={this.inputChange}
          value={inputValue}
        />

        {/* <button onClick={() => addContact(inputValue)}> */}
        <button onClick={() => this.sendValue()}>
          Click me!
        </button>

        <div>
          {contacts.map((contact, index) =>
          <p key={index}>{contact}</p>
          )}
        </div>

      </article>
    );
  }
}

const mapStateToProps = store => ({
  contacts: store.contactsState.contacts
});

const mapDispatchToProps = dispatch =>
bindActionCreators({ addContact }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactPersonal);
