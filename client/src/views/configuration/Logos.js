





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
//     <CContainer className="my-3">
//       <CRow className="justify-content-center">
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















// import React, { useEffect, useState } from "react";

// import swal from "sweetalert";
// import ClipLoader from "react-spinners/ClipLoader";
// import { Link } from "react-router-dom";
// import axios from "axios";
// // import { isAutheticated } from "src/auth";

// function Logo() {
//   const [loading, setLoading] = useState(false);
//   const [Headerlogo, setHeaderlogo] = useState("");
//   const [Footerlogo, setFooterlogo] = useState("");
//   const [Adminlogo, setAdminlogo] = useState("");
//   const [display, setDisplay] = useState(true);
//   // const token = isAutheticated();

//   // urlcreated images

//   const [HeaderlogoUrl, setHeaderlogoUrl] = useState("");
//   const [FooterlogoUrl, setFooterlogoUrl] = useState("");
//   const [AdminlogoUrl, setAdminlogoUrl] = useState("");

//   useEffect(() => {
//     async function getConfiguration() {
//       const configDetails = await axios.get(`/api/config`);

//       configDetails.data.result.map((item) => {
//         setHeaderlogo(item?.logo[0]?.Headerlogo);
//         setFooterlogo(item?.logo[0]?.Footerlogo);
//         setAdminlogo(item?.logo[0]?.Adminlogo);
//       });
//     }
//     getConfiguration();
//   }, []);

//   // async function handelChange(e) {
//   //   setDisplay(false);
//   //   console.log(e.target.name === "Logo htmlFor Website Header(148 x 48 px)");
//   //   if (e.target.name === "Logo htmlFor Website Header(148 x 48 px)") {
//   //     console.log(e.target.files[0]);
//   //     setHeaderlogo(e.target.files[0]);
//   //   } else if (e.target.name === "Logo htmlFor Website Footer(148 x 48 px)") {
//   //     setFooterlogo(e.target.files[0]);
//   //   } else if (e.target.name === "Logo htmlFor Admin Header(148 x 48 px)") {
//   //     setAdminlogo(e.target.files[0]);
//   //   }
//   // }

//   async function handelSubmit() {
//     setLoading(true);

//     const formdata = new FormData();
//     formdata.append("Headerlogo", Headerlogo);
//     formdata.append("Footerlogo", Footerlogo);
//     formdata.append("Adminlogo", Adminlogo);

//     await axios
//       .post(`/api/config/logo`, formdata, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/formdata",
//           "Access-Control-Allow-Origin": "*",
//         },
//       })
//       .then((res) => {
//         setLoading(false);
//         swal("Success!", res.data.message, res.data.status);
//       })
//       .catch((error) => {
//         setLoading(false);
//       });
//   }

//   return (
//     <div>
//       <div className="main-content">
//         <div className="page-content">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="card">
//                   <div className="card-body">
//                     <div className="row">
//                       <div className="col-md-12 col-lg-6 col-xl-6">
//                         <h1 className="text-left head-small">Logo</h1>

//                         <form>
//                           <div className="row">
//                             <div className="col-lg-12">
//                               <div className="form-group">
//                                 <>
//                                   <label
//                                     htmlFor="basicpill-phoneno-input"
//                                     className="label-100 mt-3"
//                                     style={{ fontWeight: "bold" }}
//                                   >
//                                     Header Logo for user Website <br />
//                                   </label>
//                                   <div>
//                                     <input
//                                       type="file"
//                                       name="Logo  htmlFor Website Header(148 x 48 px)"
//                                       onChange={(e) => {
//                                         setHeaderlogo(e.target.files[0]);
//                                         if (
//                                           e.target.files &&
//                                           e.target.files[0]
//                                         ) {
//                                           setHeaderlogoUrl({
//                                             image: URL.createObjectURL(
//                                               e.target.files[0]
//                                             ),
//                                           });
//                                           console.log(setHeaderlogoUrl);
//                                         }
//                                       }}
//                                       className="form-control input-field mb-3 col-md-6 d-inline-block"
//                                       id="basicpill-phoneno-input"
//                                     />
//                                     {display ? (
//                                       <img
//                                         className="ms-1"
//                                         style={{ width: "100px" }}
//                                         src={
//                                           HeaderlogoUrl.image
//                                             ? HeaderlogoUrl.image
//                                             : Headerlogo
//                                         }
//                                         alt=""
//                                       />
//                                     ) : (
//                                       ""
//                                     )}
//                                   </div>
//                                   <label
//                                     htmlFor="basicpill-phoneno-input"
//                                     className="label-100 mt-3"
//                                     style={{ fontWeight: "bold" }}
//                                   >
//                                     {/* Logo htmlFor Website Footer(148 x 48 px) */}
//                                     Footer logo for user Website <br />
//                                   </label>
//                                   <br />
//                                   <input
//                                     type="file"
//                                     name="Logo htmlFor Website Footer(148 x 48 px)"
//                                     onChange={(e) => {
//                                       setFooterlogo(e.target.files[0]);

