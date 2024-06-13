import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';

const ContactRequests = () => {
  return (
    <CCard>
      <CCardHeader>
        <h3>Contact Requests</h3>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol>
            <h5>Content Goes Here</h5>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default ContactRequests;
