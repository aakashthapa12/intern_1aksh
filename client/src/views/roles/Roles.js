import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CListGroup,
  CListGroupItem,
} from '@coreui/react';

const Roles = () => {
  return (
    <CCard>
      <CCardHeader>
        <h3>Roles</h3>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol>
            <CListGroup flush>
              <CListGroupItem>Creative Director</CListGroupItem>
              <CListGroupItem>Project Manager</CListGroupItem>
              <CListGroupItem>Software Engineer</CListGroupItem>
              <CListGroupItem>UI/UX Designer</CListGroupItem>
              <CListGroupItem>Marketing Specialist</CListGroupItem>
            </CListGroup>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default Roles;