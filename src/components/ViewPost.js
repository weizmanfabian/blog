import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import dateFormat from "dateformat";
import { getAllPost, getPost } from '../data/api';

//v => Post
const ViewPost = ({ user }) => {

  let { id } = useParams();

  const [v, setV] = useState();

  useEffect(() => {
    firstAction()
  })

  const firstAction = async () => {
    const { data } = await getPost(id)
    setV(data)
  }

  return v && (
    <div className="row">
      <div key={v.id} className="col-md-6 col-lg-4 m-1">
        <div className="card" style={{ minWidth: "200px", height: "360px" }}>

          <div className="card-header">
            <div className="row">
              <div className="col-3" >
                <img className="img-fluid rounded" src={v.owner.picture} style={{ maxWidth: "50px" }} alt="" />
              </div>
              <div className="col-9">
                {`${v.owner.title} ${v.owner.firstName} ${v.owner.lastName}`}
                <br />
                {dateFormat(v.publishDate, "mmm d yyyy HH:MM:ss")}
              </div>
            </div>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-6 " >
                <img className="" src={v.image} style={{ maxWidth: "100%", height: "250px" }} alt="" />
              </div>
              <div className="col-6">
                {dateFormat(v.publishDate, "mmm d yyyy HH:MM:ss")}
                <br />
                {v.text}
                <br />
                {v.tags.map((tag, idx) => (
                  <label key={idx} className="m-1 rounded p-1" style={{ "background": "rgba(219, 39, 119)", color: "#fff" }}>{tag}</label>
                ))}
                <br />
                <i className="fa-solid fa-thumbs-up mx-2" style={{ fontSize: "25px" }}></i>
                {v.likes}
              </div>
            </div>
          </div>

        </div>
      </div>

    </div >
  );
}

export default ViewPost;