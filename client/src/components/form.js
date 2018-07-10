import React from "react";

const Form = props => (
    <form>
        <div className="container" id="formtext">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">Start Your Project!</h1>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-6">
                    <label htmlFor="exampleFormControlInput1">First Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="First Name"
                        onChange={props.handleInputChange}
                        value={props.firstName}
                        name="firstName"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="exampleFormControlInput1">Last Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Last Name"
                        onChange={props.handleInputChange}
                        value={props.lastName}
                        name="lastName"
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-6">
                    <label htmlFor="exampleFormControlInput1">Phone Number:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="999-999-9999"
                        onChange={props.handleInputChange}
                        value={props.phoneNumber}
                        name="phoneNumber"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="exampleFormControlInput1">Email Address:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        onChange={props.handleInputChange}
                        value={props.emailAddress}
                        name="emailAddress"
                    />
                </div>
            </div>
            <div className="form-row">
                <label htmlFor="exampleFormControlSelect1">Do you have a website?</label>
                <select
                    type="boolean"
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={props.handleInputChange}
                    value={props.userSocial}
                    name="userSocial"
                >
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>
            <div className="form-row">
                <label htmlFor="exampleFormControlInput1">Web Page Address</label>
                <input
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Address"
                    onChange={props.handleInputChange}
                    value={props.webAddress}
                    name="webAddress"
                />
            </div>
            <div className="form-row">
                <label htmlFor="exampleFormControlSelect1">Do you want to link Social Media?</label>
                <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={props.handleInputChange}
                    value={props.linkSocial}
                    name="linkSocial"
                >
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>

            <div className="form-row">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Concept Summary</span>
                    </div>
                    <textarea
                        className="form-control"
                        aria-label="With textarea"
                        onChange={props.handleInputChange}
                        value={props.conceptSummary}
                        name="conceptSummary"
                    >
                    </textarea>
                </div>
            </div>

            <div className="form-row">
                <div className="col-md-12">
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        onClick={props.handleFormSubmit}
                    >&lt;Submit/&gt;</button>
                </div>
            </div>
        </div>

    </form>

);

export default Form;


