import React from "react";
import "./InfoCard.css";

interface Props {
  title: string;
  text: string;
  link: string;
}

function getWebsite(link: string) {
  if (link !== "") {
    return (
      <span style={{ marginTop: 10, marginBottom: 10 }}>
        <b>Website: </b>
        <a target="_blank" rel="noopener noreferrer" href={link}>
          {link}
        </a>
      </span>
    );
  }
}

function getAdditionalContent(title: string) {
  if (title === "National Forage Data Hub") {
    return (
      <>
        <div style={{ marginTop: 15, marginBottom: 10 }}>
          <p>
            <b>Want to be notified when the full Forage Data Hub goes live?</b>
            <br></br>
            Click the link below and enter your email address:
            <br></br>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSekut47E6cOhtgjHGZ_YheZGXzdER_qvH1fQBkjmcmnb1YFFg/viewform?usp=sf_link"
              }
            >
              Notify Me
            </a>
          </p>
        </div>
        <div>
          <p>
            <b>Have data you'd like to contribute?</b>
            <br></br>
            Click the link below and fill out the form:
            <br></br>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSdgjwcx0w9ymJKcpw5V9CNIB_dVHHjL5NlDYlLlkkPgtXh9Ig/viewform?usp=sf_link"
              }
            >
              Contribute
            </a>
          </p>
        </div>
      </>
    );
  }
}

function InfoCard(props: Props) {
  return (
    <div className="Info-card">
      <h1 className="Info-card-title">{props.title}</h1>
      <div className="Info-card-decor"></div>
      <p className="Info-card-text">{props.text}</p>
      {getWebsite(props.link)}
      {getAdditionalContent(props.title)}
    </div>
  );
}

export default InfoCard;