//                                       if (e.target.files && e.target.files[0]) {
//                                         setFooterlogoUrl({
//                                           image: URL.createObjectURL(
//                                             e.target.files[0]
//                                           ),
//                                         });
//                                       }
//                                     }}
//                                     className="form-control input-field mt-1 col-md-6 d-inline-block"
//                                     id="basicpill-phoneno-input"
//                                   />{" "}
//                                   {display ? (
//                                     <img
//                                       style={{ width: "100px" }}
//                                       src={
//                                         FooterlogoUrl.image
//                                           ? FooterlogoUrl.image
//                                           : Footerlogo
//                                       }
//                                       alt=""
//                                     />
//                                   ) : (
//                                     ""
//                                   )}
//                                   <label
//                                     htmlFor="basicpill-phoneno-input"
//                                     className="label-100 mt-2 row ms-1"
//                                     style={{ fontWeight: "bold" }}
//                                   >
//                                     {/* Logo htmlFor Admin Header(148 x 48 px) */}
//                                     Logo for admin website <br />
//                                   </label>
//                                   <input
//                                     type="file"
//                                     name="Logo htmlFor Admin Header(148 x 48 px)"
//                                     onChange={(e) => {
//                                       setAdminlogo(e.target.files[0]);

//                                       if (e.target.files && e.target.files[0]) {
//                                         setAdminlogoUrl({
//                                           image: URL.createObjectURL(
//                                             e.target.files[0]
//                                           ),
//                                         });
//                                       }
//                                     }}
//                                     className="form-control input-field col-md-6 d-inline-block"
//                                     id="basicpill-phoneno-input"
//                                   />{" "}
//                                   {display ? (
//                                     <img
//                                       style={{ width: "100px" }}
//                                       src={
//                                         AdminlogoUrl.image
//                                           ? AdminlogoUrl.image
//                                           : Adminlogo
//                                       }
//                                       alt=""
//                                     />
//                                   ) : (
//                                     ""
//                                   )}
//                                 </>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="row">
//                             <div className="col-lg-12">
//                               <div className="form-group text-left">
//                                 <button
//                                   type="button"
//                                   disabled={
//                                     Adminlogo === "" ||
//                                     Footerlogo === "" ||
//                                     Headerlogo === ""
//                                   }
//                                   onClick={handelSubmit}
//                                   className="btn btn-success btn-login waves-effect waves-light mr-3 pt-2 pb-2 pr-4 pl-4"
//                                 >
//                                   <ClipLoader loading={loading} size={18} />
//                                   {!loading && "Save"}
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     </div>

//                     {/* <!-- end table-responsive --> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <!-- container-fluid --> */}
//         </div>
//         {/* <!-- End Page-content --> */}
//       </div>
//     </div>
//   );
// }

// export default Logo;










// import React, { useEffect, useState } from "react";
// import swal from "sweetalert";
// import ClipLoader from "react-spinners/ClipLoader";
// import axios from "axios";

// function Logo() {
//   const [loading, setLoading] = useState(false);
//   const [headerLogo, setHeaderLogo] = useState(null);
//   const [footerLogo, setFooterLogo] = useState(null);
//   const [adminLogo, setAdminLogo] = useState(null);
//   const [headerLogoUrl, setHeaderLogoUrl] = useState("");
//   const [footerLogoUrl, setFooterLogoUrl] = useState("");
//   const [adminLogoUrl, setAdminLogoUrl] = useState("");

//   useEffect(() => {
//     async function getConfiguration() {
//       const configDetails = await axios.get(`/api/config`);
//       if (configDetails.data.result.length > 0) {
//         const config = configDetails.data.result[0];
//         if (config.logo[0]) {
//           setHeaderLogoUrl(`data:image/png;base64,${config.logo[0].Headerlogo}`);
//           setFooterLogoUrl(`data:image/png;base64,${config.logo[0].Footerlogo}`);
//           setAdminLogoUrl(`data:image/png;base64,${config.logo[0].Adminlogo}`);
//         }
//       }
//     }
//     getConfiguration();
//   }, []);

