import './order_form.css';

const Order = () => {
    return (
        <>
            <div className="ordercontainer">
                <center>
                    <h1>Fresh Bites Food Order</h1>
                </center>
                <form id="foodOrderForm">
                    <div className="form-section">
                        <center>
                            <div className="form-section-title">Customer Information</div>
                        </center>
                        <label htmlFor="name" className="required">Full Name:</label>
                        <br />
                        <input type="text" id="name" name="name" placeholder="Full Name" required />
                        <br />
                        <label htmlFor="email">E-mail:</label>
                        <br />
                        <input type="email" id="email" name="email" placeholder="E-mail" />
                        <br />
                        <label htmlFor="phone" className="required">Phone Number:</label>
                        <br />
                        <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
                        <br />
                        <label htmlFor="address" className="required">Delivery Address:</label>
                        <br />
                        <textarea id="address" name="address" rows="3" placeholder="Address" required></textarea>
                    </div>

                    <div className="form-section">
                        <div className="form-section-title">Delivery Time</div>
                        <label htmlFor="delivery-time">Preferred Delivery Time:</label>
                        <input type="datetime-local" id="delivery-time" name="delivery-time" />
                        
                        <label htmlFor="instructions">Special Instructions:</label>
                        <textarea id="instructions" name="instructions" rows="2" placeholder="Any special delivery instructions..."></textarea>
                    </div>

                    <div className="form-section-title">Payment Method:</div>
                    <div className="form-section2">
                        <label className="radio">
                            <input type="radio" name="payment" value="cash" defaultChecked /> Cash on Delivery
                        </label>
                        <label className="radio">
                            <input type="radio" name="payment" value="card" /> Credit/Debit Card
                        </label>
                        <label className="radio">
                            <input type="radio" name="payment" value="online" /> Online Payment
                        </label>
                    </div>
                    <br />
                    <center>
                        <button type="submit" className="btn">Place Order</button>
                    </center>
                </form>
            </div>
        </>
    );
};

export default Order;
