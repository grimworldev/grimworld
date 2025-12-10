import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CursorTrail } from "./components/CursorTrail";
import { SplitText } from "./components/SplitText";
import { Magnetic } from "./components/Magnetic";
import { BrutalistButton } from "./components/BrutalistButton";
import { ProjectCard } from "./components/ProjectCard";
import { ArrowDown, Github, Twitter, Mail } from "lucide-react";

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white overflow-x-hidden cursor-none"
    >
      <CursorTrail />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-40 mix-blend-difference">
        <Magnetic>
          <div className="font-bold text-xl tracking-tighter border-2 border-white p-2">
            G.
          </div>
        </Magnetic>
        <div className="flex gap-8 font-mono text-sm">
          {["Work", "About", "Contact"].map((item) => (
            <Magnetic key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:line-through decoration-2 decoration-red-500"
              >
                {item}
              </a>
            </Magnetic>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center p-4 border-b-4 border-neutral-800">
        <div className="absolute top-1/2 left-4 -translate-y-1/2 hidden md:block">
          <motion.div
            style={{
              rotate: -90,
            }}
            className="font-mono text-xs tracking-[0.5em] text-neutral-500 whitespace-nowrap origin-center"
          >
            SCROLL TO EXPLORE
          </motion.div>
        </div>

        <div className="max-w-7xl w-full mx-auto relative z-10">
          <div className="flex flex-col items-start">
            <motion.div
              initial={{
                x: -100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "circOut",
              }}
              className="relative"
            >
              <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter uppercase mix-blend-difference">
                <SplitText delay={0.2}>Full Stack</SplitText>
              </h1>
            </motion.div>

            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "circOut",
              }}
              className="self-end"
            >
              <h1
                className="text-[12vw] leading-[0.8] font-black tracking-tighter uppercase text-transparent stroke-white stroke-2"
                style={{
                  WebkitTextStroke: "2px white",
                }}
              >
                <SplitText delay={0.4}>Developer</SplitText>
              </h1>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 max-w-md ml-auto font-mono text-neutral-400"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
            }}
          >
            <p className="text-lg">
              Crafting seamless web applications, from front-end to back-end
            </p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          <ArrowDown className="w-8 h-8 text-neutral-500" />
        </motion.div>
      </section>

      {/* Work Section */}
      <section
        id="work"
        className="min-h-screen py-32 px-4 border-b-4 border-neutral-800 bg-neutral-950"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-24">
            <h2 className="text-8xl font-bold uppercase tracking-tighter">
              Personal <br /> <span className="text-red-600">Projects</span>
            </h2>
            <motion.div
              style={{
                rotate,
              }}
              className="w-24 h-24 border-2 border-white rounded-full flex items-center justify-center font-mono text-xs"
            >
              (2023-24)
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Neon Void"
              category="Web Design / Three.js"
              index={0}
            />
            <div className="md:mt-24">
              <ProjectCard
                title="Cyber Punk"
                category="E-commerce / Next.js"
                index={1}
              />
            </div>
            <ProjectCard
              title="Mono Type"
              category="Typography / React"
              index={2}
            />
            <div className="md:mt-24">
              <ProjectCard
                title="Data Flow"
                category="Dashboard / D3.js"
                index={3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-32 px-4 border-b-4 border-neutral-800 bg-black overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              className="absolute inset-0 border-4 border-white z-0"
              animate={{
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="relative z-10 bg-neutral-900 aspect-square border-2 border-neutral-800 p-8 flex items-center justify-center overflow-hidden">
              <motion.div
                className="w-full h-full border border-neutral-700 grid grid-cols-6 grid-rows-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                {Array.from({ length: 36 }).map((_, i) => {
                  let backgroundColor = "transparent"; // Default transparent
                  if (i >= 0 && i <= 6) {
                    backgroundColor = "#fff";
                  }
                  if (i === 12 || i === 18 || i === 24 || i === 23 || i === 29 || i === 22 || i === 21) {
                    backgroundColor = "#fff";
                  }
                  if (i >= 30 && i <= 35) {
                    backgroundColor = "#fff";
                  }
                  // if (i === 30 || i === 31 || i === 32 || i === 33) {
                  //   backgroundColor = "#fff";
                  // }
                  

                  // Return the grid cell with the appropriate background color
                  return (
                    <motion.div
                      key={i}
                      className="border border-neutral-800"
                      style={{ backgroundColor }}
                      whileHover={{
                        backgroundColor: "#fff",
                      }}
                      transition={{
                        duration: 0.1,
                      }}
                    />
                  );
                })}
              </motion.div>
            </div>
          </div>

          <div>
            <h2 className="text-6xl font-bold mb-8 uppercase">
              <SplitText>About Me</SplitText>
            </h2>
            <div className="space-y-6 font-mono text-lg text-neutral-400">
              <p>
                I am a creative developer obsessed with the intersection of
                design and technology. I believe in brutal honesty in
                design—stripping away the unnecessary to reveal the raw
                structure underneath.
              </p>
              <p>
                My work is characterized by bold typography, harsh grids, and
                unexpected micro-interactions that bring static layouts to life.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              {["React", "JavaScript", "Laravel",  "PHP"].map(
                (skill, i) => (
                  <motion.div
                    key={skill}
                    drag
                    dragConstraints={{
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                    }}
                    dragElastic={0.2}
                    className="px-6 py-3 border-2 border-neutral-700 rounded-full cursor-grab active:cursor-grabbing hover:bg-white hover:text-black hover:border-white transition-colors"
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    {skill}
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-8xl font-bold mb-16 uppercase tracking-tighter">
            Let's{" "}
            <span
              className="outline-text text-transparent stroke-white"
              style={{
                WebkitTextStroke: "2px white",
              }}
            >
              Talk
            </span>
          </h2>

          <form className="space-y-8 text-left">
            <div className="group relative">
              <label className="block font-mono text-sm mb-2 text-neutral-500 group-focus-within:text-red-500 transition-colors">
                NAME
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b-4 border-neutral-800 py-4 text-2xl font-bold focus:outline-none focus:border-white transition-colors"
                placeholder="JOHN DOE"
              />
            </div>

            <div className="group relative">
              <label className="block font-mono text-sm mb-2 text-neutral-500 group-focus-within:text-red-500 transition-colors">
                EMAIL
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b-4 border-neutral-800 py-4 text-2xl font-bold focus:outline-none focus:border-white transition-colors"
                placeholder="HELLO@EXAMPLE.COM"
              />
            </div>

            <div className="group relative">
              <label className="block font-mono text-sm mb-2 text-neutral-500 group-focus-within:text-red-500 transition-colors">
                MESSAGE
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b-4 border-neutral-800 py-4 text-2xl font-bold focus:outline-none focus:border-white transition-colors resize-none"
                placeholder="TELL ME ABOUT YOUR PROJECT..."
              />
            </div>

            <div className="pt-8 flex justify-center">
              <BrutalistButton
                type="submit"
                className="w-full md:w-auto text-xl"
              >
                Send Message
              </BrutalistButton>
            </div>
          </form>

          <footer className="mt-32 flex justify-between items-end border-t-2 border-neutral-900 pt-8">
            <div className="text-left font-mono text-neutral-600 text-sm">
              <p>© 2025 Grimworld</p>
              <p>ALL RIGHTS RESERVED</p>
            </div>
            <div className="flex gap-6">
              {[Github, Twitter, Mail].map((Icon, i) => (
                <Magnetic key={i}>
                  <a
                    href="#"
                    className="block p-2 hover:text-red-500 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
