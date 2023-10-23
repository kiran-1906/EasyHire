// App.js
import React from "react";
import "./App.css";

function Home() {
  return (
    // <meta charset="UTF-8" />
    // <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <div>
      <title>Career Fair</title>
      <header>
        <div id="logo">EasyHire</div>
        <nav>
          <a href="#">HOME</a>
          <a href="#">BLOG</a>
          <a href="#">FAIRS</a>
          <a href="#">HELP</a>
          <a href="#" id="login-btn">
            LOGIN
          </a>
        </nav>
      </header>

      <main>
        <h1>Which best describes you?</h1>
        <div class="option">
          <a href="EventRecruiter.js">
            <button>Event Host</button>
          </a>
          <button>Recruiter</button>
          <button>Candidate</button>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default Home;