//   const handleFileChange = (e, setLogo, setLogoUrl) => {
//     const file = e.target.files[0];
//     setLogo(file);
//     setLogoUrl(URL.createObjectURL(file));
//   };

//   const handleSubmit = async () => {
//     setLoading(true);

//     const formData = new FormData();
//     if (headerLogo) formData.append("Headerlogo", headerLogo);
//     if (footerLogo) formData.append("Footerlogo", footerLogo);
//     if (adminLogo) formData.append("Adminlogo", adminLogo);

//     try {
//       const response = await axios.post(`/api/config/logo`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setLoading(false);
//       swal("Success!", response.data.message, "success");

//       // Fetch the updated configuration to update the UI
//       const updatedConfig = await axios.get(`/api/config`);
//       if (updatedConfig.data.result.length > 0) {
//         const config = updatedConfig.data.result[0];
//         if (config.logo[0]) {
//           setHeaderLogoUrl(`data:image/png;base64,${config.logo[0].Headerlogo}`);
//           setFooterLogoUrl(`data:image/png;base64,${config.logo[0].Footerlogo}`);
//           setAdminLogoUrl(`data:image/png;base64,${config.logo[0].Adminlogo}`);
//         }
//       }
//     } catch (error) {
//       setLoading(false);
//       swal("Error!", "Failed to upload logos", "error");
//     }
//   };

//   return (
//     <div className="main-content">
//       <div className="page-content">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="card">
//                 <div className="card-body">
//                   <div className="row">
//                     <div className="col-md-12 col-lg-6 col-xl-6">
//                       <h1 className="text-left head-small">Logo</h1>
//                       <form>
//                         <div className="row">
//                           <div className="col-lg-12">
//                             <div className="form-group">
//                               <label
//                                 htmlFor="headerLogo"
//                                 className="label-100 mt-3"
//                                 style={{ fontWeight: "bold" }}
//                               >
//                                 Header Logo for User Website
//                               </label>
//                               <input
//                                 type="file"
//                                 name="headerLogo"
//                                 onChange={(e) => handleFileChange(e, setHeaderLogo, setHeaderLogoUrl)}
//                                 className="form-control input-field mb-3 col-md-6 d-inline-block"
//                               />
//                               {headerLogoUrl && (
//                                 <img
//                                   className="ms-1"
//                                   style={{ width: "100px" }}
//                                   src={headerLogoUrl}
//                                   alt="Header Logo"
//                                 />
//                               )}
//                               <label
//                                 htmlFor="footerLogo"
//                                 className="label-100 mt-3"
//                                 style={{ fontWeight: "bold" }}
//                               >
//                                 Footer Logo for User Website
//                               </label>
//                               <input
//                                 type="file"
//                                 name="footerLogo"
//                                 onChange={(e) => handleFileChange(e, setFooterLogo, setFooterLogoUrl)}
//                                 className="form-control input-field mb-3 col-md-6 d-inline-block"
//                               />
//                               {footerLogoUrl && (
//                                 <img
//                                   className="ms-1"
//                                   style={{ width: "100px" }}
//                                   src={footerLogoUrl}
//                                   alt="Footer Logo"
//                                 />
//                               )}
//                               <label
//                                 htmlFor="adminLogo"
//                                 className="label-100 mt-3"
//                                 style={{ fontWeight: "bold" }}
//                               >
//                                 Admin Logo
//                               </label>
//                               <input
//                                 type="file"
//                                 name="adminLogo"
//                                 onChange={(e) => handleFileChange(e, setAdminLogo, setAdminLogoUrl)}
//                                 className="form-control input-field mb-3 col-md-6 d-inline-block"
//                               />
//                               {adminLogoUrl && (
//                                 <img
//                                   className="ms-1"
//                                   style={{ width: "100px" }}
//                                   src={adminLogoUrl}
//                                   alt="Admin Logo"
//                                 />
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row">
//                           <div className="col-lg-12">
//                             <div className="form-group text-left">
//                               <button
//                                 type="button"
//                                 onClick={handleSubmit}
//                                 className="btn btn-success btn-login waves-effect waves-light mr-3 pt-2 pb-2 pr-4 pl-4"
//                                 disabled={loading}
//                               >
//                                 <ClipLoader loading={loading} size={18} />
//                                 {!loading && "Save"}
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                   {/* <!-- end table-responsive --> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <!-- container-fluid --> */}
//       </div>
//       {/* <!-- End Page-content --> */}
//     </div>
//   );
// }

// export default Logo;






import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

