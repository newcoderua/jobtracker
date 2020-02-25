/*eslint-disable*/
import React from "react";
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
    Badge
  } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";
import '../../views/Dashboard.css'

class JobApplicationTab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: this.props.isOpen
        }
    }
    render() {
        const { jobApplications, tabColor, tabName  } = this.props
        const appliedArrowClassName = !this.state.isOpen ? 'nc-icon nc-minimal-down content-tab-button-down' : 'nc-icon nc-minimal-up content-tab-button-down'
        const isMobileSize = window.innerWidth <= 600
        
        return (
            <div className="main-content-applied-jobs">
                <Button
                    color={tabColor}
                    onClick={() => {
                        
                        this.setState({ isOpen: !this.state.isOpen })}}
                    className="content-tab-button"
                >
                    {tabName}
                    <Badge color="dark" className="main-content-applied-jobs-button-badge">{this.props.jobApplications.length}</Badge>
                    <i className={appliedArrowClassName} />
                </Button>
                <Collapse
                    isOpen={this.state.isOpen}
                    className="content-main-applications-table"
                >
                    <Table striped>
                        <thead>
                            <tr>
                                {!isMobileSize && <th>Date</th>}
                                <th>Company</th>
                                <th>Job Title</th>
                                {!isMobileSize && <th>Salary</th>}
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobApplications.map((jobApplication, i) => {
                                return (
                                    <tr key={`${i}_${jobApplication.name}`}>
                                        {!isMobileSize && <td scope="row">{jobApplication.date}</td>}
                                        <td>{jobApplication.company}</td>
                                        <td>{jobApplication.jobTitle}</td>
                                        {!isMobileSize && <td>{jobApplication.salary}</td>}
                                        <td>{jobApplication.location}</td>
                                        {isMobileSize && <td><i className="nc-icon nc-bullet-list-67" /></td>}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Collapse>
      </div>
    );
  }
}

JobApplicationTab.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default JobApplicationTab;
