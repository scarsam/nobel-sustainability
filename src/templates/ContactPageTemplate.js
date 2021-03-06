import React from 'react'
import Layout from '../components/layout'
import LeafletMap from '../components/map'

const ContactPageTemplate = ({ title, emails, offices }) => {
  return (
    <Layout>
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
            <div className="col-md-8">
              <div className="row justify-content-end">
                {offices &&
                  offices.map((office, index) => {
                    return (
                      <div className="col-md-6 padding-bottom-20px" key={index}>
                        <address>
                          <h4>{office.name}</h4>
                          <p>
                            {office.street}
                            <span className="d-block">
                              {office.zip} {office.city}, {office.country}
                            </span>
                          </p>
                          {typeof window !== 'undefined' && (
                            <LeafletMap
                              position={[office.lat, office.long]}
                              zoom={15}
                            />
                          )}
                        </address>
                      </div>
                    )
                  })}
              </div>
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
    </Layout>
  )
}

export default ContactPageTemplate
