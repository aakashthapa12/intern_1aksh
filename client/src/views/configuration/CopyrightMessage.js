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

const CopyrightMessage = () => {
  const [message, setMessage] = useState('')

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSave = () => {
    alert('Save button clicked')
  }

  return (
    <CContainer className="my-3">
      <CRow className="justify-content-center">
        <CCol md="8">
          <CCard>
            <CCardBody>
              <h2 className="text-center mb-4">Copyright Message</h2>
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="message">Copyright Message</CFormLabel>
                  <CFormInput
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Enter copyright message"
                    value={message}
                    onChange={handleMessageChange}
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

export default CopyrightMessage
