import React from "react"
import emailImg from "../images/gmail.png"
import githubImg from "../images/github.png"
import mobile from "../images/mobile.png"

export default function Contact() {
  return (
<div class="row ">
  <div class="col-4 ">
    <div className="list-group" role="tablist">
      <a className="list-group-item list-group-item-action active" 
       data-toggle="list" href="/" role="tab" aria-controls="home">Home</a>
      <a className="list-group-item list-group-item-action" data-toggle="list" href="mailto:navanmapp@gmail.com" role="tab">
      <img src={emailImg} alt="" className="icon email-icon" />
      <span className="label">Email Us</span>
      </a>
      <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" 
        href="https://github.com/NavanMapp?tab=repositories" role="tab" aria-controls="messages">
                            <img src={githubImg} className="icon github-icon" />
                            <span className="label">Github</span>
      </a>
      <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="tel:+27614603844" role="tab" aria-controls="settings">
        <img src={mobile} alt="" className="icon mobile-icon" />
        <span className="label">Call Us</span>
      </a>
    </div>
  </div>
  <div className="col-8">
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
      <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
      <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
      <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
    </div>
  </div>
</div>
  )
}
