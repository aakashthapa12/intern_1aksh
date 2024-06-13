import React, { useState } from 'react'
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CForm,
  CFormLabel,
  CFormInput,
  CButton
} from '@coreui/react'

const Application = () => {
  const [appName, setAppName] = useState('')

  const handleChange = (e) => {
    setAppName(e.target.value)
  }

  const handleSave = () => {
    alert('Save button clicked')
  }

  return (
    <CContainer>
      <CRow className="justify-content-center mt-4">
        <CCol md="8">
          <CCard>
            <CCardBody>
              <h2 className="text-center mb-4">Application Name</h2>
              <CForm>
                <div className="d-flex flex-column mb-3">
                  <CFormLabel htmlFor="appName">Application Name:</CFormLabel>
                  <CFormInput
                    type="text"
                    id="appName"
                    name="appName"
                    placeholder="Enter application name"
                    value={appName}
                    onChange={handleChange}
                  />
                </div>
                <CRow className="justify-content-end">
                  <CCol sm="2">
                    <CButton color="primary" onClick={handleSave}>
                      Save
                    </CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Application
