const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
      {/* Intro */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12"></div>
      <img
        src="/images/profile.jpg"
        alt="profile"
        className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
      />
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">
          Hey, i'm Mateo 👋
        </h2>
        <p className="text-gray-300 text-lg">
          I'm a passionate mobile & web developer who loves buiding friendly
          digital experiences.
        </p>
      </div>
      {/* Bio Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          After turning my life around, I made my mission to keep improving, and
          creating technology that has a positive impact on others. I'm
          passionate about solving problems through code, transforming ideas
          into products, and building experiences that people genuinely enjoy.
          Growth, curiosity, and creativity are what drive me every day.
        </p>
      </div>
      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold text-white mb-4">Tech I Use</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {[
          "Swift",
          "SwiftUI",
          "React",
          "Tailwind CSS",
          "Express.js",
          "Node.js",
          "PostgreSQL",
          "Oracle",
          "Firebase",
        ].map((tech) => (
          <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
