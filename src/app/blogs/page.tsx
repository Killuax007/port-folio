"use client";
import { motion } from "motion/react";
import { MagicCard } from "@/components/magicui/magic-card";
import Link from "next/link";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
interface Blog {
  title: string;
  href: string;
  published: string;
}
export default function page() {
  const blogs: Blog[] = [
    {
      title: "Master JavaScript Theory with This Free PDF Guide",
      href: "https://killua-writes.medium.com/master-javascript-theory-with-this-free-pdf-guide-4bdf54a1566b",
      published: "May 23, 2025",
    },
  ];
  return (
    <div className="flex flex-col  items-center h-screen mx-auto w-full ">
      {blogs.map((blog, idx) => {
        return (
          <div key={idx} className="md:my-10 my-5 max-w-4xl p-10 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                },
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-xl w-full max-w-4xl  "
            >
              <div className="my-5 md:my-10 flex justify-between items-center">
                <h2 className="text-3xl font-bold ">Blogs</h2>
                <Link href={"/"}>
                  <IoHomeOutline className="size-5 text-neutral-600 hover:text-neutral-200 transition-all duration-200 hover:scale-110" />
                </Link>
              </div>
              <MagicCard
                gradientFrom="#10b981"
                gradientTo="#FE8FB5"
                gradientSize={80}
              >
                <div className="p-4 md:p-6 rounded-lg ">
                  <Link href={blog.href}>
                    <h2 className="md:text-3xl text-lg  inset-0">
                      {" "}
                      {blog.title}
                    </h2>
                    <p className="md:text-[13px] text-[10px] my-1">
                      Published on {blog.published}
                    </p>
                  </Link>
                </div>
              </MagicCard>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
