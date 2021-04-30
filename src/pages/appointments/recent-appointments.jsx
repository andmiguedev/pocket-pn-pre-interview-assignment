import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Table } from 'antd';
import { columns } from '../../samples/apptHeader';
import { appointments } from '../../samples/apptData';
import { handlePagination } from '../../utils/pagination';

class RecentAppointments extends Component {
   render() {
      return (
         <div className="layout-wrapper">
            <div className="container">
               <div className="row">
                  <div className="col-sm-4 col-3">
                     <h4 className="page-title">
                        My Recent Appointments
                     </h4>
                  </div>
                  <div className="col-sm-8 col-9 text-right mb-20">
                     <Link to="/make-appointment" className="btn btn-primary btn-rounded float-right">
                        <i className="fa fa-plus"></i>&nbsp;Make Appointment
                     </Link>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12">
                     <Table
                        className="table-stripped"
                        style={{ overflowX: "scroll" }}
                        columns={columns}
                        dataSource={appointments}
                        pagination={{
                           showSizeChanger: false,
                           itemRender: handlePagination,
                        }}
                        >
                     </Table>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default RecentAppointments;