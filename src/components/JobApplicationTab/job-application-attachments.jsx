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

class JobApplicationAttachments extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pickedResume: '',
            pickedCoverLetter: ''
        }
    }

    render() {
        const DOCUMENTS_TYPE_MAP = {
            'application/pdf': 'PDF',
            'application/msword': 'DOC'
        }
        const pickedResumeObject = this.state.pickedResume
        const pickedCVObject = this.state.pickedCoverLetter
        return (
            <Form>
                <Row>
                    <Col>
                        <Label className="displayBlock job-application-attachments-resume-title">Resume</Label>
                        <Label className="displayBlock">Please include resume</Label>
                        {!this.state.pickedResume && <Label className="displayBlock job-application-attachments-choose-recent">Choose recent</Label>}
                        {this.state.pickedResume && (
                            <div className="job-application-attachments-picked-resume">
                                <div className="job-application-attachments-picked-resume-type">{DOCUMENTS_TYPE_MAP[pickedResumeObject.type]}</div>
                                <div className="job-application-attachments-picked-resume-name">
                                    {pickedResumeObject.name}
                                    <button className="job-application-attachments-picked-resume-delete-button" onClick={() => this.setState({ pickedResume: '' })}>X</button>
                                </div>
                            </div>
                        )}
                        {!this.state.pickedResume && (
                            <React.Fragment>
                                <div className="job-application-attachments-recent-resumes">
                                    <div>
                                        <Label className="job-application-attachments-resume-label">Vlad-Stadnyk.pdf</Label>
                                        <Label className="job-application-attachments-resume-timestamp">Last used on 8/25/2019</Label>
                                    </div>
                                    <div>
                                        <div className="job-application-attachaments-choose">
                                            <button 
                                                className="job-application-attachments-choose-recent-button"
                                                onClick={() => this.setState({ pickedResume: { name: 'Vlad-Stadnyk.pdf', type: 'application/pdf' }})}   
                                            >Choose</button>
                                            <button className="job-application-attachments-download-recent-button">
                                                <img src="https://webstockreview.net/images/png-images-download-9.png" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <label className="job-application-attachments-upload-resume-label">
                                    <Input
                                        className="job-application-attachments-choose-from-device-button"
                                        type="file"
                                        name="file"
                                        id="chooseResume"
                                        onChange={e => {
                                            const chosenResume = {}
                                            const chosenResumeFile = document.getElementById('chooseResume').files[0]
                                            chosenResume.name = chosenResumeFile.name
                                            chosenResume.lastModified = chosenResumeFile.lastModified
                                            chosenResume.lastModifiedDate = chosenResumeFile.lastModifiedDate
                                            chosenResume.webkitRelativePath = chosenResumeFile.webkitRelativePath
                                            chosenResume.size = chosenResumeFile.size
                                            chosenResume.type = chosenResumeFile.type
                                            this.setState({ pickedResume: chosenResume })
                                        }}
                                    />
                                    Upload Resume
                                </label>
                            </React.Fragment>
                        )}
                    </Col>
                    <Col>
                        <Label className="displayBlock job-application-attachments-cover-letter-title">Cover Letter</Label>
                        <Label className="displayBlock">Please include cover letter</Label>
                        {!this.state.pickedCoverLetter && <Label className="displayBlock job-application-attachments-choose-recent">Choose recent</Label>}
                        {this.state.pickedCoverLetter && (
                            <div className="job-application-attachments-picked-cv">
                                <div className="job-application-attachments-picked-cv-type">{DOCUMENTS_TYPE_MAP[pickedCVObject.type]}</div>
                                <div className="job-application-attachments-picked-cv-name">
                                    {pickedCVObject.name}
                                    <button className="job-application-attachments-picked-cv-delete-button" onClick={() => this.setState({ pickedCoverLetter: '' })}>X</button>
                                </div>
                            </div>
                        )}
                        {!this.state.pickedCoverLetter && (
                            <React.Fragment>
                                <div className="job-application-attachments-recent-cvs">
                                    <div>
                                        <Label className="job-application-attachments-cv-label">Cover letter 1.pdf</Label>
                                        <Label className="job-application-attachments-cv-timestamp">Last used on 8/27/2019</Label>
                                    </div>
                                    <div>
                                        <div className="job-application-attachaments-choose">
                                            <button 
                                                className="job-application-attachments-choose-recent-button"
                                                onClick={() => this.setState({ pickedCoverLetter: { name: 'Cover letter 1.pdf', type: 'application/pdf' }})}   
                                            >Choose</button>
                                            <button className="job-application-attachments-download-recent-button">
                                                <img src="https://webstockreview.net/images/png-images-download-9.png" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <label className="job-application-attachments-upload-resume-label">
                                    <Input
                                        className="job-application-attachments-choose-from-device-button"
                                        type="file"
                                        name="file"
                                        id="chooseCV"
                                        onChange={e => {
                                            const chosenCV = {}
                                            const chosenCVFile = document.getElementById('chooseCV').files[0]
                                            chosenCV.name = chosenCVFile.name
                                            chosenCV.lastModified = chosenCVFile.lastModified
                                            chosenCV.lastModifiedDate = chosenCVFile.lastModifiedDate
                                            chosenCV.webkitRelativePath = chosenCVFile.webkitRelativePath
                                            chosenCV.size = chosenCVFile.size
                                            chosenCV.type = chosenCVFile.type
                                            this.setState({ pickedCoverLetter: chosenCV })
                                        }}
                                    />
                                    Upload CV
                                </label>
                            </React.Fragment>
                        )}
                    </Col>
                </Row>
            </Form>
        );
    }
}

JobApplicationAttachments.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default JobApplicationAttachments;
