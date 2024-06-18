
import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import swal from 'sweetalert';
import axios from 'axios';

function CopyrightMessage() {
    const [loading, setLoading] = useState(false);
    const [copyrightMessage, setCopyRightMessage] = useState('');
    const [configData, setConfigData] = useState(null);

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

                if (result) {
                    setConfigData(result);
                    setCopyRightMessage(result.copyrightMessage || '');
                } else {
                    setConfigData(null);
                }
            }
        } catch (error) {
            console.error('Error fetching configuration:', error);
        }
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setCopyRightMessage(value);
    };

    const handleSubmit = async () => {
        setLoading(true);
        const data = {
            copyright : copyrightMessage // Send copyrightMessage directly
        };

        try {
            const response = await axios.post('http://localhost:5000/api/v1/config/copyright/message', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200 || response.status === 201) {
                setLoading(false);
                swal('Success!', response.data.message, 'success');

                // Fetch the latest configuration after successful submission
                getConfiguration();

            } else {
                setLoading(false);
                swal('Error!', 'Failed to update copyright message', 'error');
            }
        } catch (error) {
            setLoading(false);
            console.error('Error updating copyright message:', error);
            swal('Error!', 'Failed to update copyright message', 'error');
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
                                    <h1 className="text-left head-small">Copyright Message</h1>

                                    {configData ? (
                                        <div className="mt-4">
                                            <h2>Current Configuration:</h2>
                                            {/* <p>Copyright Message: {configData.copyrightMessage || '-'}</p> */}
                                            <p>Copyright Message: {configData.copyrightMessage || '-'}</p>
                                        </div>
                                    ) : (
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label htmlFor="copyrightMessage" className="label-100 mt-3">
                                                            Copyright Message
                                                        </label>
                                                        <input
                                                            value={copyrightMessage}
                                                            type="text"
                                                            name="copyrightMessage"
                                                            onChange={handleChange}
                                                            className="form-control input-field"
                                                            id="copyrightMessage"
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

export default CopyrightMessage;

















