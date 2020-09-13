import React from "react";

export const blogData = [
  {
    content: "Blog system is GO!!!",
    time: "2020-07-12 14:00",
  },
  {
    content:
      "I've been studying David Silver's RL course for a week now. But those concepts are really confusing so I started to find some tutorial material to have some exercise. Working on this repo: https://github.com/dalmia/David-Silver-Reinforcement-learning.git, I've created a pull request to fix 2 bugs so that the answer provided by the author can work properly. This PR really feels good, lol.",
    time: "2020-07-12 16:00"
  },
  {
    content: "Just found out there's a huge repo for exercises about RL talored to the David Silver's RL course. Life sucks... Anyway, I'm pretty happy that I did know how to study RL afterall. I tried to look for exercises/tutorials to learn better, and it turns out that I'm right to do so. (Since there a whole repo for this) Cool, let me get to it right away, lol.",
    time: "2020-07-12 20:34"
  },
  {
    content: "Ahhh Just quitted on my game design project. It really sucks. Anyway, hopefully the time saved by doing this will finally pay off.",
    time: "2020-07-15 01:11"
  },
  {
    content: "Experience with Methematica: Have to find a way to optimize over complex matrices... Right now, Maximize can optimize over Real matrices rather than complex ones; but NMaximize always finds that a matrix to be not square, which is so wierd... ",
    time: "2020-08-02 01:46"
  },
  {
    content:
      <span>
        <p>Year 3 course selection began today, but I just found loads of time clashes among the courses I dream to take. Though heart-broken, there's still hope, lol. So let me write the courses that I'm going to learn by myself down for my future reference.</p>
        <p><a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH3301"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}>MATH3301 Algebra 1: </a>Relatively easy, but is very fundamental. What some structures (group, ring, field) are and their easy propertities.</p>
        <p><a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH4302"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}>MATH4302 Algebra 2: </a>More interesting. Part A: What is PID and UFD; Part B: Field Theory, domain extension and Galois Theory; Part C: Module Theory (Based on PID) -- "Best course in HKU"(Gao, 2019)</p>
        <p><a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH3401"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}>MATH3401 Analysis 1: </a>More familiar. Metric Topology. The basis for analytics. A generalization of MATH2241 but 2241 is not a necessity. Useful in understanding CS problems systemetically, especially when dealing with computational geometry stuff.</p>
        <p><a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH3541"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}>MATH3541 Topology: </a>Point Set Topology (which can be regarded as a generalization of Metric Topology) with some Algebraic Topology (Including Fundamental Group and Covering Space). Important course and very fundamental. It needs a bit of abstract algebra so it's best to ocnsider it after taking Algebra 1 and Analysis 1. TCS also needs topology, especially if my research interest is computational geometry.</p>
        <p><a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH3901"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}>MATH3901 Operations Research 1: </a>Very useful. LP and SDP are very important and are everywhere. "But avoid Xiaoming Yuan since he's course might be a bit awful"(Gao, 2019)</p>
        <p><a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH3601"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}>MATH3601 Numerical Analysis</a></p>
        <p><a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH3904"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}>MATH3904 Optimization: </a>Oversea univerisities like to teach convex optimization so that we can solve problems, while HKU likes to teach it in a more theoretical way. <a href="http://web.stanford.edu/~boyd/"
            target="_blank"
            rel="noopener noreferrer">Stephen Boyd's</a> lectures and textbook are very helpful. (364a, 364b)(Zhang, 2020)</p>
        <p><a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=STAT3600"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}>STAT3600 Linear Statistical Analysis</a></p>
        <p><a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=STAT3603"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold" }}>STAT3603 Stochastic Processes</a></p>
      </span>,
    time: "2020-07-27 17:36"
  },
  {
    content: (<span>
      Just had a talk with JiaZhang, and here are the postgrad courses important:
      <p><a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH7505"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontWeight: "bold" }}>MATH7505 Real Analysis: </a>Recommended textbook: Royden 3rd Ed.</p>
      <p><a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=STAT7609"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontWeight: "bold" }}>STAT7609 Research methods in statistics: </a>Kind of classical, like computing the distribution of a order statistic, lecture notes are <a href="https://drive.google.com/drive/folders/1V3jF8i-OHKwkyKEvVllDGE1vwRpJP67h?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">here</a></p>
      <p><a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=STAT7610"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontWeight: "bold" }}>STAT7610 Advanced probability: </a>It includes measure theory and it provides introductory explanation of it. But it's quite confusing if I've never learned measure theory from a analysis point of view. It's better to have a taste of it using <a href="https://services.math.duke.edu/~rtd/"
          target="_blank"
          rel="noopener noreferrer">this author</a>'s <a href="https://services.math.duke.edu/~rtd/PTE/pte.html"
            target="_blank"
            rel="noopener noreferrer">Probability: Theory and Examples. 5th Edition</a> and try its exercises out before deciding to take it.</p>
      <p><a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=STAT7611"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontWeight: "bold" }}>STAT7611 Computational statistics: </a>Lectures can be found <a href="https://drive.google.com/drive/folders/1allya-g0uSYB-oGnN9z-z0jeyTTUEzkI?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">here</a>. Very useful and it's like a high level introductory for methods used in statistical research. However, it requires extra learning from other textbooks or papers to fully understand the content. "But Prof.Yin doesn't fully master all the things he teach in that course" (Zhang, 2020)</p>
    </span>),
    time: "2020-07-28 11:57"
  }
];
