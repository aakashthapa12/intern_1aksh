import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

function Logo() {
  const [HeaderlogoUrl, setHeaderlogoUrl] = useState("");
  const [FooterlogoUrl, setFooterlogoUrl] = useState("");
  const [AdminlogoUrl, setAdminlogoUrl] = useState("");
  const [Headerlogo, setHeaderlogo] = useState(null);
  const [Footerlogo, setFooterlogo] = useState(null);
  const [Adminlogo, setAdminlogo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [storedHeaderLogos, setStoredHeaderLogos] = useState([]);
  const [storedFooterLogos, setStoredFooterLogos] = useState([]);
  const [storedAdminLogos, setStoredAdminLogos] = useState([]);

  useEffect(() => {
    async function getConfiguration() {
      try {
        const configResponse = await axios.get("http://localhost:5000/api/v1/config");
        console.log("Fetched configDetails: ", configResponse.data);
        if (configResponse.data.result) {
          const logoArray = configResponse.data.result.logo;
          if (logoArray.length > 0) {
            const logos = logoArray[0]; // Assuming only one object in the array
            setHeaderlogoUrl(logos.Headerlogo || "");
            setFooterlogoUrl(logos.Footerlogo || "");
            setAdminlogoUrl(logos.Adminlogo || "");
            setStoredHeaderLogos(logos.HeaderlogoList || []);
            setStoredFooterLogos(logos.FooterlogoList || []);
            setStoredAdminLogos(logos.AdminlogoList || []);
          }
        }
      } catch (error) {
        console.error("Error fetching configuration:", error);
      }
    }
    getConfiguration();
  }, []);

  async function handleSubmit() {
    setLoading(true);
    const formdata = new FormData();
    if (Headerlogo) formdata.append("Headerlogo", Headerlogo);
    if (Footerlogo) formdata.append("Footerlogo", Footerlogo);
    if (Adminlogo) formdata.append("Adminlogo", Adminlogo);

    try {
      const res = await axios.post("http://localhost:5000/api/v1/config/logo", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      swal("Success!", res.data.message, "success");

      // Refresh the logos after successful upload
      const configResponse = await axios.get("http://localhost:5000/api/v1/config");
      console.log("Refreshed configDetails: ", configResponse.data);
      if (configResponse.data.result) {
        const logoArray = configResponse.data.result.logo;
        if (logoArray.length > 0) {
          const logos = logoArray[0]; // Assuming only one object in the array
          setHeaderlogoUrl(logos.Headerlogo || "");
          setFooterlogoUrl(logos.Footerlogo || "");
          setAdminlogoUrl(logos.Adminlogo || "");
          setStoredHeaderLogos(logos.HeaderlogoList || []);
          setStoredFooterLogos(logos.FooterlogoList || []);
          setStoredAdminLogos(logos.AdminlogoList || []);
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Error uploading logos:", error);
      swal("Error!", "There was an error uploading the logos. Please try again.", "error");
    }
  }

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h1 className="text-left head-small">Logo</h1>
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="header-logo" className="label-100 mt-3" style={{ fontWeight: "bold" }}>
                            Header Logo for Website
                          </label>
                          <input
                            type="file"
                            name="Headerlogo"
                            onChange={(e) => {
                              setHeaderlogo(e.target.files[0]);
                              if (e.target.files && e.target.files[0]) {
                                setHeaderlogoUrl(URL.createObjectURL(e.target.files[0]));
                              }
                            }}
                            className="form-control input-field mb-3"
                            id="header-logo"
                          />
                          {HeaderlogoUrl && <img src={HeaderlogoUrl} alt="Header Logo" style={{ width: "100px" }} />}
                          {/* Display stored Header Logos */}
                          <div>
                            {storedHeaderLogos.map((logo, index) => (
                              <img key={index} src={logo} alt={`Header Logo ${index}`} style={{ width: "100px" }} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="footer-logo" className="label-100 mt-3" style={{ fontWeight: "bold" }}>
                            Footer Logo for Website
                          </label>
                          <input
                            type="file"
                            name="Footerlogo"
                            onChange={(e) => {
                              setFooterlogo(e.target.files[0]);
                              if (e.target.files && e.target.files[0]) {
                                setFooterlogoUrl(URL.createObjectURL(e.target.files[0]));
                              }
                            }}
                            className="form-control input-field mb-3"
                            id="footer-logo"
                          />
                          {FooterlogoUrl && <img src={FooterlogoUrl} alt="Footer Logo" style={{ width: "100px" }} />}
                          {/* Display stored Footer Logos */}
                          <div>
                            {storedFooterLogos.map((logo, index) => (
                              <img key={index} src={logo} alt={`Footer Logo ${index}`} style={{ width: "100px" }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="admin-logo" className="label-100 mt-3" style={{ fontWeight: "bold" }}>
                            Admin Logo
                          </label>
                          <input
                            type="file"
                            name="Adminlogo"
                            onChange={(e) => {
                              setAdminlogo(e.target.files[0]);
                              if (e.target.files && e.target.files[0]) {
                                setAdminlogoUrl(URL.createObjectURL(e.target.files[0]));
                              }
                            }}
                            className="form-control input-field mb-3"
                            id="admin-logo"
                          />
                          {AdminlogoUrl && <img src={AdminlogoUrl} alt="Admin Logo" style={{ width: "100px" }} />}
                          {/* Display stored Admin Logos */}
                          <div>
                            {storedAdminLogos.map((logo, index) => (
                              <img key={index} src={logo} alt={`Admin Logo ${index}`} style={{ width: "100px" }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
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
  );
}

export default Logo;
