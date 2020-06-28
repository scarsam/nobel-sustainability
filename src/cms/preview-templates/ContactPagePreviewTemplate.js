import React from 'react'
import LeafletMap from '../../components/map'

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
            <div className="col-md-3 col-lg-2 offset-lg-2 padding-bottom-20px padding-bottom-xl-none">
              <h3 className="padding-bottom-20px padding-bottom-md-none">
                Offices
              </h3>
            </div>
            <div className="col-lg-8 col-xl-4 offset-xl-0 padding-bottom-40px padding-bottom-xl-none">
              <address>
                <h4>{officeOne.name}</h4>
                <p>
                  {officeOne.street}
                  <span className="d-block">
                    {officeOne.zip} {officeOne.city}, {officeOne.country}
                  </span>
                </p>
                {typeof window !== 'undefined' && (
                  <LeafletMap
                    position={[officeOne.lat, officeOne.long]}
                    zoom={15}
                  />
                )}
              </address>
            </div>
            <div className="col-lg-8 offset-lg-4 col-xl-4 offset-xl-0">
              <address>
                <h4>{officeTwo.name}</h4>
                <p>
                  {officeTwo.street}
                  <span className="d-block">
                    {officeTwo.zip} {officeTwo.city}, {officeTwo.country}
                  </span>
                </p>
                {typeof window !== 'undefined' && (
                  <LeafletMap
                    position={[officeTwo.lat, officeTwo.long]}
                    zoom={15}
                  />
                )}
              </address>
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
            <div className="col-md-8">
              <div className="row">
                {emails &&
                  emails.map((user, index) => {
                    return (
                      <div key={index} className="col-md-6 padding-bottom-20px">
                        <h4>{user.name}</h4>
                        <p className="margin-bottom-5px">
                          <a href={`mailto:${user.email}`}>{user.email}</a>
                        </p>
                        {user.phone && (
                          <p>
                            <a href={`tel:${user.phone}`}>{user.phone}</a>
                          </p>
                        )}
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPagePreviewTemplate
