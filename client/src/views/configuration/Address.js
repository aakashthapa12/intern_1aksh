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

const Address = () => {
  const [addressInfo, setAddressInfo] = useState({
    companyName: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pinCode: '',
    website: '',
    contactNumber: '',
    email: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setAddressInfo({
      ...addressInfo,
      [name]: value,
    })
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
              <h2 className="text-center mb-4">Address</h2>
              <CForm>
                <div className="d-flex flex-column mb-3">
                  <CFormLabel htmlFor="companyName">Company Name</CFormLabel>
                  <CFormInput
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Enter company name"
                    value={addressInfo.companyName}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column mb-3">
                  <CFormLabel htmlFor="address">Address</CFormLabel>
                  <CFormInput
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter address"
                    value={addressInfo.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column mb-3">
                  <CFormLabel htmlFor="city">City</CFormLabel>
                  <CFormInput
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Enter city"
                    value={addressInfo.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column mb-3">
                  <CFormLabel htmlFor="state">State</CFormLabel>
                  <CFormInput
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Enter state"
                    value={addressInfo.state}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column mb-3">
                  <CFormLabel htmlFor="country">Country</CFormLabel>
                  <CFormInput
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Enter country"
                    value={addressInfo.country}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column mb-3">
                  <CFormLabel htmlFor="pinCode">Pin Code</CFormLabel>
                  <CFormInput
                    type="text"
                    id="pinCode"
                    name="pinCode"
                    placeholder="Enter pin code"
                    value={addressInfo.pinCode}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column mb-3">
                  <CFormLabel htmlFor="website">Website</CFormLabel>
                  <CFormInput
                    type="text"
                    id="website"
                    name="website"
                    placeholder="Enter website"
                    value={addressInfo.website}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column mb-3">
                  <CFormLabel htmlFor="contactNumber">Contact Number</CFormLabel>
                  <CFormInput
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="Enter contact number"
                    value={addressInfo.contactNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column mb-3">
                  <CFormLabel htmlFor="email">Email</CFormLabel>
                  <CFormInput
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    value={addressInfo.email}
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

export default Address
