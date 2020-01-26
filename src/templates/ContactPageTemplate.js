import React from 'react'
import Layout from '../components/layout'

const ContactPageTemplate = ({ title, officeOne, officeTwo, emails }) => {
  console.log(officeOne)
  return (
    <Layout>
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
    </Layout>
  )
}

export default ContactPageTemplate
