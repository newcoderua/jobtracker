/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Button,
  Collapse,
  Table,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Badge,
  Progress
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";
import './Dashboard.css'
import JobApplicationTab from "components/JobApplicationTab/job-application-tab-container";
import JobApplicationGeneralInfo from "components/JobApplicationTab/job-application-general-info";
import Stepper from 'react-stepper-horizontal';
// import Steps from 'rc-steps';
// import Button from 'reactstrap/Button'
// import Collapse from 'reactstrap/Collapse'
// import Card from 'reactstrap/Card'
// import CardBody from 'reactstrap/CardBody'

const appliedJobApplications = [
  {
    date: '12.01.2019',
    company: 'James Bond',
    jobTitle: 'sniper',
    salary: '500$',
    location: 'secret'
  },
  {
    date: '12.01.2020',
    company: 'Google',
    jobTitle: 'Clown',
    salary: '1,000',
    location: 'circus'
  },
  {
    date: '12.02.2020',
    company: 'Kovbasa',
    jobTitle: 'butcher',
    salary: '500.000',
    location: 'Remote'
  }
]

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAppliedOpen: true,
      isSortByOpen: false,
      isFiltersOpen: false,
      isAddNewApplicationModalOpen: false
    }
  }

  render() {
    return (
      <>
        <div className="content">
          <div className="add-new-job-application-button-content">
            <div className="add-new-job-application-button">
              <Button color="danger" onClick={() => this.setState({ isAddNewApplicationModalOpen: !this.state.isAddNewApplicationModalOpen })}>+</Button>
              <span>Add New</span>
              <Modal isOpen={true/**this.state.isAddNewApplicationModalOpen**/} toggle={() => this.setState({ isAddNewApplicationModalOpen: !this.state.isAddNewApplicationModalOpen })}>
                <ModalHeader toggle={() => this.setState({ isAddNewApplicationModalOpen: !this.state.isAddNewApplicationModalOpen })}>Add New Job</ModalHeader>
                <ModalBody className="add-new-job-application-modal">
                  <div className="job-applications-stepper-indicator">
                    <Stepper
                      size={24}
                      circleFontSize={12}
                      titleFontSize={12}
                      steps={ [{title: 'Step One'}, {title: 'Step Two'}, {title: 'Step Three'}, {title: 'Step Four'}] } activeStep={ 0 } />
                  </div>
                  <JobApplicationGeneralInfo />
                </ModalBody>
                <ModalFooter className="job-application-modal-footer">
                  <div>
                    <Button outline color="primary" onClick={() => this.setState({ isAddNewApplicationModalOpen: !this.state.isAddNewApplicationModalOpen })}>Cancel</Button>{' '}
                  </div>
                  <div>
                  <Button color="link">Go back</Button>
                    <Button color="primary" onClick={() => this.setState({ isAddNewApplicationModalOpen: !this.state.isAddNewApplicationModalOpen })}>Next</Button>
                  </div>
                </ModalFooter>
              </Modal>
            </div>
          </div>
          <div className="main-content-filters">
            <div className="main-content-filters-search">
              <InputGroup className="no-border">
                <Input placeholder="Search..." />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="nc-icon nc-zoom-split" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="main-content-filters-sortby-filters">
              <div className="main-content-filters-sortby">
                <ButtonDropdown isOpen={this.state.isSortByOpen} toggle={() => this.setState({ isSortByOpen: !this.state.isSortByOpen })}>
                  <DropdownToggle caret>
                    Sort By
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
              <div className="main-content-filters-filters">
                <Button onClick={() => this.setState({ isFiltersOpen: !this.state.isFiltersOpen })}>All Filters</Button>
                <Modal isOpen={this.state.isFiltersOpen} toggle={() => this.setState({ isFiltersOpen: !this.state.isFiltersOpen })}>
                  <ModalHeader toggle={() => this.setState({ isFiltersOpen: !this.state.isFiltersOpen })}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={() => this.setState({ isFiltersOpen: !this.state.isFiltersOpen })}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={() => this.setState({ isFiltersOpen: !this.state.isFiltersOpen })}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>
          </div>
          <JobApplicationTab
            jobApplications={appliedJobApplications}
            tabColor="primary"
            tabName="Applied"
            isOpen
          />
          <JobApplicationTab
            jobApplications={[]}
            tabColor="warning"
            tabName="Phone Screen"
            isOpen={false}
          />
          <JobApplicationTab
            jobApplications={[]}
            tabColor="success"
            tabName="In Person Interview"
            isOpen={false}
          />
          <JobApplicationTab
            jobApplications={[]}
            tabColor="info"
            tabName="Rejected"
            isOpen={false}
          />
          {/* <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Capacity</p>
                        <CardTitle tag="p">150GB</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Revenue</p>
                        <CardTitle tag="p">$ 1,345</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-calendar" /> Last day
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Errors</p>
                        <CardTitle tag="p">23</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-clock" /> In the last hour
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Followers</p>
                        <CardTitle tag="p">+45K</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update now
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row> */}
          {/* <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Users Behavior</CardTitle>
                  <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Email Statistics</CardTitle>
                  <p className="card-category">Last Campaign Performance</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-primary" /> Opened{" "}
                    <i className="fa fa-circle text-warning" /> Read{" "}
                    <i className="fa fa-circle text-danger" /> Deleted{" "}
                    <i className="fa fa-circle text-gray" /> Unopened
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" /> Number of emails sent
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                  <p className="card-category">Line Chart with Points</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardNASDAQChart.data}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                    <i className="fa fa-circle text-warning" /> BMW 5 Series
                  </div>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row> */}
        </div>
      </>
    );
  }
}

export default Dashboard;
