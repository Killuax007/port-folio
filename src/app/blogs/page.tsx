"use client";
import { motion } from "motion/react";
import { MagicCard } from "@/components/magicui/magic-card";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import axios from "axios";
import { Loader2 } from "lucide-react";
interface Blog {
  title: string;
  href: string;
  published: string;
}
export default function Page() {
  const [blogs, setBlogs] = useState<Blog[]>();
  useEffect(() => {
    async function fetchBlogs() {
      const response = await axios.get("api/blog");
      const data = await response.data.blogs;
      setBlogs(data);
    }
    fetchBlogs();
  }, []);
  return (
    <div className="flex flex-col  items-center h-screen mx-auto w-full ">
      <div className="md:my-10 my-5 max-w-4xl p-10 ">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.6,
              type: "spring",
              stiffness: 200,
              damping: 10,
            },
          }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-xl w-full max-w-4xl  "
        >
          <div className="my-5 md:my-10 flex justify-between items-center ">
            <h2 className="text-3xl font-semibold ">Blogs</h2>
            <Link href={"/"}>
              <IoHomeOutline className="size-5 text-neutral-600 hover:text-neutral-200 transition-all duration-200 hover:scale-110" />
            </Link>
          </div>
          <div className="space-y-4 rounded-lg">
            {!blogs && (
              <span className="flex justify-center items-center ">
                <Loader2 className="size-8 animate-spin" />
              </span>
            )}

            {blogs &&
              blogs.map((blog, idx) => {
                return (
                  <MagicCard
                    key={idx}
                    gradientFrom="#10b981"
                    gradientTo="#FE8FB5"
                    gradientSize={80}
                  >
                    <div className="p-4 md:p-6 ">
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
                );
              })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
