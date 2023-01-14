import { useEffect, useState } from "react";

const BackEnd = () => {
  return (
    <>
      <h3>For Back-End languages, I have experience with</h3>
      <ul>
        <li>TypeScript</li>
        <li>Express/Node</li>
        <li>Java</li>
      </ul>
      <div>
        <h3>Database</h3>
        <ul>
          <li>PostgreSQL</li>
          <li>Mongo DB</li>
        </ul>
      </div>
      <div className="knowledge">
        <h3>Knowledge with</h3>
        <ul>
          <li>Heroku</li>
          <li>Netlify</li>
          <li>Render</li>
        </ul>
      </div>
    </>
  );
};

export default BackEnd;
