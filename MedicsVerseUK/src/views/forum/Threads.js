import axios from "axios";

import * as Constants from "environment";

import ThreadBody from "components/ThreadBody.js";
import React, {useMemo, useState, useEffect}from "react";

import Table from "./GroupTable.js";
import PaginationComponent from "react-reactstrap-pagination";
import { Button } from "reactstrap";
import  { useHistory } from 'react-router-dom'

function Threads(props){
  const [selectedPage, setSelectedPage] = useState(1, "set the pageNumber");
  const [threads, setThreads] = useState([], "set the threads");
  const [loading, setLoading] = useState(true, "set Loading");
  useEffect(() => {
      // send HTTP request
      let categoryID = props.match.params.categoryID;
      let access_token = localStorage.getItem('access_token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
      axios.get(Constants.server_url+"threads/"+categoryID)
      .then(res => { setThreads(res.data.data); setLoading(false); })
      .catch(err => { setLoading(false)})
      // save response to variable
  }, [])
  let history = useHistory();

  let pageSize = 10;
  const handleSelected = (page) => {
    setSelectedPage(page)
  }
  const openPostPage = () => {
    history.push('/forum/'+props.match.params.categoryID+'/post');
  }
    return (
      <div>
        <Button onClick={openPostPage} >Post a Forum</Button>
        {
          loading ? "Loading....":
            <ThreadBody threads={threads} />
        }

        <PaginationComponent
          totalItems={100}
          pageSize={pageSize}
          onSelect={handleSelected}
          firstPageText="<<"
          previousPageText="<"
          nextPageText=">"
          lastPageText=">>"
        />
      </div>
    )
}
export default Threads;