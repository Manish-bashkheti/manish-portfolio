// import CountUp from "react-countup"
import portfolio from "./assets/portfolio.jpeg"
import portfolio1 from "./assets/portfolio1.jpeg"
import portfolio2 from "./assets/portfolio2.jpeg"

import sos from "./assets/sos.jpeg"
import sos1 from "./assets/sos1.jpeg"
import Particles from "react-tsparticles"
import { FaBars } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa"

import profile from "./assets/profile.jpg"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })
  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 2500)

  }, [])
  if (loading) {
    return (

      <div className="h-screen flex items-center justify-center bg-black">

        <div className="text-center">

          <h1 className="text-5xl font-bold text-white mb-6">
            Manish
          </h1>

          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">

            <div className="h-full bg-white animate-pulse w-full"></div>

          </div>

        </div>

      </div>

    )
  }

  return (


    <div


      onMouseMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        })
      }}


      className={`${darkMode
        ? "bg-black text-white"
        : "bg-gradient-to-br from-gray-100 to-gray-200 text-black"
        } min-h-screen p-6 duration-300 relative overflow-hidden`}
    >
      {/* Cursor Glow */}
      <div
        className="hidden md:block fixed w-72 h-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none z-0 duration-200"
        style={{
          left: position.x - 150,
          top: position.y - 150,
        }}
      ></div>
      {/* Background Particles */}
<Particles
  className="absolute inset-0 -z-10"
  options={{
    particles: {
      number: {
        value: 40,
      },
      size: {
        value: 3,
      },
      move: {
        enable: true,
        speed: 1,
      },
      opacity: {
        value: 0.3,
      },
    },
  }}
