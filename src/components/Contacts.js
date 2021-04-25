import React from 'react';
import Contact from '../components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

let contacts = [{
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male"
}, {
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female"
}, {
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666"
}, {
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
}, {
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male"
}, {
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male"
}];




class Contacts extends React.Component {
  
    state = {
      contacts: contacts, 
      search: ""
    };    

  handleSearchChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    this.setState({
      search: e.target.value,
      contacts: contacts.filter((contact) => {
        for (const key in contact) {
        const result = contact[key].toLowerCase().indexOf(inputValue)
          if (result === 0) {
            return contact;
          }
        }
      })
    })
  }

  render() {
    return (
      <section className="contact">
        <div className="contact-header">
          <div className="contact-header__title">
            Contacts
          </div>
          <div className="contact-header__buttons">
            <input className="contact-header__button" type="button" value="Edit" onClick={function () { alert("Edit"); }}/>
            <input className="contact-header__button" type="button" value="Close" onClick={function () { alert("Close"); }}/>
          </div>
        </div>
        <div className="search">
          <input type="search" placeholder="Search" className="search__input" value={this.state.search} onChange={this.handleSearchChange} />
        </div>
        <div className="main"> 
          { this.state.contacts.map(contact => {
            return (<Link to={contact.phone}><Contact { ...contact } /></Link>)
          })}
        </div>
        <div className="footer-button">
          <input className="footer-button__input" type="button" value="New contact" onClick={function () { alert("NEW CONTACT"); }}/>
        </div>
      </section>
    )
  }
}

export default Contacts;
