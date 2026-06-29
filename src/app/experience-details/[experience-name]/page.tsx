"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader2 } from "lucide-react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { toast } from "sonner";
interface Blog {
  title: string;
  href: string;
  published: string;
}
export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState<Blog>({
    title: "",
    href: "",
    published: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBlog((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await axios.post("api/blog", {
        title: blog.title,
        href: blog.href,
        published: blog.published,
      });
      console.log(res);
      setLoading(false);
      toast.success("A new Blog generated successfully");
      setBlog({
        title: "",
        href: "",
        published: "",
      });
      router.push("/blogs");
    } catch {
      setLoading(false);
      toast.error("Failed to add New Blog");
    }
  };
  return (
    <main className="min-h-screen flex items-center justify-center  p-6">
      <form
        onSubmit={handleSubmit}
        className=" p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-4xl font-semibold mb-4 text-center">Submit Blog</h1>

        <label className="block mb-2 font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={blog.title}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          placeholder="Title.."
          required
        />

        <label className="block mb-2 font-medium">Medium Link</label>
        <input
          type="text"
          name="href"
          value={blog.href}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          placeholder="Medium link..."
          required
        />

        <label className="block mb-2 font-medium">Published</label>
        <input
          type="text"
          name="published"
          value={blog.published}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          placeholder="Pick a Date"
          required
        />
        {loading ? (
          <Button className="flex font-semibold w-full cursor-pointer">
            <Loader2 className="size-3 animate-spin" />
            Submitting..
          </Button>
        ) : (
          <Button className="font-semibold w-full cursor-pointer">
            Submit
          </Button>
        )}
      </form>
    </main>
  );
}
