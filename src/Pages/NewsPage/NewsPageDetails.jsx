// import React, { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import SingleNewsDetail from "./SingleNewsDetail";

const NewsPageDetails = ({ details }) => {
     // const { _id } = details;
     console.log(details);
     // const [details,setDetails]=useState({})
     // // console.log(details)
     // const data = useLoaderData()
     // // console.log(data)
     // const {id} = useParams()
     // useEffect(()=>{
     //      const findDetails = data.find(singleDetail=> singleDetail.id === id)
     //      setDetails(findDetails)
     // },[data,id])

     return (
          <div>
               <h3 className="text-3xl">Dragon News</h3>
               { details?.details}
          </div>
     );
};
// const NewsPageDetails = () => {
//      const [details,setDetails]=useState({})
//      console.log(details)
//      const data = useLoaderData()
//      // console.log(data)
//      const {id} = useParams()
//      useEffect(()=>{
//           const findDetails = data.find(singleDetail=> singleDetail.id === id)
//           setDetails(findDetails)
//      },[data,id])

//      return (
//           <div>
//                <SingleNewsDetail details={details}></SingleNewsDetail>
//           </div>
//      );
// };
export default NewsPageDetails;
