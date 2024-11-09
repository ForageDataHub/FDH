import React from "react";
import "./SubmissionForm.css";

function SubmissionForm() {
  return (
    <div className="Submission-form-div">
      <iframe
        className="Submission-form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdgjwcx0w9ymJKcpw5V9CNIB_dVHHjL5NlDYlLlkkPgtXh9Ig/viewform?embedded=true"
      >
        Loading…
      </iframe>
    </div>
  );
}

export default SubmissionForm;
