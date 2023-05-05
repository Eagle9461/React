const { Card, CardBody } = require("reactstrap");

const defaultJobdata  = {
    title: "Security Course",
    salary: {
        from: 15000,
        to: 25000
    },
    type: {
        jobtype: "online",
        time: "14 weeks, Self paced"
    }
}
function JobCard({ jobdata = defaultJobdata, className = "" }) {


    return (
        <Card className={className + " job-card"}>
            <CardBody>
                <a className="card-title" href="/courses">{jobdata.title}</a>
                <div>Vision2Learn</div>
                <div className="card-job-salary-range">{`${jobdata.salary.from} - ${jobdata.salary.to} `}</div>
                <div className="card-job-type">
                    <div>{jobdata.type.jobtype}</div>
                    <div>{jobdata.type.time}</div>
                </div>
                <a className="card-readmore" href="/courses">Read More</a>
            </CardBody>
        </Card>
    )
}
export default JobCard;