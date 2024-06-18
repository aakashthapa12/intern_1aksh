
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';
import swal from 'sweetalert';

function Address() {
    const [loading, setLoading] = useState(false);
    const [company, setCompany] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [pincode, setPincode] = useState('');
    const [website, setWebsite] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [configData, setConfigData] = useState(null); // To store fetched configuration data

    useEffect(() => {
        getConfiguration();
    }, []);

    const getConfiguration = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/config');

            if (response.status === 200) {
                const result = response.data.result;

                if (result && result.address && result.address.length > 0) {
                    const firstAddress = result.address[0];
                    setConfigData(result);
                    setCompany(firstAddress.company || '');
                    setAddress(firstAddress.address || '');
                    setCity(firstAddress.city || '');
                    setState(firstAddress.state || '');
                    setCountry(firstAddress.country || '');
                    setPincode(firstAddress.pincode || '');
                    setWebsite(firstAddress.website || '');
                    setContact(firstAddress.contact || '');
                    setEmail(firstAddress.email || '');
                    setLatitude(firstAddress.latitude || '');
                    setLongitude(firstAddress.longitude || '');
                }
            }
        } catch (error) {
            console.error('Error fetching configuration:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'company name':
                setCompany(value);
                break;
            case 'address':
                setAddress(value);
                break;
            case 'city':
                setCity(value);
                break;
            case 'state':
                setState(value);
                break;
            case 'country':
                setCountry(value);
                break;
            case 'pincode':
                setPincode(value);
                break;
            case 'website':
                setWebsite(value);
                break;
            case 'contact number':
                setContact(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'latitude':
                setLatitude(value);
                break;
            case 'longitude':
                setLongitude(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async () => {
        setLoading(true);
        const data = {
            company,
            address,
            city,
            state,
            country,
            pincode,
            website,
            contact,
            email,
            latitude,
            longitude,
        };

        try {
            const response = await axios.post('http://localhost:5000/api/v1/config/address', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200 || response.status === 201) {
                setLoading(false);
                swal('Success!', response.data.message, 'success');

                // Update the local state with the saved configuration
                setConfigData({
                    ...configData,
                    address: [{
                        company,
                        address,
                        city,
                        state,
                        country,
                        pincode,
                        website,
                        contact,
                        email,
                        latitude,
                        longitude,
                    }],
                });
            } else {
                setLoading(false);
                swal('Error!', 'Failed to update address', 'error');
            }
        } catch (error) {
            setLoading(false);
            console.error('Error updating address:', error);
            swal('Error!', 'Failed to update address', 'error');
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
                                    {configData ? (
                                        <div className="mt-4">
                                            <h2>Current Configuration:</h2>
                                            <p>Company Name: {company}</p>
                                            <p>Address: {address}</p>
                                            <p>City: {city}</p>
                                            <p>State: {state}</p>
                                            <p>Country: {country}</p>
                                            <p>Pin Code: {pincode}</p>
                                            <p>Website: {website}</p>
                                            <p>Contact Number: {contact}</p>
                                            <p>Email: {email}</p>
                                            <p>Latitude: {latitude}</p>
                                            <p>Longitude: {longitude}</p>
                                        </div>
                                    ) : (
                                        <>
                                            <h1 className="text-left head-small">Address</h1>

                                            <form>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <label htmlFor="companyName" className="label-100 mt-3">
                                                                Company Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="company name"
                                                                value={company}
                                                                onChange={handleChange}
                                                                className="form-control input-field"
                                                                id="companyName"
                                                            />

                                                            <label htmlFor="address" className="label-100 mt-3">
                                                                Address
                                                            </label>
                                                            <input
                                                                value={address}
                                                                type="text"
                                                                name="address"
                                                                onChange={handleChange}
                                                                className="form-control input-field"
                                                                id="address"
                                                            />

                                                            <label htmlFor="city" className="label-100 mt-3">
                                                                City
                                                            </label>
                                                            <input
                                                                value={city}
                                                                type="text"
                                                                name="city"
                                                                onChange={handleChange}
                                                                className="form-control input-field"
                                                                id="city"
                                                            />

                                                            <label htmlFor="state" className="label-100 mt-3">
                                                                State
                                                            </label>
                                                            <input
                                                                value={state}
                                                                type="text"
                                                                name="state"
                                                                onChange={handleChange}
                                                                className="form-control input-field"
                                                                id="state"
                                                            />

                                                            <label htmlFor="country" className="label-100 mt-3">
                                                                Country
                                                            </label>
                                                            <input
                                                                value={country}
                                                                type="text"
                                                                name="country"
                                                                onChange={handleChange}
                                                                className="form-control input-field"
                                                                id="country"
                                                            />

                                                            <label htmlFor="pincode" className="label-100 mt-3">
                                                                Pin Code
                                                            </label>
                                                            <input
                                                                value={pincode}
                                                                type="text"
                                                                name="pincode"
                                                                onChange={handleChange}
                                                                className="form-control input-field"
                                                                id="pincode"
                                                            />

                                                            <label htmlFor="website" className="label-100 mt-3">
                                                                Website
                                                            </label>
                                                            <input
                                                                value={website}
                                                                type="text"
                                                                name="website"
                                                                onChange={handleChange}
                                                                className="form-control input-field"
                                                                id="website"
                                                            />

                                                            <label htmlFor="contactNumber" className="label-100 mt-3">
                                                                Contact Number
                                                            </label>
                                                            <input
                                                                value={contact}
                                                                type="text"
                                                                name="contact number"
                                                                onChange={handleChange}
                                                                className="form-control input-field"
                                                                id="contactNumber"
                                                            />

                                                            <label htmlFor="email" className="label-100 mt-3">
                                                                Email
                                                            </label>
                                                            <input
                                                                value={email}
                                                                type="text"
                                                                name="email"
                                                                onChange={handleChange}
                                                                className="form-control input-field"
                                                                id="email"
                                                            />

                                                            <label htmlFor="latitude" className="label-100 mt-3">
                                                                Latitude
                                                            </label>
                                                            <input
                                                                value={latitude}
                                                                type="text"
                                                                name="latitude"
                                                                onChange={handleChange}
                                                                className="form-control input-field"
                                                                id="latitude"
                                                            />

                                                            <label htmlFor="longitude" className="label-100 mt-3">
                                                                Longitude
                                                            </label>
                                                            <input
                                                                value={longitude}
                                                                type="text"
                                                                name="longitude"
                                                                onChange={handleChange}
                                                                className="form-control input-field"
                                                                id="longitude"
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
                                        </>
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

export default Address;
