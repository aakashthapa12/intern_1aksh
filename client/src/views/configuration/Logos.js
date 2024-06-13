// import React, { useState } from 'react'
// import {
//   CContainer,
//   CRow,
//   CCol,
//   CCard,
//   CCardBody,
//   CForm,
//   CFormLabel,
//   CFormInput,
//   CButton
// } from '@coreui/react'

// const Logos = () => {
//   const [logos, setLogos] = useState({
//     headerLogo: '',
//     footerLogo: '',
//     adminLogo: ''
//   })

//   const handleHeaderLogoChange = (e) => {
//     // Handle header logo change here
//   }

//   const handleFooterLogoChange = (e) => {
//     // Handle footer logo change here
//   }

//   const handleAdminLogoChange = (e) => {
//     // Handle admin logo change here
//   }

//   const handleSave = () => {
//     alert('Save button clicked')
//   }

//   return (
//     <CContainer>
//       <CRow className="justify-content-center mt-4">
//         <CCol md="8">
//           <CCard>
//             <CCardBody>
//               <h2 className="text-center mb-4">Logos</h2>
//               <CForm>
//                 <div className="mb-3">
//                   <CFormLabel htmlFor="headerLogo">Header Logo for User Website</CFormLabel>
//                   <CFormInput
//                     type="file"
//                     id="headerLogo"
//                     name="headerLogo"
//                     onChange={handleHeaderLogoChange}
//                   />
//                   <CButton color="primary" className="mt-2">Upload Header Logo</CButton>
//                 </div>
//                 <div className="mb-3">
//                   <CFormLabel htmlFor="footerLogo">Footer Logo for User Website</CFormLabel>
//                   <CFormInput
//                     type="file"
//                     id="footerLogo"
//                     name="footerLogo"
//                     onChange={handleFooterLogoChange}
//                   />
//                   <CButton color="primary" className="mt-2">Upload Footer Logo</CButton>
//                 </div>
//                 <div className="mb-3">
//                   <CFormLabel htmlFor="adminLogo">Logo for Admin Website</CFormLabel>
//                   <CFormInput
//                     type="file"
//                     id="adminLogo"
//                     name="adminLogo"
//                     onChange={handleAdminLogoChange}
//                   />
//                   <CButton color="primary" className="mt-2">Upload Admin Logo</CButton>
//                 </div>
//                 <CRow className="justify-content-end">
//                   <CCol sm="2">
//                     <CButton color="primary" onClick={handleSave}>
//                       Save
//                     </CButton>
//                   </CCol>
//                 </CRow>
//               </CForm>
//             </CCardBody>
//           </CCard>
//         </CCol>
//       </CRow>
//     </CContainer>
//   )
// }

// export default Logos








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

const Logos = () => {
  const [logos, setLogos] = useState({
    headerLogo: '',
    footerLogo: '',
    adminLogo: ''
  })

  const handleHeaderLogoChange = (e) => {
    // Handle header logo change here
  }

  const handleFooterLogoChange = (e) => {
    // Handle footer logo change here
  }

  const handleAdminLogoChange = (e) => {
    // Handle admin logo change here
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
              <h2 className="text-center mb-4">Logos</h2>
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="headerLogo">Header Logo for User Website</CFormLabel>
                  <CFormInput
                    type="file"
                    id="headerLogo"
                    name="headerLogo"
                    onChange={handleHeaderLogoChange}
                  />
                  <CButton color="primary" className="mt-2">Upload Header Logo</CButton>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="footerLogo">Footer Logo for User Website</CFormLabel>
                  <CFormInput
                    type="file"
                    id="footerLogo"
                    name="footerLogo"
                    onChange={handleFooterLogoChange}
                  />
                  <CButton color="primary" className="mt-2">Upload Footer Logo</CButton>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="adminLogo">Logo for Admin Website</CFormLabel>
                  <CFormInput
                    type="file"
                    id="adminLogo"
                    name="adminLogo"
                    onChange={handleAdminLogoChange}
                  />
                  <CButton color="primary" className="mt-2">Upload Admin Logo</CButton>
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

export default Logos
