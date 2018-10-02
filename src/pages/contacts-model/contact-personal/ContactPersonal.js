import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from './../../../components'

import { addContact } from '../actions';

import './ContactPersonal.css';

class ContactPersonal extends Component {
  // constructor (props) {
    // super(props);

    // this.state = {
    state = {
      inputValue: '',
      isLoading: false
    };
  // }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  sendValue = () => {
    this.setState({isLoading: true})
    setTimeout(() => {
      this.props.addContact(this.state.inputValue)
      this.setState({inputValue: '', isLoading: false})
    }, 1000)
  }

  render() {
    const { addContact, contacts } = this.props;
    const { inputValue, isLoading } = this.state;    
    
    return (
      <article>
        foi aqui ContactPersonal
        <br/>

        <input type='text'
          onChange={this.inputChange}
          value={inputValue}
        />

        {/* <button onClick={() => addContact(inputValue)}> */}
        
        {/* <button onClick={() => this.sendValue()}>
          Click me!
        </button> */}

        <Button isLoading={isLoading} text='add contact' onHandleClick={this.sendValue}/>

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
