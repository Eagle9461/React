const { Card, CardBody, CardImg } = require("reactstrap");

function CareerAdviceCard(props) {

    return (
        <Card className={props.className +" career-advice-card"}>
            <CardBody>
            <CardImg alt="..." src={require("assets/img/Rectangle_14.png")} top></CardImg>

                <div>Vision2Learn</div>
                <a className="card-readmore" href="/jobs">readmore</a>
            </CardBody>
        </Card>
    )
}
export default CareerAdviceCard;