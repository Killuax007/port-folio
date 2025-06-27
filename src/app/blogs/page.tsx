"use client";
import { motion } from "motion/react";
import { MagicCard } from "@/components/magicui/magic-card";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
interface Blog {
  title: string;
  href: string;
  published: string;
}
export default function Page() {
  const router = useRouter();
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
    <div className="flex flex-col  h-screen">
      <div className="md:my-10 my-5 max-w-4xl p-10 w-full mx-auto ">
        <div
          className="my-5 md:my-10 flex items-center cursor-pointer"
          onClick={() => router.back()}
        >
          <IoIosArrowBack className="size-4 mr-[2px] text-green-400/80 " />
          <span className="font-medium ">Back</span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 10,
            },
          }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-xl w-full max-w-4xl  "
        >
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
