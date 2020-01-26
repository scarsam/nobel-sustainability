import React from 'react'

const ContactPagePreviewTemplate = ({
  title,
  officeOne,
  officeTwo,
  emails,
}) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      <div>
        <p>{officeOne.name}</p>
        <p>{officeOne.street}</p>
        <p>
          {officeOne.zip} {officeOne.city}, {officeOne.country}
        </p>
      </div>
      <div>
        <p>{officeTwo.name}</p>
        <p>{officeTwo.street}</p>
        <p>
          {officeTwo.zip} {officeTwo.city}, {officeTwo.country}
        </p>
      </div>
      {emails.map(email => (
        <>
          <p>{email.email}</p>
          <p>{email.name}</p>
        </>
      ))}
    </div>
  )
}

export default ContactPagePreviewTemplate
