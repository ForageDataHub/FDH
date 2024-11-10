import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InfoCard from "../InfoCard/InfoCard";
import "./InfoPanel.css";

function InfoPanel() {
  return (
    <Container className="Info-panel">
      <Row className="Info-panel-row">
        <Col className="Info-panel-col">
          <Button
            as="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdgjwcx0w9ymJKcpw5V9CNIB_dVHHjL5NlDYlLlkkPgtXh9Ig/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="Contribute-button"
          >
            <h2 style={{ paddingTop: 10 }}>
              <i>Contribute</i>
            </h2>
          </Button>
        </Col>
      </Row>
      <Row className="Info-panel-row">
        <Col className="Info-panel-col">
          <InfoCard
            title="National Forage Data Hub"
            text="The National Forage Data Hub (FDH) is a community-driven forage database
            which aims to serve as a central repository and open-source platform for sharing
            forage related data. The FDH is currently under development as a part of the
            Resilience CAP grant, a 5-year ongoing project aimed at improving resilience of
            agricultural systems. This site is a temporary homepage for the FDH; the full-scale
            data hub will include interactive user interfaces for exploring and querying forage
            data, tools for formatting, downloading, and citing data, a streamlined
            system for contributing and managing data, and more."
            link=""
          />
        </Col>
      </Row>
      <Row className="Info-panel-row">
        <Col className="Info-panel-col">
          <InfoCard
            title="Resilience CAP"
            text="The Resilience Coordinated Agricultural Project is a collaborative
            research, education, extension, and outreach effort aimed at
            improving resilience of agricultural systems by 1) discovering
            adaptive production and socioeconomic strategies that help shield
            producers from impacts of climate change and market shocks; and 2)
            encouraging adoption of perennials, diversification, and integration
            of livestock with forage and crop production for greater
            agricultural resilience from field to farm scales."
            link="https://ag-resilience.org/"
          />
        </Col>
        <Col className="Info-panel-col">
          <InfoCard
            title="Partnerships for Data Innovations"
            text="Partnerships for Data Innovations (PDI) is an initiative through the
            US Department of Agriculture's Agricultural Research Service
            (USDA-ARS) committed to aiding agricultural research scientists and
            their partners in standardizing, modernizing, and improving
            scientific data acquisition, storage, and visualization through
            innovative tools and applications. The PDI goal is highly automated,
            integrated and interoperable datasets that empower efficient and
            impactful research collaborations."
            link="https://pdi-spotlight-usdaars.hub.arcgis.com/"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default InfoPanel;
