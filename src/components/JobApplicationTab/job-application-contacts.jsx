/*eslint-disable*/
import React from "react";
import {
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    ListGroup,
    ListGroupItem,
    Input,
    Label,
    InputGroupAddon,
    Badge
  } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import places from 'places.js'
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done'; 
import keys from 'lodash/keys';
import get from 'lodash/get';
import "react-datepicker/dist/react-datepicker.css";
import '../../views/Dashboard.css'

class JobApplicationDescription extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLinkedinButtonClicked: false,
            isYelpButtonClicked: false,
            isGlassdoorButtonClicked: false,
            isInstagramButtonClicked: false,
            isFacebookButtonClicked: false,
            isTwitterButtonClicked: false
        }
    }

    render() {
        const {
            isLinkedinButtonClicked,
            isGlassdoorButtonClicked,
            isInstagramButtonClicked,
            isFacebookButtonClicked,
            isTwitterButtonClicked,
            isYelpButtonClicked,
            isDreamJobButtonClicked } = this.state
        const dreamJobButtonClassName = isDreamJobButtonClicked ? "nc-icon nc-favourite-28 clicked" : "nc-icon nc-favourite-28"
        return (
            <Form>
                <Row className="job-application-contacts-company-info-links">
                    <Col md="8">
                        <Row>
                            <Col>
                                <div className="job-application-contacts-company-info">
                                    <div>
                                        <img className="job-application-contacts-company-logo" src="https://image.shutterstock.com/image-vector/cobra-head-color-illustration-260nw-553625350.jpg" />
                                    </div>
                                    <div>
                                        <Label className="bold displayBlock">Cobra Inc</Label>
                                        <a href="" className="companyLink displayBlock">https://apple.com</a>
                                        <button className="dreamCompanyButton"
                                            onClick={(e) => {
                                                this.setState({ isDreamJobButtonClicked: !this.state.isDreamJobButtonClicked })
                                                e.preventDefault()
                                            }}>
                                            <i className={dreamJobButtonClassName} />
                                            Dream company
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <Label for="notesAboutCompany">Description / Note (paste / type in)</Label>
                                    <textarea id="notesAboutCompany" className="job-description-textarea" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="4">
                        <Label>Company links</Label>
                        <div className="displayFlex company-links-section">
                            <span className="company-links">
                                <img src="https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo.png" />
                            </span>
                            <span>
                                {!isLinkedinButtonClicked &&
                                    <button color="primary"
                                        onClick={() => {
                                            this.setState({ isLinkedinButtonClicked: true },
                                                () => { document.getElementById('companyLinkedinLink').focus() })}}>
                                        + Add
                                    </button>
                                }
                                {isLinkedinButtonClicked && <Input id="companyLinkedinLink" />}
                            </span>
                        </div>
                        <div className="displayFlex company-links-section">
                            <span className="company-links">
                                <img src="https://covinaca.gov/sites/default/files/imageattachments/library/page/1481/glassdoor.jpg" />
                            </span>
                            <span>
                                {!isGlassdoorButtonClicked &&
                                    <button color="primary"
                                        onClick={() => {
                                            this.setState({ isGlassdoorButtonClicked: true },
                                                () => { document.getElementById('companyGlassdoorLink').focus() })}}>
                                        + Add
                                    </button>
                                }
                                {isGlassdoorButtonClicked && <Input id="companyGlassdoorLink" />}
                            </span>
                        </div>
                        <div className="displayFlex company-links-section">
                            <span className="company-links">
                                <img src="https://www.pngfind.com/pngs/m/7-78975_find-me-on-transparent-background-instagram-logo-hd.png" />
                            </span>
                            <span>
                                {!isInstagramButtonClicked &&
                                    <button color="primary"
                                        onClick={() => {
                                            this.setState({ isInstagramButtonClicked: true },
                                                () => { document.getElementById('companyInstagramLink').focus() })}}>
                                        + Add
                                    </button>
                                }
                                {isInstagramButtonClicked && <Input id="companyInstagramLink" />}
                            </span>
                        </div>
                        <div className="displayFlex company-links-section">
                            <span className="company-links">
                                <img src="https://getdrawings.com/free-icon/facebook-icon-png-transparent-72.png" />
                            </span>
                            <span>
                                {!isFacebookButtonClicked &&
                                    <button color="primary"
                                        onClick={() => {
                                            this.setState({ isFacebookButtonClicked: true },
                                                () => { document.getElementById('companyFacebookLink').focus() })}}>
                                        + Add
                                    </button>
                                }
                                {isFacebookButtonClicked && <Input id="companyFacebookLink" />}
                            </span>
                        </div>
                        <div className="displayFlex company-links-section">
                            <span className="company-links">
                                <img src="https://picklefeetgames.com/wp-content/uploads/2018/12/twitter-app-icon-transparent-17-2.png" />
                            </span>
                            <span>
                                {!isTwitterButtonClicked &&
                                    <button color="primary"
                                        onClick={() => {
                                            this.setState({ isTwitterButtonClicked: true },
                                                () => { document.getElementById('companyTwitterLink').focus() })}}>
                                        + Add
                                    </button>
                                }
                                {isTwitterButtonClicked && <Input id="companyTwitterLink" />}
                            </span>
                        </div>
                        <div className="displayFlex company-links-section">
                            <span className="company-links">
                                <img src="https://i0.wp.com/onestopcleaningllc.com/wp-content/uploads/2019/01/yelp-logo-transparent-.png?ssl=1" />
                            </span>
                            <span>
                                {!isYelpButtonClicked &&
                                    <button color="primary"
                                        onClick={() => {
                                            this.setState({ isYelpButtonClicked: true },
                                                () => { document.getElementById('companyYelpLink').focus() })}}>
                                        + Add
                                    </button>
                                }
                                {isYelpButtonClicked && <Input id="companyYelpLink" />}
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row className="job-application-description-row">
                </Row>
                <Row>
                    <Col md="7">
                        <div className="recruiter-full-name">
                            <Label for="recruiterName">Full Name</Label>
                            <Input type="text" id="recruiterName" placeholder="John Smith" />
                        </div>
                        <div>
                            <Label for="recruiterRole">Role</Label>
                            <Input type="select" name="recruiterRole" id="recruiterRole">
                                <option>Internal Recruiter</option>
                                <option>External recruiter</option>
                                <option>Employee</option>
                            </Input>
                        </div>
                    </Col>
                    <Col md="5" className="recruiter-contact-info">
                        <div className="displayFlex company-links-section">
                            <span className="company-links">
                                <img src="https://www.pngkey.com/png/detail/353-3531801_email-us-email-icon.png" />
                            </span>
                            <span>
                                <Input id="recruiterEmail" />
                            </span>
                        </div>
                        <div className="displayFlex company-links-section">
                            <span className="company-links">
                                <img src="https://purepng.com/public/uploads/large/purepng.com-phone-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596098aomr5.png" />
                            </span>
                            <span>
                                <Input id="recruiterPhone" />
                            </span>
                        </div>
                        <div className="displayFlex company-links-section">
                            <span className="company-links">
                                <img src="https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo.png" />
                            </span>
                            <span>
                                <Input id="recruiterLinkedin" />
                            </span>
                        </div>
                    </Col>
                </Row>
            </Form>
        );
    }
}

JobApplicationDescription.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default JobApplicationDescription;
