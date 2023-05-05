import api from "./service/api";
import axios from "axios";
export const getJobRequest = (url, payload) => 
    axios
        .post("http://52.91.178.77/api.php?type=all_health_jobs", payload)
        .then((res) => res)
        .catch(err => err.response)

// export const getJobRequest = async (requestUrl, requestData) =>
//     api
//         .get(requestUrl, requestData)
//         .then((resp) => resp)
//         .catch((error) => error.response);