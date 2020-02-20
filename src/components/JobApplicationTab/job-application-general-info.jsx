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
import Select from 'react-select';
 
import "react-datepicker/dist/react-datepicker.css";
import '../../views/Dashboard.css'

class JobApplicationGeneralInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: this.props.isOpen,
            date: new Date(),
            selectedCompany: null,
            companyOptions: []
        }
    }

    componentDidMount() {
        //https://www.algolia.com/apps/pl8QSDTQNJI7/api-keys/all buy plan in the future
        const placesAutocomplete = places({
            appId: 'pl8QSDTQNJI7',
            apiKey: '733b89688631a321d9f3c12eb92dfb86',
            container: document.querySelector('#address-input')
        });
    }

    handleCompanyChange = selectedCompany => {
        // fetch()
        console.log('yo')
        this.setState({ selectedCompany })
    }
    render() {
        const { jobApplications, tabColor, tabName  } = this.props
        const appliedArrowClassName = !this.state.isOpen ? 'nc-icon nc-minimal-down content-tab-button-down' : 'nc-icon nc-minimal-up content-tab-button-down'
        const isMobileSize = window.innerWidth <= 600
        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
          ];
        
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
                        <Button color="primary" className="apply-job-posting-link">Apply</Button>
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
                            <Input type="text" name="title" id="jobTitle" placeholder=""/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="company" className="required-field">Company</Label>
                            <Select
                                value={this.state.selectedCompany}
                                onChange={this.handleCompanyChange}
                                onInputChange={(a) => {
                                    a && fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${a}`, {
                                        crossDomain:true,
                                        method: 'GET',
                                        headers: {'Content-Type':'application/json'}
                                    })
                                        .then(res => res.json())
                                        .then(res => {
                                            this.setState({ companyOptions: res.map(company => ({ value: company.name, label: company.name })) })
                                            console.log(res)})}}
                                isSearchable
                                options={this.state.companyOptions}
                            />
                            <Input type="text" name="company" id="company" placeholder="" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <FormGroup>
                            <Label for="address-input">Location</Label>
                            <Input type="search" id="address-input" className="form-control" />
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
                            <Input type="text" name="salary" id="salary" placeholder=""/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="jobPostingLink" className="required-field">Job posting Link</Label>
                            <Input type="text" name="jobPostingLink" id="jobPostingLink" placeholder=""/>
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
