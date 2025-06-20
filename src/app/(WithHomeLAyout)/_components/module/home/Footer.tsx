"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-4">DEVELOP.ME</h2>
            <p className="text-white/70 max-w-md">
              As you can see, I specialize in creating stunning,
              high-performance websites that help businesses grow and succeed
              online.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  E-commerce
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  SEO
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/50 text-sm">
            &copy; {currentYear} DEVELOP.ME. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-white/50 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/50 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
