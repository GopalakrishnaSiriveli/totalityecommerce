import React from 'react'
import { Link } from 'react-router-dom';

function Checkout() {
    const [checkoutDetails, setCheckoutDetails] = React.useState({
        name: "",
        address: "",
        email: "",
        phno: ""
    })

    function handleCheckoutDetails(event) {
        setCheckoutDetails((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    console.log(checkoutDetails);

    return (
        <div className="checkout-component container w-lg-50">
            <form>
                <div className="mb-3">
                    <label htmlfor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" required name='email' value={checkoutDetails.email} onChange={handleCheckoutDetails} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" required name='name' value={checkoutDetails.name} className="form-control" />
                </div>
                <div className='mb-3'>
                    <label htmlFor='address' className='form-label'>Address</label>
                    <input type="text" required name="address" value={checkoutDetails.address} className="form-control" />
                </div>
                <div className='mb-3'>
                    <label htmlFor='phno' className='form-label'>Phone Number</label>
                    <input type="text" required name="phno" value={checkoutDetails.phno} className="form-control" />
                </div>
                <Link to="/placed">
                <button type="submit" className="btn btn-dark my-3">Proceed</button>

                </Link>
            </form>
        </div>
    )
}

export default Checkout