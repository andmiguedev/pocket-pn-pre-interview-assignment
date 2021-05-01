import { Link } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

export const columns = [
   {
      title: 'Appointment ID',
      dataIndex: 'AppointmentID'
   },
   {
      title: 'Physican Name',
      dataIndex: 'Nurse'
   },
   {
      title: 'Office Address',
      dataIndex: 'Location',
   },
   {
      title: 'Appointment Date',
      dataIndex: 'Date'
   },
   {
      title: 'Scheduled Time',
      dataIndex: 'Time'
   },
   {
      title: 'Specialist',
      dataIndex: 'Specialty'
   },
   {
      title: 'Reason to Visit',
      dataIndex: 'Reason'
   },
   {
      title: 'Action',
      dataIndex: 'Action',
      render: () => (
         <Dropdown
            className="dropdown dropdown-action">
            <DropdownToggle
               id="dropdown-basic"
               variant="info"
            >
               <a
                  href="#0"
                  className="dropdown-toggle action-icon"
                  data-toggle="dropdown"
                  aria-expanded="false"
               >
                  <i className="fa fa-ellipsis-v"></i>
               </a>
            </DropdownToggle>
            <DropdownMenu>
               <Link
                  to="view-appointment"
                  className="dropdown-item"
               >
                  <i className="fa fa-pencil mr-5"></i>View
               </Link>
               <Dropdown.Item
                  href="#/action-2"
                  onClick={() => this.handleCancellations('decline')}
               >
                  <i className="fa fa-trash-o mr-5"></i>Decline
               </Dropdown.Item>
            </DropdownMenu>
         </Dropdown>
      )
   }
]