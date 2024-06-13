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

const Blogs = () => {
  return (
    <CCard>
      <CCardHeader>
        <h3>Blogs</h3>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol>
            <CListGroup flush>
              <CListGroupItem>Introduction to React</CListGroupItem>
              <CListGroupItem>Best Practices for Web Development</CListGroupItem>
              <CListGroupItem>Mastering CSS Grid Layout</CListGroupItem>
              <CListGroupItem>How to Optimize Website Performance</CListGroupItem>
            </CListGroup>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default Blogs;
