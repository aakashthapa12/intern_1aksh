// import React, { useState, useEffect } from 'react'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCol,
//   CContainer,
//   CForm,
//   CFormLabel,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CFormCheck,
//   CRow,
//   CFormSelect,
//   CSpinner,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilUser, cilLockLocked, cilBriefcase, cilGlobeAlt } from '@coreui/icons'
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { useRegisterMutation } from '../../../app/service/usersApiSlice'
// import { setCredentials } from '../../../app/features/auth/authSlice'
// import CountiresList from '../../../utils/CountiresList'

// const Register = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [repeatPassword, setRepeatPassword] = useState('')

//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const [register, { isLoading }] = useRegisterMutation()

//   const { userInfo } = useSelector((state) => state.auth)

//   useEffect(() => {
//     if (userInfo) {
//       navigate('/dashboard')
//     }
//   }, [])

//   const submitHandler = async (e) => {
//     e.preventDefault()

//     if (password !== repeatPassword) {
//       return toast.error('Password and Confrim password are not same.')
//     }

//     try {
//       const res = await register({ name, email, password }).unwrap()
//       console.log(res)
//       dispatch(setCredentials({ ...res }))
//       toast.success('Sign Up Successful! Welcome to the dashboard. 🚀')
//       navigate('/dashboard')
//     } catch (err) {
//       toast.error(err?.data?.message || err.error)
//     }
//   }

//   return (
//     <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={9} lg={7} xl={6}>
//             <CCard className="mx-4">
//               <CCardBody className="p-4">
//                 <CForm onSubmit={submitHandler}>
//                   <h1>Register</h1>
//                   <p className="text-body-secondary">Create your account</p>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                       placeholder="Name"
//                       type="text"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       required
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>@</CInputGroupText>
//                     <CFormInput
//                       type="email"
//                       placeholder="Email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilLockLocked} />
//                     </CInputGroupText>
//                     <CFormInput
//                       type="password"
//                       placeholder="Password"
//                       minLength={8}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilLockLocked} />
//                     </CInputGroupText>
//                     <CFormInput
//                       type="password"
//                       placeholder="Confirm Password"
//                       minLength={8}
//                       value={repeatPassword}
//                       onChange={(e) => setRepeatPassword(e.target.value)}
//                       required
//                     />
//                   </CInputGroup>
                  
//                   <CFormCheck
//                     required
//                     className="mb-4"
//                     label="I agree with Privacy Policy and Terms of use"
//                   />
//                   <div className="d-grid mb-3">
//                     <CButton color="success" type="submit" disabled={isLoading}>
//                       {isLoading ? <CSpinner size="sm" /> : 'Sign Up'}
//                     </CButton>
//                   </div>
//                   <div className="mt-3 text-center">
//                     <span>Already have an account? </span>
//                     <a href="/login">Sign in</a>
//                   </div>
//                 </CForm>
//               </CCardBody>
//             </CCard>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   )
// }

// export default Register
















import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormLabel,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CFormCheck,
  CRow,
  CFormSelect,
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser, cilLockLocked, cilBriefcase, cilGlobeAlt } from '@coreui/icons'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useRegisterMutation } from '../../../app/service/usersApiSlice'
import { setCredentials } from '../../../app/features/auth/authSlice'
// import CountiresList from '../../../utils/CountiresList'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [register, { isLoading }] = useRegisterMutation()

  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard')
    }
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()

    if (password !== repeatPassword) {
      return toast.error('Password and Confrim password are not same.')
    }

    try {
      const res = await register({ name, email, password }).unwrap()
      console.log(res)
      dispatch(setCredentials({ ...res }))
      toast.success('Sign Up Successful! Welcome to the dashboard. 🚀')
      navigate('/dashboard')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={submitHandler}>
                  <h1>Register</h1>
                  <p className="text-body-secondary">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      minLength={8}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Confirm Password"
                      minLength={8}
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  
                  <CFormCheck
                    required
                    className="mb-4"
                    label="I agree with Privacy Policy and Terms of use"
                  />
                  <div className="d-grid mb-3">
                    <CButton color="success" type="submit" disabled={isLoading}>
                      {isLoading ? <CSpinner size="sm" /> : 'Sign Up'}
                    </CButton>
                  </div>
                  <div className="mt-3 text-center">
                    <span>Already have an account? </span>
                    <a href="/login">Sign in</a>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register