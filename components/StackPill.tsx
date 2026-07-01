import React from "react";

export function getIconUrl(tag: string): string {
  const clean = tag.toLowerCase().trim();
  let name = clean;
  
  if (clean.includes("next.js") || clean.includes("nextjs") || clean === "next.js 15" || clean === "next.js 16") name = "nextjs";
  else if (clean.includes("react flow") || clean.includes("react")) name = "react";
  else if (clean.includes("tailwind")) name = "tailwindcss";
  else if (clean.includes("typescript") || clean === "ts") name = "typescript";
  else if (clean.includes("javascript") || clean === "js") name = "javascript";
  else if (clean.includes("postgres") || clean.includes("prisma") || clean.includes("sql") || clean.includes("drizzle") || clean.includes("neon")) name = "postgresql";
  else if (clean.includes("redis") || clean.includes("upstash")) name = "redis";
  else if (clean.includes("inngest")) name = "inngest";
  else if (clean.includes("supabase")) name = "supabase";
  else if (clean.includes("openai") || clean.includes("gpt")) name = "openai";
  else if (clean.includes("anthropic") || clean.includes("claude")) name = "anthropic";
  else if (clean.includes("gemini") || clean.includes("google")) name = "google";
  else if (clean.includes("deepseek")) name = "deepseek";
  else if (clean.includes("trpc")) name = "trpc";
  else if (clean.includes("vercel") || clean.includes("openrouter") || clean.includes("ai sdk") || clean.includes("turborepo")) name = "vercel";
  else if (clean.includes("docker")) name = "docker";
  else if (clean.includes("git") || clean.includes("github")) name = "github";
  else if (clean.includes("python") || clean.includes("deep learning")) name = "python";
  else if (clean.includes("convex")) name = "convex";
  else if (clean.includes("clerk") || clean.includes("auth")) name = "clerk";
  else if (clean.includes("razorpay")) name = "razorpay";
  else if (clean.includes("shiprocket")) name = "shiprocket";
  else if (clean.includes("cashfree")) name = "cashfree";
  else if (clean.includes("msg91")) name = "msg91";
  else if (clean.includes("stripe")) name = "stripe";
  else if (clean.includes("node.js") || clean.includes("node") || clean.includes("express") || clean.includes("bun") || clean.includes("webcontainers")) name = "nodejs";
  else if (clean.includes("slack")) name = "slack";
  else if (clean.includes("gmail") || clean.includes("email")) name = "gmail";
  else if (clean.includes("whatsapp")) name = "whatsapp";
  else if (clean.includes("notion")) name = "notion";
  else if (clean.includes("telegram")) name = "telegram";
  else if (clean.includes("discord")) name = "discord";
  else if (clean.includes("hubspot")) name = "hubspot";
  else if (clean.includes("zoho")) name = "zoho";
  else if (clean.includes("azure") || clean.includes("blob")) name = "azure";
  else if (clean.includes("socket")) name = "socketio";
  else if (clean.includes("codemirror") || clean.includes("leaflet") || clean.includes("recharts")) name = "javascript";
  else name = clean.replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
  
  return `https://iconsclub.xyz/logo/${name}/32.png`;
}

interface StackPillProps {
  tech: string;
  className?: string;
}

export default function StackPill({ tech, className = "" }: StackPillProps) {
  const iconUrl = getIconUrl(tech);
  
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[12px] text-paper-dim bg-white/[0.05] px-2.5 py-1 rounded-[1px] border border-border/50 select-none ${className}`}
    >
      <img
        src={iconUrl}
        alt={tech}
        width={14}
        height={14}
        className="w-3.5 h-3.5 object-contain rounded-[1px] inline-block shrink-0"
        loading="lazy"
      />
      <span>{tech}</span>
    </span>
  );
}
