import fs from "fs";
import path from "path";
import mammoth from "mammoth";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Resume — Mayank Saini",
  description: "Full-Stack Developer & AI-Powered SaaS Builder Curriculum Vitae",
};

export default async function ResumePage() {
  const filePath = path.join(process.cwd(), "public", "Mayank_Saini_Resume.docx");
  const buffer = fs.readFileSync(filePath);
  const result = await mammoth.convertToHtml({ buffer });
  const html = result.value;

  return (
    <div className="min-h-screen flex flex-col bg-ink text-paper selection:bg-accent selection:text-ink">
      <Nav />
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 sm:py-20 animate-fade-up">
        {/* Top Header & Download Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-10 border-b border-border">
          <div>
            <Link
              href="/"
              className="font-mono text-xs sm:text-sm text-paper-dim hover:text-paper transition-colors inline-flex items-center gap-2 mb-2"
            >
              &larr; Back to home
            </Link>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-paper">
              Curriculum Vitae
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/Mayank_Saini_Resume.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2 rounded-[1px] select-none"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download .docx
            </a>
          </div>
        </div>

        {/* Custom Styling for Converted Resume HTML */}
        <style dangerouslySetInnerHTML={{ __html: `
          .resume-content p {
            margin-bottom: 0.75rem;
            line-height: 1.6;
            color: #E0E0E0;
          }
          .resume-content p strong {
            color: #ffffff;
            font-weight: 600;
          }
          .resume-content p:first-child {
            font-size: 2rem;
            font-weight: 600;
            color: #ffffff;
            border-bottom: none;
            margin-top: 0;
            margin-bottom: 0.25rem;
            letter-spacing: -0.02em;
          }
          .resume-content p:has(strong:only-child):not(:first-child) {
            font-size: 1.125rem;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #ffffff;
            border-bottom: 1px solid #2e2e2e;
            padding-bottom: 0.35rem;
            margin-top: 2.25rem;
            margin-bottom: 1rem;
          }
          .resume-content ul {
            list-style-type: disc;
            padding-left: 1.5rem;
            margin-bottom: 1.5rem;
            margin-top: -0.25rem;
          }
          .resume-content ul li {
            margin-bottom: 0.5rem;
            color: #E0E0E0;
            line-height: 1.6;
          }
          .resume-content ul li strong {
            color: #ffffff;
          }
          .resume-content a {
            color: #f35815;
            text-decoration: underline;
            text-underline-offset: 4px;
          }
          .resume-content a:hover {
            opacity: 0.8;
          }
        `}} />

        {/* Paper Container for Resume Content */}
        <div className="bg-[#161616] border border-border/80 p-6 sm:p-12 md:p-16 shadow-none text-paper font-sans leading-relaxed resume-content">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
