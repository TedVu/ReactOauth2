import React from "react";

export default class GoogleAuth extends React.Component {
  componentDidMount() {
    console.log(process.env.REACT_APP_CLIENT_ID);
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "74840775801-p9ddu7820tnsoegvcfpgeqdnia955ese.apps.googleusercontent.com",
        scope: "email",
        plugin_name: "stream",
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}
