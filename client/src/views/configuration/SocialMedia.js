
// static (for ui only , i have created dynamic see below)
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

const SocialMedia = () => {
  const [links, setLinks] = useState({
    facebook: '',
    twitter: '',
    instagram: '',
    youtube: '',
    linkedin: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setLinks({
      ...links,
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
              <h2 className="text-center mb-4">Social Media</h2>
              <CForm>
                <div className="d-flex flex-column mb-3">
                  <CFormLabel htmlFor="facebook">Facebook</CFormLabel>
                  <CFormInput
                    type="text"
                    id="facebook"
                    name="facebook"
                    placeholder="Facebook"
                    value={links.facebook}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column mb-3">
                  <CFormLabel htmlFor="twitter">Twitter</CFormLabel>
                  <CFormInput
                    type="text"
                    id="twitter"
                    name="twitter"
                    placeholder="Twitter"
                    value={links.twitter}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column mb-3">
                  <CFormLabel htmlFor="instagram">Instagram</CFormLabel>
                  <CFormInput
                    type="text"
                    id="instagram"
                    name="instagram"
                    placeholder="Instagram"
                    value={links.instagram}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column mb-3">
                  <CFormLabel htmlFor="youtube">Youtube</CFormLabel>
                  <CFormInput
                    type="text"
                    id="youtube"
                    name="youtube"
                    placeholder="Youtube"
                    value={links.youtube}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex flex-column mb-3">
                  <CFormLabel htmlFor="linkedin">LinkedIn</CFormLabel>
                  <CFormInput
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    placeholder="LinkedIn"
                    value={links.linkedin}
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

export default SocialMedia





// Dynamic Ui
// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
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
// import { useSaveSocialMediaLinksMutation } from './service/socialMediaApiSlice'

// const SocialMedia = () => {
//   const [links, setLinks] = useState({
//     facebook: '',
//     twitter: '',
//     instagram: '',
//     youtube: '',
//     linkedin: '',
//   })

//   const [saveSocialMediaLinks, { isLoading, isSuccess, isError, error }] = useSaveSocialMediaLinksMutation()

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setLinks({
//       ...links,
//       [name]: value,
//     })
//   }

//   const handleSave = async () => {
//     try {
//       await saveSocialMediaLinks(links).unwrap()
//       // Add any success handling here
//     } catch (err) {
//       // Add any error handling here
//     }
//   }

//   return (
//     <CContainer>
//       <CRow className="justify-content-center mt-4">
//         <CCol md="8">
//           <CCard>
//             <CCardBody>
//               <h2 className="text-center mb-4">Social Media</h2>
//               <CForm>
//                 <CRow className="mb-3">
//                   <CFormLabel htmlFor="facebook" className="col-sm-2 col-form-label">Facebook</CFormLabel>
//                   <CCol sm="10">
//                     <CFormInput
//                       type="text"
//                       id="facebook"
//                       name="facebook"
//                       placeholder="Facebook"
//                       value={links.facebook}
//                       onChange={handleChange}
//                     />
//                   </CCol>
//                 </CRow>
//                 <CRow className="mb-3">
//                   <CFormLabel htmlFor="twitter" className="col-sm-2 col-form-label">Twitter</CFormLabel>
//                   <CCol sm="10">
//                     <CFormInput
//                       type="text"
//                       id="twitter"
//                       name="twitter"
//                       placeholder="Twitter"
//                       value={links.twitter}
//                       onChange={handleChange}
//                     />
//                   </CCol>
//                 </CRow>
//                 <CRow className="mb-3">
//                   <CFormLabel htmlFor="instagram" className="col-sm-2 col-form-label">Instagram</CFormLabel>
//                   <CCol sm="10">
//                     <CFormInput
//                       type="text"
//                       id="instagram"
//                       name="instagram"
//                       placeholder="Instagram"
//                       value={links.instagram}
//                       onChange={handleChange}
//                     />
//                   </CCol>
//                 </CRow>
//                 <CRow className="mb-3">
//                   <CFormLabel htmlFor="youtube" className="col-sm-2 col-form-label">Youtube</CFormLabel>
//                   <CCol sm="10">
//                     <CFormInput
//                       type="text"
//                       id="youtube"
//                       name="youtube"
//                       placeholder="Youtube"
//                       value={links.youtube}
//                       onChange={handleChange}
//                     />
//                   </CCol>
//                 </CRow>
//                 <CRow className="mb-3">
//                   <CFormLabel htmlFor="linkedin" className="col-sm-2 col-form-label">LinkedIn</CFormLabel>
//                   <CCol sm="10">
//                     <CFormInput
//                       type="text"
//                       id="linkedin"
//                       name="linkedin"
//                       placeholder="LinkedIn"
//                       value={links.linkedin}
//                       onChange={handleChange}
//                     />
//                   </CCol>
//                 </CRow>
//                 <CRow className="justify-content-end">
//                   <CCol sm="2">
//                     <CButton color="primary" onClick={handleSave} disabled={isLoading}>
//                       {isLoading ? 'Saving...' : 'Save'}
//                     </CButton>
//                   </CCol>
//                 </CRow>
//                 {isError && (
//                   <CRow className="mt-3">
//                     <CCol>
//                       <div className="text-danger">{error?.data?.message || 'Failed to save data'}</div>
//                     </CCol>
//                   </CRow>
//                 )}
//                 {isSuccess && (
//                   <CRow className="mt-3">
//                     <CCol>
//                       <div className="text-success">Data saved successfully!</div>
//                     </CCol>
//                   </CRow>
//                 )}
//               </CForm>
//             </CCardBody>
//           </CCard>
//         </CCol>
//       </CRow>
//     </CContainer>
//   )
// }

// export default SocialMedia
