import { useState, useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute right-6 top-6 text-sm underline"
        >
          Toggle Dark Mode
        </button>

        <h1 className="text-4xl font-bold mb-2">Ale Kolajo Israel</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          I build clean, scalable, and user-focused web interfaces.
        </p>

        <p className="max-w-3xl mb-6">
          Computer Engineering graduate and Junior Front-End / Software Engineer
          with hands-on experience building responsive web applications using
          modern frontend technologies. I enjoy turning ideas into functional,
          accessible products and collaborating in remote teams.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="https://github.com/MKOAle"
            target="_blank"
            className="px-4 py-2 bg-black text-white rounded-md"
          >
            GitHub
          </a>
          <a
            href="/Ale_Kolajo_Israel_Frontend_Developer_Resume_FIXED.pdf"
            className="px-4 py-2 border rounded-md"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-white dark:bg-gray-800 py-12">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-2xl font-semibold mb-2">Skills</h2>
    <p className="text-sm text-gray-500 mb-6">
      Technologies and tools I work with.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React",
        "Tailwind CSS",
        "Bootstrap",
        "REST APIs",
        "Git & GitHub",
      ].map((skill) => (
        <div
          key={skill}
          className="border rounded-lg p-3 bg-gray-50 dark:bg-gray-900 text-center"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
</section>
      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-2">Selected Projects</h2>
        <p className="text-sm text-gray-500 mb-8">
          Projects pulled from my GitHub.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Project
            title="Movie Database App"
            desc="A responsive movie browsing application using a public API with search and filtering."
            tech="HTML, CSS, JavaScript, API"
          />
          <Project
            title="Quiz Platform"
            desc="Interactive quiz platform with scoring logic and instant feedback."
            tech="JavaScript, HTML, CSS"
          />
          <Project
            title="To-Do List Platform"
            desc="Task management app with CRUD operations and local storage persistence."
            tech="JavaScript, HTML, CSS"
          />
          <Project
            title="JavaScript Utilities"
            desc="Collection of small JavaScript projects and logic-based utilities."
            tech="JavaScript"
          />
          <Project
            title="React Practice Projects"
            desc="Reusable components and mini React applications."
            tech="React"
          />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-white dark:bg-gray-800 py-16">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-2xl font-semibold mb-4">
      Experience & Certifications
    </h2>

    <p className="mb-4 text-gray-700 dark:text-gray-300">
      <strong>ALX Front-End Web Development Program</strong><br />
      Hands-on training building real-world frontend projects using HTML, CSS,
      JavaScript, and React.
    </p>

    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
      <li>ALX Front-End Web Development Certificate</li>
      <li>ALX Professional Foundations Certificate</li>
    </ul>
  </div>
</section>

      {/* CONTACT */}
      <footer className="max-w-5xl mx-auto px-6 py-12 border-t dark:border-gray-700">
  <h2 className="text-2xl font-semibold mb-4">Contact</h2>

  <p>
    Email:{" "}
    <a
      href="mailto:alekolajo@gmail.com"
      className="text-blue-600 dark:text-blue-400 hover:underline"
    >
      alekolajo@gmail.com
    </a>
  </p>

  <p className="mt-1">Phone: +234 806 015 1823</p>

  <p className="mt-1">
    GitHub:{" "}
    <a
      href="https://github.com/MKOAle"
      target="_blank"
      className="text-blue-600 dark:text-blue-400 hover:underline"
    >
      github.com/MKOAle
    </a>
  </p>
</footer>
    </div>
  );
}

function Project({ title, desc, tech }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-gray-900 shadow-sm">
  <h3 className="text-xl font-semibold mb-2">JavaScript Utilities</h3>

  <p className="mb-3 text-gray-700 dark:text-gray-300">
    Collection of small JavaScript projects and logic-based utilities.
  </p>

  <p className="text-sm text-gray-500 mb-4">Tech: JavaScript</p>

  <a
    href="https://github.com/MKOAle"
    target="_blank"
    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
  >
    View on GitHub →
  </a>
</div>
  );
}
