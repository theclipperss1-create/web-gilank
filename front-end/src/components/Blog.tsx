import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Language } from "../lib/i18n";
import { blogPosts, type BlogPost } from "../lib/blog-data";
import { ArrowLeft, BookOpen, Calendar, Search } from "lucide-react";

interface BlogProps {
  lang: Language;
  t: any;
}

export const Blog: React.FC<BlogProps> = ({ lang, t }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [postContent, setPostContent] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Filter posts based on current language and search query
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.language === lang &&
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  useEffect(() => {
    if (!selectedPost) {
      setPostContent("");
      return;
    }

    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/content/blog/${selectedPost.slug}.md`);
        if (!response.ok) throw new Error("Failed to load article");
        const text = await response.text();
        setPostContent(text);
      } catch (err) {
        console.error(err);
        setPostContent("Error loading post content.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [selectedPost]);

  // Senior Custom Regex Markdown-to-HTML Parser
  const parseMarkdown = (markdown: string) => {
    const lines = markdown.split("\n");
    let inList = false;
    let html = "";

    const parseInline = (text: string) => {
      // Bold **text**
      let parsed = text.replace(
        /\*\*(.*?)\*\*/g,
        '<strong class="text-white font-bold">$1</strong>'
      );
      // Italic *text*
      parsed = parsed.replace(/\*(.*?)\*/g, '<em class="italic text-zinc-200">$1</em>');
      // Links [text](url)
      parsed = parsed.replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline font-semibold">$1</a>'
      );
      return parsed;
    };

    for (let line of lines) {
      const trimmed = line.trim();

      // Ignore H1 title since we render it separately
      if (trimmed.startsWith("# ")) {
        continue;
      }

      // Handle Headers
      if (trimmed.startsWith("## ")) {
        if (inList) {
          html += "</ul>";
          inList = false;
        }
        html += `<h2 class="text-xl md:text-3xl font-display font-bold text-white mt-10 mb-4 tracking-tight">${parseInline(
          trimmed.slice(3)
        )}</h2>`;
      } else if (trimmed.startsWith("### ")) {
        if (inList) {
          html += "</ul>";
          inList = false;
        }
        html += `<h3 class="text-lg md:text-2xl font-display font-bold text-white mt-8 mb-3 tracking-tight">${parseInline(
          trimmed.slice(4)
        )}</h3>`;
      }
      // Handle Bullet Lists
      else if (trimmed.startsWith("* ")) {
        if (!inList) {
          html += `<ul class="list-disc pl-6 space-y-3 text-zinc-300 my-6">`;
          inList = true;
        }
        html += `<li class="text-base md:text-lg leading-relaxed">${parseInline(
          trimmed.slice(2)
        )}</li>`;
      } else {
        if (inList) {
          html += "</ul>";
          inList = false;
        }

        if (trimmed === "") {
          continue;
        }

        // Paragraph
        html += `<p class="text-zinc-300 leading-relaxed mb-6 text-base md:text-lg max-w-[65ch]">${parseInline(
          trimmed
        )}</p>`;
      }
    }

    if (inList) {
      html += "</ul>";
    }

    return html;
  };

  return (
    <section id="blog" className="px-6 md:px-12 lg:px-24 py-32 md:py-48 bg-canvas relative">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            /* Blog List View */
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Header & Search */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
                <div className="max-w-2xl">
                  <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-3 block">
                    {t.blog.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
                    {t.blog.title}
                  </h2>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full pl-11 pr-6 py-3 rounded-full bg-white/[0.02] border border-white/5 focus:border-accent/45 text-sm text-white placeholder-zinc-500 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Grid of Articles (Asymmetric - Density 4, Variance 8) */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
                      onClick={() => setSelectedPost(post)}
                      className="group p-8 rounded-[2.5rem] liquid-glass hover-glow-emerald cursor-pointer transition-all duration-500 flex flex-col justify-between min-h-[280px]"
                    >
                      <div>
                        {/* Meta */}
                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-4">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{post.date}</span>
                        </div>
                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-accent transition-colors duration-300 tracking-tight leading-tight">
                          {post.title}
                        </h3>
                        {/* Summary */}
                        <p className="text-sm md:text-base text-zinc-400 mt-4 leading-relaxed line-clamp-3">
                          {post.summary}
                        </p>
                      </div>

                      {/* Footer Actions */}
                      <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40 group-hover:text-white/70 transition-colors duration-300">
                        <div className="flex gap-2">
                          {post.tags.map((tag) => (
                            <span key={tag}>#{tag}</span>
                          ))}
                        </div>
                        <span className="flex items-center gap-1">
                          <span>{t.blog.readMore}</span>
                          <BookOpen className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 text-zinc-500 font-mono text-sm">
                  {t.blog.empty}
                </div>
              )}
            </motion.div>
          ) : (
            /* Single Article View (Art Gallery Mode, clean typography) */
            <motion.div
              key="post"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="max-w-3xl mx-auto"
            >
              {/* Back Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white mb-12 cursor-pointer transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-accent" />
                <span>{t.blog.back}</span>
              </button>

              {/* Post Header */}
              <div className="border-b border-white/10 pb-8 mb-10">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedPost.date}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                  {selectedPost.title}
                </h1>
                <div className="flex flex-wrap gap-2 mt-6">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-white/[0.03] border border-white/5 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Post Body (parsed HTML) */}
              <div className="prose prose-invert max-w-none">
                {loading ? (
                  <div className="space-y-4 py-10">
                    <div className="h-4 bg-white/5 rounded-full w-3/4 animate-pulse" />
                    <div className="h-4 bg-white/5 rounded-full animate-pulse" />
                    <div className="h-4 bg-white/5 rounded-full w-5/6 animate-pulse" />
                  </div>
                ) : (
                  <div
                    dangerouslySetInnerHTML={{ __html: parseMarkdown(postContent) }}
                    className="space-y-6"
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
