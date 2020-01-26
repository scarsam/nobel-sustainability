import React from 'react'

const ContactPagePreviewTemplate = ({
  title,
  officeOne,
  officeTwo,
  emails,
}) => {
  return (
    <>
      <h1 className="text-center padding-top-50px padding-bottom-50px">
        {title}
      </h1>
      <section className="bg-sand">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-2 offset-lg-2">
              <h3 className="padding-bottom-20px padding-bottom-md-none">
                Offices
              </h3>
            </div>
            <div className="col-md-4">
              <h4>{officeOne.name}</h4>
              <p>
                {officeOne.street}
                <span className="d-block">
                  {officeOne.zip} {officeOne.city}, {officeOne.country}
                </span>
              </p>
            </div>
            <div className="col-md-4">
              <h4>{officeTwo.name}</h4>
              <p>
                {officeTwo.street}
                <span className="d-block">
                  {officeTwo.zip} {officeTwo.city}, {officeTwo.country}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row padding-top-40px">
            <div className="col-md-3 col-lg-2 offset-lg-2">
              <h3 className="padding-bottom-20px padding-bottom-md-none">
                Email
              </h3>
            </div>
            {emails &&
              emails.map((user, index) => {
                return (
                  <div key={index} className="col-md-4">
                    <h4>{user.name}</h4>
                    <p>
                      <a href={`mailto:${user.email}`}>{user.email}</a>
                    </p>
                  </div>
                )
              })}
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPagePreviewTemplate
