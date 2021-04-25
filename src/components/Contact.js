import React from 'react';



function Contact (contact) {
    return (
        <div className="contact-people">
          <div className="contact-people__name">
            { contact.firstName + " " + contact.lastName }
          </div>
          <div className="contact-people__description">
            <div className="contact-people__phone">
              <a href={ "tel:" + contact.phone }>{ contact.phone }</a>
            </div>
            <div className="contact-people__gender">
              { contact.gender }
            </div>
          </div>
        </div>
    )
}

export default Contact;
