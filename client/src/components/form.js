import React from "react";

const Form = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="text-center">Order a Website</h1>
            </div>
        </div>
        <form className="form-row">
            <div className="col-md-6">
                <label for="exampleFormControlInput1">First Name:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First Name" />
            </div>
            <div className="col-md-6">
                <label for="exampleFormControlInput1">Last Name:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last Name" />
            </div>
        </form>
        <form className="form-row">
            <div className="col-md-6">
                <label for="exampleFormControlInput1">Phone Number:</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="999-999-9999" />
            </div>
            <div className="col-md-6">
                <label for="exampleFormControlInput1">Email Address:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
        </form>
        <div className="form-row">
            <label for="exampleFormControlSelect1">Do you have a website?</label>
            <select className="form-control" id="exampleFormControlSelect1">
                <option>Yes</option>
                <option>No</option>
            </select>
        </div>
        <div className="form-row">
                <label for="exampleFormControlInput1">Web Page Address</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Address" />
            </div>
        <div className="form-row">
            <label for="exampleFormControlSelect1">Do you want to link Social Media?</label>
            <select className="form-control" id="exampleFormControlSelect1">
                <option>Yes</option>
                <option>No</option>
            </select>
        </div>
        
        <form className="form-row">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span class="input-group-text">Concept Summary</span>
                </div>
                <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>
        </form>

        <form className="form-row">
            <div className="col-md-12">
                <button type="submit" className="btn btn-primary btn-lg">&lt;Submit/&gt;</button>
            </div>
        </form>
    </div>

);

export default Form;
