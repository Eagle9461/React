const { Card, CardBody, Button } = require("reactstrap");

function CourseCard(props) {

    return (
        <Card className={props.className + " card2 course-card"}>
            <CardBody>
                <div className="row">
                    {/* <div className="col-sm-0 col-md-3">
                        <img className="create-company-logo" src={require("assets/img/278_logo.gif")} />
                    </div> */}
                    <div className="col-sm-12 col-md-9">
                        <a className="card-title" href={props.coursedata.link}>{props.coursedata.title}</a>
                        <div className="created-date-and-author" style={{marginLeft: "10px"}}>{props.coursedata.agency_name} </div>

                        <div className="row card-metadata-group">
                            <div className="col-sm-6">
                                <div className="card-metadata"> {props.coursedata.price} </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card-metadata card-metadata-type"> {props.coursedata.duration}</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="25px" height="21" viewBox="0 0 512 512"><title>box-cross</title><path d="M96 448Q82 448 73 439 64 430 64 416L64 96Q64 82 73 73 82 64 96 64L416 64Q430 64 439 73 448 82 448 96L448 416Q448 430 439 439 430 448 416 448L96 448ZM256 288L320 352 352 320 288 256 352 192 320 160 256 224 192 160 160 192 224 256 160 320 192 352 256 288Z" /></svg>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-9">
                        <a className="card-readmore" href="#">
                            <i className="now-ui-icons arrows-1_minimal-down"></i>&nbsp;
                            <span>What does this course offer?</span>
                        </a>
                        <div className="course-offer">{props.coursedata.content} </div>
                        <div className="course-badge-group">
                            <span className="badge badge-pill text-info">Great service</span>
                            <span className="badge badge-pill text-danger">Highly rated</span>
                            <span className="badge badge-pill text-success">Trending</span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 enquire-section">
                        <div className="enquire-text">Enquire for pricing</div>
                        <Button outline>Enquire now</Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}
export default CourseCard;