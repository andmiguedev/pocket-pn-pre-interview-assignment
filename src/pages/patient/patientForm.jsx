import React, { Component } from 'react';
import demoLogo from '../../assets/images/logo-dark.png';

class PatientForm extends Component {
   state = {
      patientForm: {
         name: '',
         email: '',
         password: '',
         contact: '',
         reason: '',
      },
      registerForm: true,
      submitForm: false,
   }

   handlePatientFields = (event) => {
      let name = event.target.name;
      let value = event.target.value;
      this.setState(prevState => ({
         patientForm: {
            ...prevState.patientForm,
            [name]: value
         }
      }))
   }

   handlePatientForm = () => {
      this.setState(prevState => ({
         registerForm: !prevState.registerForm
      }));
   }

   handleSubmitForm = (event) => {
      event.preventDefault();
      this.setState({
         submitForm: true
      })
      // console.log(this.state.patientForm);

      if (this.state.registerForm) {
         
      } else {

      }
   }

   render() {
      const { registerForm, patientForm, submitForm } = this.state;
      const formTitle = registerForm ? 'Register Here' : ' Login to Your Account';
      
      return (
         <React.Fragment>
            <div className="form-wrapper">
              <div className="form-container form-center">
                  <form
                     className="form-size"
                     onSubmit={this.handleRegistration}
                  >
                     <div className="company-logo">
                        <img src={demoLogo} alt="This is the logo for this assignment demo" />
                     </div>
                     <h5 className="pb-3 text-center">
                        {formTitle}
                     </h5>
                      {
                        registerForm ?
                           <>
                              <div className="form-group">
                                 <label>Patient Name</label>
                                 <input  
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    onChange={this.handlePatientFields}
                                    value={patientForm.name}
                                 />
                              </div>
                              <div className="form-group">
                                 <label>Patient Email</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    onChange={this.handlePatientFields}
                                    value={patientForm.email}
                                 />
                              </div>
                              <div className="form-group">
                                 <label>Strong Password</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    name="password"
                                    onChange={this.handlePatientFields}
                                    value={patientForm.password}
                                 />
                              </div>
                              <div className="form-group">
                                 <label>Contact Number</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    name="contact"
                                    onChange={this.handlePatientFields}
                                    value={patientForm.contact}
                                 />
                              </div>
                              <div className="form-group">
                                 <label>Reason to visit the doctor ?</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    name="reason"
                                    onChange={this.handlePatientFields}
                                    value={patientForm.reason}
                                 />
                              </div>
                           </>
                           :
                           <>
                              <div className="form-group">
                                 <label>Patient Email</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    onChange={this.handlePatientFields}
                                    value={patientForm.email}
                                 />
                              </div>
                              <div className="form-group">
                                 <label>Strong Password</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    name="password"
                                    onChange={this.handlePatientFields}
                                    value={patientForm.password}
                                 />
                              </div>
                           </>
                     }
                    
                     <div className="form-group checkbox">
                        <label>
                           <input type="checkbox" />
                           &nbsp; I agree to the Privacy Policy & Terms of Agreement.
                        </label>
                     </div>
                     <div className="form-group text-center">
                        <button
                           className="btn btn-primary submit-btn"
                           type="submit"
                           disabled={submitForm}
                           onClick={() => this.handleSubmitForm}
                        >
                           {registerForm ? 'Sign up' : 'Login'}
                        </button>
                     </div>
                     <div
                        className="text-center login-link">
                        <span
                           className="btn btn-outline"
                           onClick={() => { this.handlePatientForm()}}
                        >
                           {
                              registerForm ?
                                 `I already have an account! Sign in` :
                                 `I don't have an account! Sign up`
                           }
                        </span>
                     </div>
                  </form>
               </div>
            </div>
         </React.Fragment>
      )
   }
}

export default PatientForm;