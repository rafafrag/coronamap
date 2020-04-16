import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const SecondPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Page Two</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>CDC Guidelines</h1>
        <div>
          <p>
            There is currently no vaccine to prevent coronavirus disease
            (COVID-19).
          </p>
          <p>Avoid being exposed to this virus.</p>
          <p>The virus is mainly spread from person-to-person.</p>
          <p>Between people who are in close contact with one another.</p>
          <p>
            Through respiratory droplets produced when an infected person
            coughs, sneezes or talks.
          </p>
          <p>
            These droplets can land into people who are nearby or possibly be
            inhaled into the lungs.
          </p>
          <p>COVID-19 may be spread by people who are not showing symptoms.</p>
          <p>keep a distance of about 6 feet (aprox. 2m) to people.</p>
        </div>
        <a href="https://www.cdc.gov/">
          Visit Center for Desisses Control & Prevention
        </a>
      </Container>
    </Layout>
  );
};

export default SecondPage;
