import React, { Component } from 'react'
import ProfileList from './empty';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import {Route} from 'react-router-dom'

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 4,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth 1',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};


class App extends Component {
  state={
  contacts: []
}
componentDidMount(){
  ContactsAPI.getAll().then((contacts)=>{
    this.setState(()=>({
      contacts
    }))
  })
}
removeContact = (contact)=>{
  this.setState((currentState)=>({
    contacts: currentState.contacts.filter((con) =>{
      console.log(con.id !== contact.id)
      return con.id !== contact.id
    })
    
  })
  )
  ContactsAPI.remove(contact)
}
createContact = (contact) => {
  ContactsAPI.create(contact)
    .then((contact) => {
      this.setState((currentState) => ({
        contacts: currentState.contacts.concat([contact])
      }))
    })
}
  render() {
    return (
      <div>
        
      <Route exact path='/' render={()=>(
  <ListContacts
  contacts={this.state.contacts}
  onDeleteContact={this.removeContact}
      
  />
)} />

<Route path='/create' render={({ history }) => (
          <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }}
          />
        )} />
      </div>
    );
  }
}

export default App;
