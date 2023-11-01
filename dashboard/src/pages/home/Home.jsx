import Layout from "../layout";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [shown, setShown] = useState(false);

  const showMenu = {
    enter: {
      opacity: 1,
      y: 0,
      display: "block",
    },
    exit: {
      y: -5,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <>
      <div className="ml-14 mb-10 md:ml-64">
        <motion.div
          onHoverStart={() => setShown(true)}
          onHoverEnd={() => setShown(false)}
        >
          <span className="cursor-pointer">Sections</span>
          <motion.ul
            variants={showMenu}
            initial="exit"
            animate={shown ? "enter" : "exit"}
            className="absolute bg-white mt-1 border border-blue-strong border-opacity-50 rounded-sm p-2"
          >
            <div href="/introduction">
              <motion.li
                whileHover={{
                  color: "#FFB703",
                  x: 2,
                }}
                className="cursor-pointer p-1 text-blue-primary"
              >
                Introduction
              </motion.li>
            </div>

            <div href="/html">
              <motion.li
                whileHover={{
                  color: "#FFB703",
                  x: 2,
                }}
                className="cursor-pointer p-1 text-blue-primary"
              >
                HTML
              </motion.li>
            </div>

            <motion.li
              whileHover={{
                color: "#FFB703",
                x: 2,
              }}
              className="cursor-pointer p-1 text-blue-primary"
            >
              CSS
            </motion.li>
            <motion.li
              whileHover={{
                color: "#FFB703",
                x: 2,
              }}
              className="cursor-pointer p-1 text-blue-primary"
            >
              JAVASCRIPT
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </>
  );
}
