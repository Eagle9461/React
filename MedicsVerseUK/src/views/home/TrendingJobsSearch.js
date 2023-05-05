import React from "react";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";
// core components

function TrendingJobsSearch() {
  const [plainTabs, setPlainTabs] = React.useState("1");
  const recommendedSectors = [
    {
      imgSrc: "../../assets/img/Rectangle_14.png",
      id: "1142lkdjrfwewir",
      title: "Retail",
      link: "/jobs",
    }, {
      imgSrc: "../../assets/img/Rectangle_14.png",
      id: "1142lkdjrfwewfgir",
      title: "Corporate",
      link: "/jobs",
    }, {
      imgSrc: "../../assets/img/Rectangle_14.png",
      id: "1142lkdjrfwesdfwir",
      title: "Static",
      link: "/jobs",
    }, {
      imgSrc: "../../assets/img/Rectangle_14.png",
      id: "1142lkdjderfwewir",
      title: "Students",
      link: "/jobs",
    },
  ]
  const recommendedLocations = [
    {
      imgSrc: "../../assets/img/Rectangle_14.png",
      id: "1142lkdjrfwewir",
      title: "London",
      link: "/jobs",
    }, {
      imgSrc: "../../assets/img/Rectangle_14.png",
      id: "1142lkdjrfwewfgir",
      title: "Manchester",
      link: "/jobs",
    }, {
      imgSrc: "../../assets/img/Rectangle_14.png",
      id: "1142lkdjrfwesdfwir",
      title: "Birmgham",
      link: "/jobs",
    }, {
      imgSrc: "../../assets/img/Rectangle_14.png",
      id: "1142lkdjderfwewir",
      title: "Wales",
      link: "/jobs",
    },{
      imgSrc: "../../assets/img/Rectangle_14.png",
      id: "1142lkdjderfwewir",
      title: "glassgow",
      link: "/jobs",
    },{
      imgSrc: "../../assets/img/Rectangle_14.png",
      id: "1142lkdjderfwewir",
      title: "Luton",
      link: "/jobs",
    },{
      imgSrc: "../../assets/img/Rectangle_14.png",
      id: "1142lkdjderfwewir",
      title: "Milton keynes",
      link: "/jobs",
    },
  ]
  return (
    <Container className="trending-job-search">
      <div className="nav-tabs-navigation">
        <div className="nav-tabs-wrapper">
          <Nav data-tabs="tabs" tabs className="justify-content-center">
            <NavItem>
              <NavLink
                className={(plainTabs === "1" ? "active" : "") + " tab"}
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  setPlainTabs("1");
                }}
              >
                Sector
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={plainTabs === "2" ? "active" : ""}
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  setPlainTabs("2");
                }}
              >
                Location
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
      <TabContent
        className="text-center"
        activeTab={"plainTabs" + plainTabs}
      >
        <TabPane tabId="plainTabs1">
          <Row>
            {recommendedSectors.map((c, i) =>
              <Col lg="3" md="4" sm="6" key={i}>
                <img alt="..." className="rounded" src={require("assets/img/Rectangle_14.png")} width="90%"></img>
                <a href={c.link} className="job-title">{c.title}</a>
              </Col>
            )}
          </Row>
        </TabPane>
        <TabPane tabId="plainTabs2">
          <Row>
            {recommendedLocations.map((c, i) =>
              <Col lg="3" md="4" sm="6" key={i}>
                <img alt="..." className="rounded" src={require("assets/img/image 1.png")} width={"90%"} />
                <a href={c.link} className="job-title">{c.title}</a>
              </Col>
            )}
          </Row>
        </TabPane>
      </TabContent>
    </Container>
  );
}

export default TrendingJobsSearch;