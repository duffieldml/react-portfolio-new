//This is for the contact me page

import React from "react";
import { Container } from "../Grid"
import Hero from "../Hero"
import "./style.css"

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }
    submitName(event) {
        this.setState({ name: event.target.value })
    }

    submitEmail(event) {
        this.setState({ email: event.target.value })
    }

    submitMessage(event) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.clearForm();
    }

    clearForm(){
        this.setState({name: "", email: "", message: ""})
    }

    render(){
        return (
            <Container>
                <div>
                    <section id="contact">
                        <div className="row">
                            <div className="col-md-12">
                            {/* bootstrap form */}
                                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                    <h2>Contact Me</h2>
                                    <hr className="line"></hr>
                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea2"><strong>Name</strong></label>
                                        <input type="Name" className="form-control" id="exampleFormControlInput2"
                                            placeholder="Name" value={this.state.name} onChange={this.submitName.bind(this)}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label for="exampleFormControlInput1"><strong>Email Address</strong></label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1"
                                            placeholder="name@example.com" value={this.state.email} onChange={this.submitEmail.bind(this)}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea2"><strong>Message</strong></label>
                                        <textarea className="form-control" id="exampleFormControlTextarea2" rows="12"
                                            placeholder="Message" value={this.state.message} onChange={this.submitMessage.bind(this)}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </Container>
        );
    }
};

export default Contact
