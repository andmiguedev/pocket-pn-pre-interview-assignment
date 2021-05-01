import React, { Component } from 'react';

import Select from 'react-select';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-ts-timepicker';

import { practitoners, specialization } from '../../samples/nurses';

class MakeAppointment extends Component {
   constructor(props) {
      super(props);
      this.state = {
         currentDate: new Date(),
         commonTime: '11:00 am'
      }
   }

   setAppointmentDate = pickedDate => {
      this.setState({
         currentDate: pickedDate
      });
   }

   setAppointmentTime = chosenTime => {
      this.setState({
         commonTime: chosenTime
      });
   }

   render() {
      return (
         <div className="layout-wrapper">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                     <h4 className="page-title">
                        New Appointment
                     </h4>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                     <form>
                        <div className="row">
                           <div className="col-md-6">
                              <div className="form-group">
                                 <label>Appointment ID</label>
                                 <input className="form-control" type="text" defaultValue="APT1028" readOnly />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="form-group">
                                 <label>Physican Name</label>
                                 <Select options={practitoners} className="select"/>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-md-6">
                              <div className="form-group">
                                 <label>
                                    Specialist
                                 </label>
                                 <Select options={specialization} className="select" />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="form-group">
                                 <label>Address</label>
                                 <input type="text" className="form-control" />
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-md-6">
                              <div className="form-group">
                                 <label>Appointment Date</label>
                                 <br />
                                 <DatePicker
                                    selected={this.state.currentDate}
                                    onChange={this.setAppointmentDate}
                                    className="form-control datetimepicker"
                                 />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="form-group">
                                 <label>Appointment Time</label>
                                 <TimePicker
                                    onChange={this.setAppointmentTime}
                                    value={this.state.commonTime}
                                 />
                              </div>
                           </div>
                        </div>
                        <div className="form-group">
                           <label>What is the reason for your visit ?</label>
                           <textarea className="form-control" placeholder="I feel there is pain in some part of my body..." cols="30" rows="4"></textarea> 
                        </div>
                        <div className="text-right mt-20">
                           <button className="btn btn-primary submit-btn">
                              Add Appointment
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default MakeAppointment;