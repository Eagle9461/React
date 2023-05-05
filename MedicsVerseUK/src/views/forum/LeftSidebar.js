import React from "react";
import { Container } from "reactstrap";
import DynamicTree from 'react-dynamic-animated-tree'
import Table from "./GroupTable";
var data = [{
    "title": "medicines",
    "id": "1",
    "childNodes": [{
        "title": "Western Province",
        "id": "11",
        "childNodes": [{
            "title": "Colombo District",
            "id": "111",
            "childNodes": [],
        }],
    },
    {
        "title": "Central Province",
        "id": "12",
        "childNodes": [{
            "parentNode": null,
            "childNodes": [],
            "title": "Kandy",
            "id": "121"
        }],
    }],
},
{
    "title": "Social Care",
    "id": "2",
    "childNodes": [{
        "title": "Maharashtra",
        "id": "21",
        "childNodes": [{
            "title": "Pune",
            "id": "211",
            "childNodes": [],
        }],
    }],
},
{
    "title": "Pharmacy",
    "id": "3",
    "childNodes": [{
        "title": "Maharashtra",
        "id": "21",
        "childNodes": [{
            "title": "Pune",
            "id": "211",
            "childNodes": [],
        }],
    }],
}]


function LeftSidebar() {
    return <DynamicTree data={[...data]} />

}

export default LeftSidebar;