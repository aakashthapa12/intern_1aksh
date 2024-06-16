


import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import swal from 'sweetalert';
import axios from 'axios';

function Socialmedia() {
    const [loading, setLoading] = useState(false);
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [twitter, setTwitter] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [youtube, setYoutube] = useState('');
    const [configData, setConfigData] = useState(null); // State to store entire configuration data

    useEffect(() => {
        // Fetch initial configuration when component mounts
        getConfiguration();
    }, []);

    const getConfiguration = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/config', {
                headers: {
                    'Cache-Control': 'no-cache',
                    Pragma: 'no-cache',
                    Expires: '0',
                },
            });

            if (response.status === 200) {
                const result = response.data.result; // Fetch the configuration object directly

                if (result && result.socialMedia && result.socialMedia.length > 0) {
                    const socialMedia = result.socialMedia[0]; // Access the first object in the socialMedia array
                    setConfigData(result); // Store entire configuration data
                    setFacebook(socialMedia.facebook || '');
                    setInstagram(socialMedia.instagram || '');
                    setTwitter(socialMedia.twitter || '');
                    setLinkedin(socialMedia.linkedin || '');
                    setYoutube(socialMedia.youtube || '');
                } else {
                    setConfigData(null); // No social media configuration found
                }
            }
        } catch (error) {
            console.error('Error fetching configuration:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'facebook':
                setFacebook(value);
                break;
            case 'twitter':
                setTwitter(value);
                break;
            case 'instagram':
                setInstagram(value);
                break;
            case 'linkedin':
                setLinkedin(value);
                break;
            case 'youtube':
                setYoutube(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async () => {
        setLoading(true);
        const data = {
            facebook,
            twitter,
            instagram,
            linkedin,
            youtube
        };

        try {
            const response = await axios.post('http://localhost:5000/api/v1/config/social', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 201) {
                setLoading(false);
                swal('Success!', response.data.message, 'success');

                // After successful submission, update the local state
                setConfigData({
                    socialMedia: [{ ...data }]
                });
            } else {
                setLoading(false);
                swal('Error!', 'Failed to update social media links', 'error');
            }
        } catch (error) {
            setLoading(false);
            console.error('Error updating social media links:', error);
            swal('Error!', 'Failed to update social media links', 'error');
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
                                    <h1 className="text-left head-small">Social Media</h1>

                                    {configData ? (
                                        <div className="mt-4">
                                            <h2>Current Configuration:</h2>
                                            <p>Facebook: {configData.socialMedia[0].facebook || '-'}</p>
                                            <p>Twitter: {configData.socialMedia[0].twitter || '-'}</p>
                                            <p>Instagram: {configData.socialMedia[0].instagram || '-'}</p>
                                            <p>Youtube: {configData.socialMedia[0].youtube || '-'}</p>
                                            <p>Linkedin: {configData.socialMedia[0].linkedin || '-'}</p>
                                        </div>
                                    ) : (
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label htmlFor="facebook" className="label-100 mt-3">
                                                            Facebook
                                                        </label>
                                                        <input
                                                            value={facebook}
                                                            type="text"
                                                            name="facebook"
                                                            onChange={handleChange}
                                                            className="form-control input-field"
                                                            id="facebook"
                                                        />

                                                        <label htmlFor="twitter" className="label-100 mt-3">
                                                            Twitter
                                                        </label>
                                                        <input
                                                            value={twitter}
                                                            type="text"
                                                            name="twitter"
                                                            onChange={handleChange}
                                                            className="form-control input-field"
                                                            id="twitter"
                                                        />

                                                        <label htmlFor="instagram" className="label-100 mt-3">
                                                            Instagram
                                                        </label>
                                                        <input
                                                            value={instagram}
                                                            type="text"
                                                            name="instagram"
                                                            onChange={handleChange}
                                                            className="form-control input-field"
                                                            id="instagram"
                                                        />

                                                        <label htmlFor="youtube" className="label-100 mt-3">
                                                            Youtube
                                                        </label>
                                                        <input
                                                            value={youtube}
                                                            type="text"
                                                            name="youtube"
                                                            onChange={handleChange}
                                                            className="form-control input-field"
                                                            id="youtube"
                                                        />

                                                        <label htmlFor="linkedin" className="label-100 mt-3">
                                                            Linkedin
                                                        </label>
                                                        <input
                                                            value={linkedin}
                                                            type="text"
                                                            name="linkedin"
                                                            onChange={handleChange}
                                                            className="form-control input-field"
                                                            id="linkedin"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mt-1">
                                                <div className="col-lg-12">
                                                    <div className="form-group text-left">
                                                        <button
                                                            type="button"
                                                            onClick={handleSubmit}
                                                            className="btn btn-success btn-login waves-effect waves-light me-3 pt-2 pb-2 pr-4 pl-4"
                                                        >
                                                            <ClipLoader loading={loading} size={18} />
                                                            {!loading ? 'Save' : 'Saving...'}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Socialmedia;
