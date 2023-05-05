const { Card, CardBody } = require("reactstrap");
const defaultJobdata =
{
    "title": "Security Officer",
    "salary": "\u00a315 an hour",
    "location": "London",
    "description": "",
    "apply_link": "https:\/\/uk.indeed.com\/rc\/clk?jk=575f3a2f7f12ee5c&fccid=95fcff06e59f4033&vjs=3",
    "agency_name": "G4S",
    "category": "Security",
    "job_types": [
        " Permanent"
    ],
    "timestamp": "2023-02-22 08:30:43"
}

function JobCard2({ jobdata = defaultJobdata, className = "", id }) {
    return (
        <Card className={className + " card2 card2-promoted"}>
            <CardBody>
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        {/* <div className="promoted">Promoted</div> */}
                        <a className="card-title" href={jobdata.apply_link}>{jobdata.title}</a>
                        <div className="created-date-and-author">{jobdata.timestamp} </div>
                        <div className="row card-metadata-group">
                            <div className="col-sm-6">
                                <div className="card-metadata card-metadata-salary">{jobdata.salary || "no info"}</div>
                                <div className="card-metadata card-metadata-location"> {jobdata.location || "no info"}</div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card-metadata card-metadata-type"> {jobdata.job_types || "no info"}</div>
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
                {jobdata.description ?

                    <button className="card-readmore" type="button" data-toggle="collapse" data-target={`#collapseExample${id}`} aria-expanded="false" aria-controls={`#collapseExample${id}`}>
                        <i className="now-ui-icons arrows-1_minimal-down"></i>&nbsp;
                        See more
                    </button>

                    : ""}
                <div className="job-description collapse" id={`collapseExample${id}`}>
                    {jobdata.description ? jobdata.description : "no description"}
                </div>
            </CardBody>
        </Card>
    )
}
export default JobCard2;