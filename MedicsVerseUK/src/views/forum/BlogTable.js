import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from 'mdb-react-ui-kit';
import { Col, Row, Container } from "reactstrap";
import '../'

export default function App(rows) {
  return (
    <MDBTable align='middle'>
      {/* <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Title</th>
          <th scope='col'>Status</th>
          <th scope='col'>Position</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead> */}
      <MDBTableBody>
        {
            rows.data.map(
                row => (
                    <tr className='w-100'>
                        {/* <Row> */}
                            {/* <Col md={6}> */}
                                <td>
                                    <div className='d-flex align-items-left'>
                                        <MDBIcon far icon="comments"/>
                                        <a className='d-block' href={"forum/"+row.categoryID}>
                                            <p className='fs-3'>
                                                {row.category}
                                            </p>
                                        </a>
                                    </div>
                                </td>
                            {/* </Col>
                            <Col md={6}> */}
                                <td>
                                    <p className='fw-normal mb-1'>{row.Threads}</p>
                                </td>
                                <td/>
                                <td>
                                    <p className='text-muted mb-0'>{row.Messages}</p>
                                </td>
                                <td>
                                    <p className='text-muted mb-0'>{row.Views}</p>
                                </td>
                            {/* </Col> */}
                        {/* </Row> */}
                    </tr>
                )
            )
        }
      </MDBTableBody>
    </MDBTable>
  );
}
