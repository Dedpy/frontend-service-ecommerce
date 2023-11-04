import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 h-48 p-12">
      <h1 className="text-4xl font-bold flex items-center justify-center ">
        Wassim Ben Romdhane
      </h1>
      <ul className="flex flex-row justify-center items-center gap-6">
        <li>
          <a href="https://github.com/Dedpu" className="hover:underline">
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/wassimbenr/"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://wassimbenr.com" className="hover:underline">
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
