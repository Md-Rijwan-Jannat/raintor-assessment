"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/(WithHomeLAyout)/_components/ui/Button";
import { Card, CardContent } from "@/app/(WithHomeLAyout)/_components/ui/Card";
import { Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in{" "}
            <span className="bg-black text-white px-2">working</span>
            <br />
            together?
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card variant="contact">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 bg-black border border-white/20 rounded-lg focus:border-primary focus:outline-none text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 bg-black border border-white/20 rounded-lg focus:border-primary focus:outline-none text-white"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-3 bg-black border border-white/20 rounded-lg focus:border-primary focus:outline-none text-white"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-primary text-black hover:bg-primary/90"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Email</h3>
                  <p className="text-foreground/70">hello@example.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Phone</h3>
                  <p className="text-foreground/70">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Location</h3>
                  <p className="text-foreground/70">New York, NY</p>
                </div>
              </div>
              <div className="mt-8">
                <Button icon={<Phone size={20} />} size="lg">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
