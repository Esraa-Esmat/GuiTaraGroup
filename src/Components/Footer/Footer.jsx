import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../../assets/images/logo-default-143x27.png';
import './Footer.css'

export default function Footer() {
  return (
    <MDBFooter className=' text-lg-start text-sm-center text-muted m-auto'>
      <section className='pt-4 text-white'>
        <MDBContainer className=' text-md-start text-sm-center mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol xs="12" md="5" xl="5" className='mx-auto text-lg-start text-sm-center mb-4'>
              <div className='logoDiv '>
                <img src={logo} alt="logo" className="img-fluid" />
                <p className='mt-4'>
                  GuiTara Group A company specialized in content creators, broadcasting, and developing broadcasters and helping them create financial returns and profits, in addition to how to be skilled content creators and specialists in creating stars.
                </p>
              </div>
            </MDBCol>

            <MDBCol xs="12" md="3" xl="3" className='mx-auto text-lg-start text-sm-center mb-4'>
              <h5 className='mb-4 text-uppercase fw-bold'>Quick Links</h5>
              <p>Home</p>
              <p>About Us</p>
              <p>Services</p>
              <p>Support</p>
              <p>Contact Us</p>
            </MDBCol>

            <MDBCol xs="12" md="3" xl="3" className='mx-auto text-lg-start text-sm-center mb-md-0 mb-4'>
              <h5 className='mb-4 text-uppercase fw-bold'>Contact Info</h5>
              <p>
                <MDBIcon icon="location-dot" className="me-xl-3 me-md-2 me-1" />
                1 Mahmoud Tymoor, Al Matar, El Nozha, Cairo Governorate          </p>
              <p>
                <MDBIcon icon="envelope" className="me-xl-3 me-md-0 me-1" />
                guitaraagency@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-xl-2 me-md-1 me-1" />+201205068488
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center copyRightsFooter p-md-0 p-xl-4 text-white container d-flex  flex-wrap'>
        {/* <p>
          <MDBIcon icon="skype" className="me-2" />
          484W+C3 El Nozha
        </p> */}
        <p className="mt-2 mt-md-0 m-auto">
          ©2025
          <a className='text-reset fw-bold mx-1' href='https://guitaraagency.com'>
          GuiTara Group          </a>
          – All Rights Reserved
        </p>
      </div>
    </MDBFooter>
  );
}
