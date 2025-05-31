import dbConnect from "@/lib/dbConnect";
import { BlogModel } from "@/models/blog.model";

export async function GET() {
  await dbConnect();
  const blogs = await BlogModel.find({});
  if (!blogs) {
    return Response.json(
      {
        success: false,
        message: "Failed to fetch blogs",
      },
      { status: 500 }
    );
  }
  return Response.json(
    {
      success: true,
      blogs,
    },
    { status: 200 }
  );
}
export async function POST(req: Request) {
  await dbConnect();
  const { title, href, published } = await req.json();
  if (!title && !href && !published) {
    return Response.json(
      {
        success: false,
        message: "Failed GET blog data",
      },
      { status: 500 }
    );
  }
  await BlogModel.create({ title, href, published });

  return Response.json(
    {
      success: true,
      message: "A new blog added successfully",
    },
    { status: 200 }
  );
}
