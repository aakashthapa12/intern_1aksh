
import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import swal from 'sweetalert';
import axios from 'axios';

function ApplicationName() {
    const [loading, setLoading] = useState(false);
    const [applicationName, setApplicationName] = useState('');
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

                if (result && result.appName) {
                    const appName = result.appName; // Access the first object in the appName array
                    setConfigData(result); // Store entire configuration data
                    setApplicationName(appName.applicationName || '');
                } else {
                    setConfigData(null); // No application name configuration found
                }
            }
        } catch (error) {
            console.error('Error fetching configuration:', error);
        }
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setApplicationName(value);
    };

    const handleSubmit = async () => {
        setLoading(true);
        const data = {
            appName: applicationName // Send applicationName in the correct structure
        };

        try {
            const response = await axios.post('http://localhost:5000/api/v1/config/application/name', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200 || response.status === 201) { // Assuming your backend responds with 200 or 201 for successful updates
                setLoading(false);
                swal('Success!', response.data.message, 'success');

                // After successful submission, update the local state
                setConfigData({
                    appName: [{ applicationName }]
                });
            } else {
                setLoading(false);
                swal('Error!', 'Failed to update application name', 'error');
            }
        } catch (error) {
            setLoading(false);
            console.error('Error updating application name:', error);
            swal('Error!', 'Failed to update application name', 'error');
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
                                    <h1 className="text-left head-small">Application Name</h1>

                                    {configData ? (
                                        <div className="mt-4">
                                            <h2>Current Configuration:</h2>
                                            <p>Application Name: {configData.appName || '-'}</p>
                                        </div>
                                    ) : (
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label htmlFor="applicationName" className="label-100 mt-3">
                                                            Application Name
                                                        </label>
                                                        <input
                                                            value={applicationName}
                                                            type="text"
                                                            name="applicationName"
                                                            onChange={handleChange}
                                                            className="form-control input-field"
                                                            id="applicationName"
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

export default ApplicationName;
