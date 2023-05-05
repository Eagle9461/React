import React from "react";
// reactstrap components
import {
  Container,
  Button
} from "reactstrap";
import Slider from "react-slick";
import JobCard from "components/JobCard.js";

// core components

function PopularCourses() {
  var settings = {
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const recommendedJobsList = [
    {
      title: "Security Courses",
      salary: {
        from: 15000,
        to: 25000
      },
      type: {
        jobtype: "online",
        time: "14 weeks, Self paced"
      }
    }, {
      title: "Security Courses",
      salary: {
        from: 15000,
        to: 25000
      },
      type: {
        jobtype: "online",
        time: "14 weeks, Self paced"
      }
    }, {
      title: "Security Courses",
      salary: {
        from: 15000,
        to: 25000
      },
      type: {
        jobtype: "online",
        time: "14 weeks, Self paced"
      }
    }, {
      title: "Security Courses",
      salary: {
        from: 15000,
        to: 25000
      },
      type: {
        jobtype: "online",
        time: "14 weeks, Self paced"
      }
    }, {
      title: "Security Courses",
      salary: {
        from: 15000,
        to: 25000
      },
      type: {
        jobtype: "online",
        time: "14 weeks, Self paced"
      }
    },
  ]
  return (
    <Container className="popular-courses-container">
      <div className="title-main">Popular Courses</div>
      <Slider {...settings}>
        {
          recommendedJobsList.map((c, i) =>
            <JobCard key={i} jobdata={c} />
          )
        }
      </Slider>
      <Button className="view-more" outline>
        <a href="/courses">
          View more Courses
        </a>
      </Button>
    </Container>
  );
}


export default PopularCourses;