/>

      {/* Main Container */}

      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-6">

        {/* Left Section */}
        <div className="lg:col-span-3 space-y-6">

          {/* Navbar */}
          <div
            className={`${darkMode ? "bg-[#111]" : "bg-white"
              } rounded-3xl p-5 shadow-xl border border-white/20 backdrop-blur-lg flex justify-between items-center`}
          >

            <h1 className="text-2xl font-bold">
              Manish
            </h1>

            <div className="flex items-center gap-5">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-2xl"
              >
                <FaBars />
              </button>

              <ul className="hidden md:flex gap-8 text-gray-600 font-medium">

                <a
                  href="#about"
                  className="hover:text-black duration-300"
                >
                  About
                </a>

                <a
                  href="#projects"
                  className="hover:text-black duration-300"
                >
                  Projects
                </a>

                <a
                  href="#skills"
                  className="hover:text-black duration-300"
                >
                  Skills
                </a>

                <a
                  href="#contact"
                  className="hover:text-black duration-300"
                >
                  Contact
                </a>

              </ul>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-black text-white px-5 py-2 rounded-2xl"
              >
                {darkMode ? "Light" : "Dark"}
              </button>

            </div>

          </div>
          {/* Mobile Menu */}
          {
            menuOpen && (
              <div
                className={`${darkMode ? "bg-[#111]" : "bg-white"} md:hidden mt-4 rounded-2xl p-5 flex flex-col gap-5 shadow-xl`}
              >

                <a href="#about">
                  About
                </a>

                <a href="#projects">
                  Projects
                </a>

                <a href="#skills">
                  Skills
                </a>

                <a href="#contact">
                  Contact
                </a>

              </div>
            )
          }

          {/* Hero Section */}
          <motion.div
            id="about"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${darkMode ? "bg-[#111]" : "bg-white"
              } rounded-3xl p-8 shadow-xl border border-white/20 backdrop-blur-lg`}
          >

            <TypeAnimation
              sequence={[
                "FULL STACK DEVELOPER",
                2000,
                "REACT NATIVE DEVELOPER",
                2000,
                "FRONTEND DEVELOPER",
                2000,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="text-gray-500 mb-3 font-medium"
            />

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Building Modern <br />
              Web & Mobile Apps
            </h2>

            <p className="text-gray-600 leading-8 text-lg mb-8 max-w-2xl">
              Passionate developer focused on creating responsive,
              scalable and user-friendly applications using React,
              React Native, Firebase and JavaScript.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">

              <button className="bg-black hover:bg-gray-800 text-white px-7 py-3 rounded-2xl font-medium hover:scale-105 duration-300">
                View Projects
              </button>

            <a
  href="/resume.pdf"
  download
  className={`${darkMode
      ? "border-white hover:bg-[#222]"
      : "border hover:bg-gray-100"
    } px-7 py-3 rounded-2xl font-medium duration-300`}
>
  Download CV
</a>

            </div>

          </motion.div>

          {/* Projects Section */}
          <motion.div
            id="projects"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`${darkMode ? "bg-[#111]" : "bg-white"
              } rounded-3xl p-8 shadow-xl border border-white/20 backdrop-blur-lg`}
          >

            <h2 className="text-3xl font-bold mb-8">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Project 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.5 }}
                className="border rounded-3xl p-6 hover:shadow-2xl duration-300"
              >
               <img
  src={sos}
  alt="Women Safety App"
  className="rounded-2xl mb-5 h-52 w-full object-cover"
/>

                <h3 className="text-2xl font-bold mb-3">
                  Women Safety App
                </h3>

                <p className="text-gray-600 leading-7 mb-5">
                  Mobile application with SOS alerts,
                  live location sharing and emergency calling.
                </p>

                <div className="flex flex-wrap gap-3 mb-5">

                  <span className={`${darkMode ? "bg-[#222] text-white" : "bg-gray-100 text-black"
                    } px-4 py-2 rounded-xl text-sm`}>
                    React Native
                  </span>

                  <span className={`${darkMode ? "bg-[#222] text-white" : "bg-gray-100 text-black"
                    } px-4 py-2 rounded-xl text-sm`}>
                    Firebase
                  </span>

                  <span className={`${darkMode ? "bg-[#222] text-white" : "bg-gray-100 text-black"
                    } px-4 py-2 rounded-xl text-sm`}>
                    TypeScript
                  </span>

                </div>
<a
  href="https://github.com/"
  target="_blank"
  className="inline-block bg-black hover:bg-gray-800 text-white px-5 py-3 rounded-2xl hover:scale-105 duration-300"
>
  View Project
</a>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.5 }}
                className="border rounded-3xl p-6 hover:shadow-2xl duration-300"
              >

                <img
  src={portfolio}
  alt="Portfolio Website"
  className="rounded-2xl mb-5 h-52 w-full object-cover"
/>

                <h3 className="text-2xl font-bold mb-3">
                  Personal Portfolio Website
                </h3>

                <p className="text-gray-600 leading-7 mb-5">
                 Modern responsive portfolio website built using React, Tailwind CSS, Framer Motion, and deployed on Vercel.
                </p>

                <div className="flex flex-wrap gap-3 mb-5">

                  <span className={`${darkMode ? "bg-[#222] text-white" : "bg-gray-100 text-black"
                    } px-4 py-2 rounded-xl text-sm`}>
                    React
                  </span>

                  <span className={`${darkMode ? "bg-[#222] text-white" : "bg-gray-100 text-black"
                    } px-4 py-2 rounded-xl text-sm`}>
                    Tailwind Css
                  </span>

                  <span className={`${darkMode ? "bg-[#222] text-white" : "bg-gray-100 text-black"
                    } px-4 py-2 rounded-xl text-sm`}>
                    Framer Motion
                  </span>
                  
                  <span className={`${darkMode ? "bg-[#222] text-white" : "bg-gray-100 text-black"
                    } px-4 py-2 rounded-xl text-sm`}>
                    Vercel
                  </span>

                </div>

               <a
  href="https://github.com/"
  target="_blank"
  className="inline-block bg-black hover:bg-gray-800 text-white px-5 py-3 rounded-2xl hover:scale-105 duration-300"
>
  View Project
</a>
          </motion.div>

            </div>


        </motion.div>

        {/* Skills Section */}
        <div
          id="skills"
          className={`${darkMode ? "bg-[#111]" : "bg-white"
            } rounded-3xl p-8 shadow-xl border border-white/20 backdrop-blur-lg`}
        >

          <h2 className="text-3xl font-bold mb-8">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Frontend */}
            <div className="border rounded-3xl p-6 hover:shadow-lg duration-300">

              <h3 className="text-2xl font-bold mb-5">
                Frontend
              </h3>

              <div className="flex flex-wrap gap-3">

                {["HTML5", "CSS3", "JavaScript", "React.js"].map((skill) => (

                  <span
                    key={skill}
                    className={`${darkMode
                      ? "bg-[#222] text-white"
                      : "bg-gray-100 text-black"
                      } px-4 py-2 rounded-xl`}
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

            {/* Backend */}
            <div className="border rounded-3xl p-6 hover:shadow-lg duration-300">

              <h3 className="text-2xl font-bold mb-5">
                Backend
              </h3>

              <div className="flex flex-wrap gap-3">

                {["Node.js", "Express.js", "Firebase", "MongoDB"].map((skill) => (

                  <span
                    key={skill}
                    className={`${darkMode
                      ? "bg-[#222] text-white"
                      : "bg-gray-100 text-black"
                      } px-4 py-2 rounded-xl`}
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

            {/* Mobile */}
            <div className="border rounded-3xl p-6 hover:shadow-lg duration-300">

              <h3 className="text-2xl font-bold mb-5">
                Mobile Development
              </h3>

              <div className="flex flex-wrap gap-3">

                {["React Native", "Expo CLI", "TypeScript"].map((skill) => (

                  <span
                    key={skill}
                    className={`${darkMode
                      ? "bg-[#222] text-white"
                      : "bg-gray-100 text-black"
                      } px-4 py-2 rounded-xl`}
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Sidebar */}
      <div
        className={`${darkMode ? "bg-[#111]" : "bg-white"
          } rounded-3xl p-6 shadow-xl border border-white/20 backdrop-blur-lg h-fit sticky top-6`}
      >

        <img
          src={profile}
          alt="profile"
          className="rounded-3xl mb-6 max-h-[500px] w-full object-cover"
        />

        <h2 className="text-2xl font-bold mb-2">
          Manish Bashkheti
        </h2>

        <p className="text-gray-500 leading-7 mb-6">
          Full Stack & React Native Developer passionate
          about building modern applications.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mb-8">

      <a
  href="https://github.com/Manish-bashkheti"
  target="_blank"
  rel="noreferrer"
  className={`${darkMode
      ? "bg-[#222] hover:bg-[#333]"
      : "bg-gray-100 hover:bg-gray-200"
    } p-4 rounded-2xl duration-300`}
>
  <FaGithub />
</a>

         <a
  href="https://www.linkedin.com/in/manish-bashkheti-66806240a/"
  target="_blank"
  rel="noreferrer"
  className={`${darkMode
      ? "bg-[#222] hover:bg-[#333]"
      : "bg-gray-100 hover:bg-gray-200"
    } p-4 rounded-2xl duration-300`}
>
  <FaLinkedin />
</a>

          <a
            href="https://instagram.com"
            target="_blank"
            className={`${darkMode
              ? "bg-[#222] text-white"
              : "bg-gray-100 text-black"
              } p-4 rounded-2xl hover:bg-pink-500 hover:text-white duration-300`}
          >
            <FaInstagram size={20} />
          </a>

        </div>

        {/* Availability */}
        <div className="bg-green-100 text-green-700 px-4 py-3 rounded-2xl mb-6 text-sm font-medium">
          ● Available for Work
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">

          <div className={`${darkMode ? "bg-[#1a1a1a]" : "bg-gray-100"} p-5 rounded-2xl text-center`}>
            <h3 className="text-3xl font-bold">2+</h3>
            <p className="text-sm text-gray-500 mt-2">Projects</p>
          </div>

          <div className={`${darkMode ? "bg-[#1a1a1a]" : "bg-gray-100"} p-5 rounded-2xl text-center`}>
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="text-sm text-gray-500 mt-2">Technologies</p>
          </div>

          <div className={`${darkMode ? "bg-[#1a1a1a]" : "bg-gray-100"} p-5 rounded-2xl text-center`}>
            <h3 className="text-3xl font-bold">1+</h3>
            <p className="text-sm text-gray-500 mt-2">Year Learning</p>
          </div>

          <div className={`${darkMode ? "bg-[#1a1a1a]" : "bg-gray-100"} p-5 rounded-2xl text-center`}>
            <h3 className="text-green-500 text-xl font-bold">Available</h3>
            <p className="text-sm text-gray-500 mt-2">For Work</p>
          </div>

        </div>

        {/* Buttons */}
        <div className="space-y-4">

          <a
            href="/resume.pdf"
            download
            className="block w-full bg-black text-white py-4 rounded-2xl font-medium hover:scale-105 duration-300 text-center"
          >
            Download Resume
          </a>

          <button className="w-full border py-4 rounded-2xl font-medium hover:bg-gray-100 duration-300">
            Contact Me
          </button>

        </div>

      </div>

    </div>

      {/* Contact Section */ }
  <div
    id="contact"
    className={`${darkMode ? "bg-[#111]" : "bg-white"
      } rounded-3xl p-8 shadow-xl border border-white/20 backdrop-blur-lg mt-6`}
  >

    <h2 className="text-3xl font-bold mb-8">
      Contact Me
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="border rounded-2xl p-6 hover:shadow-lg duration-300">
        <h3 className="text-xl font-bold mb-3">
          Email
        </h3>
        <p className="text-gray-600">
          manishbashkheti611@gmail.com
        </p>
      </div>

      <div className="border rounded-2xl p-6 hover:shadow-lg duration-300">
        <h3 className="text-xl font-bold mb-3">
          Phone
        </h3>
        <p className="text-gray-600">
          +91 7078483525
        </p>
      </div>

      <div className="border rounded-2xl p-6 hover:shadow-lg duration-300">
        <h3 className="text-xl font-bold mb-3">
          Location
        </h3>
        <p className="text-gray-600">
          Uttarakhand, India
        </p>
      </div>

      <div className="border rounded-2xl p-6 hover:shadow-lg duration-300">
        <h3 className="text-xl font-bold mb-3">
          GitHub
        </h3>
        <p className="text-gray-600">
          github.com
        </p>
      </div>

    </div>

  </div>

  {/* Footer */ }
  <div className="text-center py-10 text-gray-500">
    © 2026 Manish Bashkheti. All Rights Reserved.
  </div>

    </div >
  )
}

export default App