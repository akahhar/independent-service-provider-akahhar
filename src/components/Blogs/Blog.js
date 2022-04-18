import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="container col-xl-6 mt-5 ">
      <h4>1. Difference between authorization and authentication</h4>
      <table style={{ width: "90%" }}>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Authentication</th>
            <th>Authorization</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>
              In authentication process, the identity of users are checked for
              providing the access to the system.
            </td>
            <td>
              While in authorization process, person’s or user’s authorities are
              checked for accessing the resources.
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td>In authentication process, users or persons are verified.</td>
            <td>While in this process, users or persons are validated.</td>
          </tr>
          <tr>
            <td>3.</td>
            <td> It is done before the authorization process.</td>
            <td>
              While this process is done after the authentication process.
            </td>
          </tr>
        </tbody>
      </table>
      <h4 className="mt-4">
        2.Why are you using `firebase`? What other options do you have to
        implement authentication?
      </h4>
      <p>
        Answer : Firebase Authentication makes it easier to get your users
        signed-in without having to understand the complexities behind
        implementing your own authentication system. Firebase Authentication
        provides backend services, easy-to-use SDKs, and ready-made UI libraries
        to authenticate users to your app.
        <br />
        Other options I have to implement authentication : It supports
        authentication using passwords, phone numbers, popular federated
        identity providers like Google, Facebook and Twitter,
      </p>
      <h4 className="mt-4">
        3.What other services does `firebase` provide other than authentication?
      </h4>
      <p>
        Answer : There are many services which Firebase provides, Most useful of
        them are:
        <br />
        <ul>
          <li>Cloud Firestore</li>
          <li>Cloud Functions</li>
          <li>Authentication</li>
          <li>Hosting</li>
          <li>Cloud Storage</li>
          <li>Google Analytics</li>
          <li>Predictions</li>
          <li>Cloud Messaging</li>
        </ul>
      </p>
    </div>
  );
};

export default Blog;
