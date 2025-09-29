import { NextResponse } from "next/server";
import connectDB from "@/lib/db";   // your MongoDB connection helper
import Faq from "@/models/FAQ";     // your Mongoose model

// POST /api/faqs
export async function POST(req) {
  try {
    const body = await req.json();
    await connectDB();

    const faq = await Faq.create({
      question: body.question,
      answer: body.answer,
    });

    return NextResponse.json({ success: true, data: faq }, { status: 201 });
  } catch (err) {
    console.error("FAQ save error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// GET /api/faqs (list all)
export async function GET() {
  try {
    await connectDB();
    const faqs = await Faq.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: faqs });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
