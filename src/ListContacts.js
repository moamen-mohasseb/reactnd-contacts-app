import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListContacts extends Component {
  static propType ={
    contacts: PropTypes.array.isRequired,
    onDeletecontact:PropTypes.func.isRequired,

  }
  state ={
               query : ''
  }
  updatequery = (query)=>{
    this.setState(()=>({
      query : query.trim()
    }))
  }
    render() {
     const {contacts,onDeletecontact} = this.props
     const {query}= this.state
     const ShowingContacts = query === ''
     ?contacts
     :contacts.filter((c) =>
           c.name.toLowerCase().includes(query.toLowerCase())
     )
      //console.log('Props', this.props)

      return (
    <div className="list-contacts">   
      <div className="list-contacts-top">
        <input
        type="text"
        value={query}
        onChange={(event)=> this.updatequery(event.target.value)}></input>
         <p>{JSON.stringify(query)}</p>
      </div>
    <ol className='contact-list'>
        { ShowingContacts.map((contact) => (
        <li key={contact.id} className='contact-list-item'>
            <div
              className='contact-avatar'
              style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}
            ></div>
            <div className='contact-details'>
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
            </div>
            <button className='contact-remove' onClick={() =>this.props.onDeletecontact(contact)}>
              Remove
            </button>
          </li>
        ))}
     </ol></div>)
    }
}
export default ListContacts