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

        }
    }

    componentDidMount() {
        // document.addEventListener('click', this.handleClick)
        // //https://www.algolia.com/apps/pl8QSDTQNJI7/api-keys/all buy plan in the future
        // const placesAutocomplete = places({
        //     appId: 'pl8QSDTQNJI7',
        //     apiKey: '733b89688631a321d9f3c12eb92dfb86',
        //     container: document.querySelector('#address-input')
        // });
        // document.addEventListener('keypress', this.handleKeyPress)
    }

    // handleKeyPress = e => {
    //     debugger
    //     //enter
    //     if (e.code === 13) {
    //         const skills = {
    //             ...this.state.skills,
    //             [this.state.currentSkill]: this.state.currentSkill
    //         }
    //         this.setState({ skills, currentSkill: '' })
    //     }
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('click', this.handleClick)
    // }

    // handleClick = e => {
    //     const ci = this.companyInput

    //     if (!ci.current.contains(e.target)) {
    //         this.setState({ isCompanyDropdownOpen: false })
    //     }
    // }

    // changeQuickTagsSelected = name => {
    //     const newQuickTagsVariantProps = this.state.quickTagsVariantProps
    //     if (newQuickTagsVariantProps[name] === 'default') {
    //         newQuickTagsVariantProps[name] = 'outlined'
    //     } else {
    //         newQuickTagsVariantProps[name] = 'default'
    //     }
    //     this.setState({ quickTagsVariantProps: newQuickTagsVariantProps })
    // }

    // handleCompanyOnChange = debounce((currentValue) => {
    //     currentValue && fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${currentValue}`, {
    //             crossDomain:true,
    //             method: 'GET',
    //             headers: {'Content-Type':'application/json'}
    //         })
    //             .then(res => res.json())
    //             .then(res => {
    //                 this.setState({
    //                     isCompanyDropdownOpen: !!currentValue,
    //                     companies: res
    //                 })})
    // }, 300)

    render() {
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
                                        <Label className="bold displayBlock">Job Description</Label>
                                        <Label className="bold displayBlock">Job Description</Label>
                                        <Button className="displayBlock">Button</Button>
                                    </div>
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
                                <button outline color="primary">
                                    + Add
                                </button>
                            </span>
                        </div>
                        <div className="displayFlex company-links-section">
                            <span className="company-links">
                                <img src="https://covinaca.gov/sites/default/files/imageattachments/library/page/1481/glassdoor.jpg" />
                            </span>
                            <span>
                                <button outline color="primary">
                                    + Add
                                </button>
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row className="job-application-description-row">
                </Row>
                {/* <Row className="job-application-description-row margin-bottom-one-rem">
                    <Col>
                        <div className="job-skills-section-header-label">
                            <Label for="job-skills">Skills required for the job</Label>
                            <i className="nc-icon nc-alert-circle-i information-icon" />
                        </div>
                        <div className="job-skills-section-header">
                            <div className="job-skills-section-search-input">
                                <i className="nc-icon nc-zoom-split job-application-search-icon" />
                                <input
                                    onKeyDown={e => {
                                        console.log(e.code, e.keyCode)
                                        if (e.keyCode === 13) {
                                            e.preventDefault()
                                            const skills = {
                                                ...this.state.skills,
                                                [this.state.currentSkill]: this.state.currentSkill
                                            }
                                            this.setState({ skills, currentSkill: '' })
                                        }
                                        // e.preventDefault()
                                        }}
                                    value={this.state.currentSkill}
                                    onChange={e => {
                                        // e.preventDefault()
                                        this.setState({ currentSkill: e.target.value })}}
                                    className="job-skills-section-reactstrap-search-input"
                                    id="job-skills"
                                    placeholder="ex. Project Management" />
                            </div>
                            <Button className="job-skills-add-button" color="primary" onClick={() => {
                                const skills = {
                                    ...this.state.skills,
                                    [this.state.currentSkill]: this.state.currentSkill
                                }
                                this.setState({ skills, currentSkill: '' })
                            }}>Add</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {keys(this.state.skills).map((skillKey, i) => (
                            <Chip
                                label={get(this.state.skills, skillKey, '')}
                                name={skillKey}
                                key={skillKey + i}
                                color="primary"
                                onDelete={() => {
                                    const skills = { ...this.state.skills }
                                    delete skills[skillKey]
                                    this.setState({ skills })
                                }}
                            />
                        ))}
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <div className="job-skills-section-header-label">
                            <Label for="job-skills">Quick tags (select why would you like to get this job or add more reasons)</Label>
                            <i className="nc-icon nc-alert-circle-i information-icon" />
                        </div>
                    </Col>
                </Row>
                <Row className="job-application-description-row">
                    <Col>
                        <Chip
                            variant={this.state.quickTagsVariantProps['closeToHome']}
                            label="Close to home"
                            name="closeToHome"
                            size="small"
                            clickable
                            color="primary"
                            onClick={() => this.changeQuickTagsSelected('closeToHome')}
                        />
                        <Chip
                            label={'Great Salary'}
                            name={'greatSalary'}
                            color="primary"
                            size="small"
                            clickable
                            variant={this.state.quickTagsVariantProps['greatSalary']}
                            onClick={() => this.changeQuickTagsSelected('greatSalary')}
                        />
                        <Chip
                            label={'Diverse company'}
                            name={'diverseCompany'}
                            color="primary"
                            size="small"
                            clickable
                            variant={this.state.quickTagsVariantProps['diverseCompany']}
                            onClick={() => this.changeQuickTagsSelected('diverseCompany')}
                        />
                        <Chip
                            label={'Start up'}
                            name={'startUp'}
                            color="primary"
                            size="small"
                            clickable
                            variant={this.state.quickTagsVariantProps['startUp']}
                            onClick={() => this.changeQuickTagsSelected('startUp')}
                        />
                        <Chip
                            label={'Good review'}
                            name={'goodReviews'}
                            color="primary"
                            size="small"
                            clickable
                            variant={this.state.quickTagsVariantProps['goodReviews']}
                            onClick={() => this.changeQuickTagsSelected('goodReviews')}
                        />
                        <Chip
                            label={'Work from home available'}
                            name={'workFromHomeAvailable'}
                            color="primary"
                            size="small"
                            clickable
                            variant={this.state.quickTagsVariantProps['workFromHomeAvailable']}
                            onClick={() => this.changeQuickTagsSelected('workFromHomeAvailable')}
                        />
                        <Chip
                            label={'Great Benefits'}
                            name={'greatBenefits'}
                            color="primary"
                            size="small"
                            clickable
                            variant={this.state.quickTagsVariantProps['greatBenefits']}
                            onClick={() => this.changeQuickTagsSelected('greatBenefits')}
                        />
                        {keys(this.state.quickTags).map((quickTag, i) => (
                            <Chip
                                label={get(this.state.quickTags, quickTag, '')}
                                name={quickTag}
                                key={quickTag + i}
                                color="primary"
                                size="small"
                                clickable
                                variant={this.state.quickTagsVariantProps[quickTag]}
                                onClick={() => this.changeQuickTagsSelected(quickTag)}
                            />
                        ))}
                    </Col>
                </Row>
                <Row className="job-application-description-row margin-bottom-one-rem">
                    <Col>
                        <div className="job-skills-section-header">
                            <div className="job-skills-section-search-input">
                                <i className="nc-icon nc-zoom-split job-application-search-icon" />
                                <input
                                    onKeyDown={e => {
                                        if (e.keyCode === 13) {
                                            e.preventDefault()
                                            const quickTags = {
                                                ...this.state.quickTags,
                                                [this.state.currentQuickTag]: this.state.currentQuickTag
                                            }
                                            const quickTagsVariantProps = {
                                                ...this.state.quickTagsVariantProps,
                                                [this.state.currentQuickTag]: 'default'
                                            }
                                            this.setState({ quickTags, currentQuickTag: '', quickTagsVariantProps })
                                        }
                                        }}
                                    value={this.state.currentQuickTag}
                                    onChange={e => {
                                        this.setState({ currentQuickTag: e.target.value })}}
                                    className="job-skills-section-reactstrap-search-input"
                                    placeholder="ex. Fun work environment" />
                            </div>
                            <Button className="job-skills-add-button" color="primary" onClick={() => {
                                const quickTags = {
                                    ...this.state.quickTags,
                                    [this.state.currentQuickTag]: this.state.currentQuickTag
                                }
                                const quickTagsVariantProps = {
                                    ...this.state.quickTagsVariantProps,
                                    [this.state.currentQuickTag]: 'default'
                                }
                                this.setState({ quickTags, currentQuickTag: '', quickTagsVariantProps })
                            }}>Add</Button>
                        </div>
                    </Col>
                </Row> */}
            </Form>
        );
    }
}

JobApplicationDescription.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default JobApplicationDescription;
