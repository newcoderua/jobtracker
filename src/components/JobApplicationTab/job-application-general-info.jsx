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
    Form,
    FormGroup,
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
    FormText,
    Input,
    Label,
    Media
  } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import places from 'places.js'
 
import "react-datepicker/dist/react-datepicker.css";
import '../../views/Dashboard.css'

class JobApplicationGeneralInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: this.props.isOpen,
            date: new Date()
        }
    }

    componentDidMount() {
        const placesAutocomplete = places({
            appId: 'pl8QSDTQNJI7',
            apiKey: '733b89688631a321d9f3c12eb92dfb86',
            container: document.querySelector('#address-input')
        });
    }
    render() {
        const { jobApplications, tabColor, tabName  } = this.props
        const appliedArrowClassName = !this.state.isOpen ? 'nc-icon nc-minimal-down content-tab-button-down' : 'nc-icon nc-minimal-up content-tab-button-down'
        const isMobileSize = window.innerWidth <= 600
        
        return (
            <Form>
                <Row>
                    <Col className="center-content">
                        {/* <FormGroup> */}
                            <span><Label className="bold">Autofill your application by pasting the link from the websites below:</Label></span>
                            {/* <FormText>Example: https://www.linkedin.com/jobs/view/1736016510/?alternateChannel=jymbii</FormText> */}
                        {/* </FormGroup> */}
                    </Col>
                </Row>
                <Row>
                    <Col className="center-content">
                        <div className="job-websites-icons">
                            <img src="https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo.png" />
                            <img src="https://covinaca.gov/sites/default/files/imageattachments/library/page/1481/glassdoor.jpg" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="center-content">
                        <Input className="autofill-job-application-input" />
                    </Col>
                </Row>
                <Row>
                    <Col className="center-content">
                        <span><Label className="bold">OR</Label></span>
                    </Col>
                </Row>
                <Row>
                    <Col className="center-content">
                        <Label className="bold">Manually fill out information below</Label>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <FormGroup>
                            <Label for="exampleSelect" className="required-field">Status</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Applied</option>
                                <option>Phone Interview</option>
                                <option>In-Person Interview</option>
                                <option>Rejected</option>
                                <option>Accepted</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                    {/* <FormGroup> */}
                        <Label for="dateApplied" className="required-field">Date</Label>
                        {/* <Input type="select" name="select" id="exampleSelect"> */}
                            <div className="job-application-date-pickers">
                                <DatePicker
                                    selected={this.state.date}
                                    // onSelect={this.handleSelect} //when day is clicked
                                    onChange={date => this.setState({ date })} //only when value has changed
                                />
                            </div>
                        {/* </Input> */}
                    {/* </FormGroup> */}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="jobTitle" className="required-field">Title</Label>
                            <Input type="text" name="title" id="jobTitle" placeholder="Senior Software Engineer"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="company" className="required-field">Company</Label>
                            <Input type="text" name="company" id="company" placeholder="Apple" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <FormGroup>
                            {/* <Label for="address-input">Location</Label> */}
                            <input type="search" id="address-input" className="form-control" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                    <FormGroup>
                        <Label for="dateApplied">Employment type</Label>
                        <Input type="select" name="select" id="exampleSelect">
                                <option>Full-time</option>
                                <option>Part-time</option>
                                <option>Contract</option>
                                <option>Remote</option>
                            </Input>
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="salary">Salary</Label>
                            <Input type="text" name="salary" id="salary" placeholder="100k"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="jobPostingLink" className="required-field">Job posting Link</Label>
                            <Input type="text" name="jobPostingLink" id="jobPostingLink" placeholder="https://www.linkedin.com/jobs/view/1738315972/?alternateChannel=jymbii"/>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        );
    }
}

JobApplicationGeneralInfo.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default JobApplicationGeneralInfo;
