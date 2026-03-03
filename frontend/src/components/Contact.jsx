import React from 'react';
import { CheckCircle, MoveRight } from 'lucide-react';

const Contact = () => (
    <section className="container" id="contact">
        <div className="contact-section">
            <div>
                <h2 className="h2" style={{ marginBottom: '24px' }}>Let’s Make Your Next Property Decision Smarter</h2>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <CheckCircle color="var(--accent-color)" /> <span style={{ fontWeight: 500 }}>No spam, just real guidance.</span>
                </div>
            </div>
            <div className="contact-form">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-grid">
                        <div className="form-group"><label>Full Name</label><input type="text" placeholder="John Doe" /></div>
                        <div className="form-group"><label>Phone Number</label><input type="text" placeholder="+92 300 1234567" /></div>
                        <div className="form-group full"><label>Email Address</label><input type="email" placeholder="john@example.com" /></div>
                        <div className="form-group">
                            <label>Preferred City</label>
                            <select><option>Select City</option><option>Lahore</option><option>Islamabad</option><option>Karachi</option></select>
                        </div>
                        <div className="form-group">
                            <label>Budget Range</label>
                            <select><option>Select Budget</option><option>PKR 1M - 5M</option><option>PKR 5M - 20M</option></select>
                        </div>
                        <div className="form-group full">
                            <label>Purpose</label>
                            <select><option>Buy</option><option>Invest</option><option>Rent</option></select>
                        </div>
                        <div className="form-group full"><label>Message</label><textarea rows={4} placeholder="I am looking for..."></textarea></div>
                    </div>
                    <button className="btn btn-primary" style={{ width: '100%' }}>Get Started <MoveRight size={20} /></button>
                </form>
            </div>
        </div>
    </section>
);

export default Contact;
