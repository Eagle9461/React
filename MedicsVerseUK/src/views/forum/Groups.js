import React, {useMemo}from "react";
import Table from "./GroupTable.js";

function Groups(props){
 
    return (
        <Table groups={props.groups} />
    )
}
export default Groups;