function Logo() {
  const [loading, setLoading] = useState(false);
  const [headerLogo, setHeaderLogo] = useState(null);
  const [footerLogo, setFooterLogo] = useState(null);
  const [adminLogo, setAdminLogo] = useState(null);
  const [headerLogoUrl, setHeaderLogoUrl] = useState("");
  const [footerLogoUrl, setFooterLogoUrl] = useState("");
  const [adminLogoUrl, setAdminLogoUrl] = useState("");

  useEffect(() => {
    async function getConfiguration() {
      try {
        const configDetails = await axios.get(`http://localhost:5000/api/v1/config`);
        if (configDetails.data && configDetails.data.result.length > 0) {
          const config = configDetails.data.result[0];
          if (config.logo[0]) {
            setHeaderLogoUrl(`data:image/png;base64,${config.logo[0].Headerlogo}`);
            setFooterLogoUrl(`data:image/png;base64,${config.logo[0].Footerlogo}`);
            setAdminLogoUrl(`data:image/png;base64,${config.logo[0].Adminlogo}`);
          }
        }
      } catch (error) {
        console.error('Error fetching configuration:', error);
      }
    }
    getConfiguration();
  }, []);

  const handleFileChange = (e, setLogo, setLogoUrl) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);
    setLogo(file);
    setLogoUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    setLoading(true);

    const formData = new FormData();
    if (headerLogo) formData.append("Headerlogo", headerLogo);
    if (footerLogo) formData.append("Footerlogo", footerLogo);
    if (adminLogo) formData.append("Adminlogo", adminLogo);

    try {
      const response = await axios.post(`http://localhost:5000/api/v1/config/logo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setLoading(false);
      swal("Success!", response.data.message, "success");

      // Fetch the updated configuration to update the UI
      const updatedConfig = await axios.get(`/api/config`);
      if (updatedConfig.data && updatedConfig.data.result.length > 0) {
        const config = updatedConfig.data.result[0];
        if (config.logo[0]) {
          setHeaderLogoUrl(`data:image/png;base64,${config.logo[0].Headerlogo}`);
          setFooterLogoUrl(`data:image/png;base64,${config.logo[0].Footerlogo}`);
          setAdminLogoUrl(`data:image/png;base64,${config.logo[0].Adminlogo}`);
        }
      }
    } catch (error) {
      setLoading(false);
      swal("Error!", "Failed to upload logos", "error");
    }
  };

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-6 col-xl-6">
                      <h1 className="text-left head-small">Logo</h1>
                      <form>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label
                                htmlFor="headerLogo"
                                className="label-100 mt-3"
                                style={{ fontWeight: "bold" }}
                              >
                                Header Logo for User Website
                              </label>
                              <input
                                type="file"
                                name="headerLogo"
                                onChange={(e) => handleFileChange(e, setHeaderLogo, setHeaderLogoUrl)}
                                className="form-control input-field mb-3 col-md-6 d-inline-block"
                              />
                              {headerLogoUrl && (
                                <img
                                  className="ms-1"
                                  style={{ width: "100px" }}
                                  src={headerLogoUrl}
                                  alt="Header Logo"
                                />
                              )}
                              <label
                                htmlFor="footerLogo"
                                className="label-100 mt-3"
                                style={{ fontWeight: "bold" }}
                              >
                                Footer Logo for User Website
                              </label>
                              <input
                                type="file"
                                name="footerLogo"
                                onChange={(e) => handleFileChange(e, setFooterLogo, setFooterLogoUrl)}
                                className="form-control input-field mb-3 col-md-6 d-inline-block"
                              />
                              {footerLogoUrl && (
                                <img
                                  className="ms-1"
                                  style={{ width: "100px" }}
                                  src={footerLogoUrl}
                                  alt="Footer Logo"
                                />
                              )}
                              <label
                                htmlFor="adminLogo"
                                className="label-100 mt-3"
                                style={{ fontWeight: "bold" }}
                              >
                                Admin Logo
                              </label>
                              <input
                                type="file"
                                name="adminLogo"
                                onChange={(e) => handleFileChange(e, setAdminLogo, setAdminLogoUrl)}
                                className="form-control input-field mb-3 col-md-6 d-inline-block"
                              />
                              {adminLogoUrl && (
                                <img
                                  className="ms-1"
                                  style={{ width: "100px" }}
                                  src={adminLogoUrl}
                                  alt="Admin Logo"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group text-left">
                              <button
                                type="button"
                                onClick={handleSubmit}
                                className="btn btn-success btn-login waves-effect waves-light mr-3 pt-2 pb-2 pr-4 pl-4"
                                disabled={loading}
                              >
                                <ClipLoader loading={loading} size={18} />
                                {!loading && "Save"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;














