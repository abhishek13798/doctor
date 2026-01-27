import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ChevronRight, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/button';

interface BlogPost {
  id: number;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Importance of Psychotherapy Contract",
    subtitle: "A general introduction about therapeutic relationship",
    excerpt: "Is it ethically right to start therapy without clarity about your rights and without a clear understanding of the relationship between you and your therapist? Of course, it is not.",
    content: [
      "Is it ethically right to start therapy without clarity about your rights and without a clear understanding of the relationship between you and your therapist? Of course, it is not.",
      "Therapy is not simply a conversation between two people. It is a space filled with emotions, trust, and power dynamics. In therapy, one person (client) seeks emotional support while the other (therapist) has emotional influence and professional knowledge. Because of this difference, it is crucial for clients to protect their rights and understand therapy's boundaries. When you visit a therapist, you are often in a vulnerable state, and without clarity, healing can be confusing instead of helpful. This is where a therapy contract becomes essential. A therapy contract clearly defines what therapy is, how it will work, and what the boundaries are between the client and the therapist. It protects the client from exploitation and ensures that the therapy process remains safe and respectful.",
      "The relationship between a therapist and a client is quite different from other relationships. It is not a friendship, a family bond, or like any other common relationship. Therapeutic relationship is a unique and one-sided relationship which entirely focuses on the client. A therapist does not seek emotional support from the client but helps the client understand their emotions, feel safe, and work towards their emotional growth. This client-centered approach makes therapy a secure space where the client can open up without fear.",
      "That is why therapy contracts are not just papers or agreements we sign. They are an important part of starting therapy. They protect the client's rights and set clear expectations about the therapeutic relationship, helping therapy become a safe and meaningful journey toward healing."
    ],
    date: "January 2026",
    readTime: "4 min read"
  }
];

const BlogCard: React.FC<{ post: BlogPost; onReadMore: () => void }> = ({ post, onReadMore }) => {
  return (
    <article className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
      {/* Decorative gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-[var(--kunj-java)] to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="p-6 sm:p-8">
        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        
        {/* Subtitle */}
        <p className="text-sm sm:text-base text-primary/80 font-medium mb-4">
          {post.subtitle}
        </p>

        {/* Excerpt */}
        <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Read More Button */}
        <Button
          onClick={onReadMore}
          variant="ghost"
          className="group/btn p-0 h-auto text-primary hover:text-primary hover:bg-transparent font-semibold"
        >
          Read Full Article
          <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </article>
  );
};

const BlogModal: React.FC<{ post: BlogPost; onClose: () => void }> = ({ post, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-primary to-[var(--kunj-java)] px-6 sm:px-8 py-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3 text-sm text-white/80 mb-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 pr-8">
            {post.title}
          </h2>
          <p className="text-white/90 font-medium">
            {post.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="px-6 sm:px-8 py-8 overflow-y-auto max-h-[calc(90vh-180px)]">
          <div className="prose prose-slate max-w-none">
            {post.content.map((paragraph, index) => (
              <p 
                key={index} 
                className={cn(
                  "text-slate-700 leading-relaxed mb-6 text-base sm:text-lg",
                  index === 0 && "text-lg sm:text-xl font-medium text-slate-800 border-l-4 border-primary/30 pl-4 italic"
                )}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author info */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-[var(--kunj-java)] flex items-center justify-center text-white font-bold text-lg">
                R
              </div>
              <div>
                <p className="font-semibold text-slate-800">Ms. Rimjhim</p>
                <p className="text-sm text-muted-foreground">Clinical Psychologist (RCI)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[var(--kunj-java)]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-primary/10 to-[var(--kunj-java)]/10 mb-5">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2 sm:px-0">
            Insights &{' '}
            <span className="bg-gradient-to-r from-primary via-[var(--kunj-java)] to-primary bg-clip-text text-transparent">
              Articles
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Explore our blog for valuable insights on mental health, therapy, and emotional well-being. Knowledge is the first step toward healing.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              onReadMore={() => setSelectedPost(post)}
            />
          ))}
          
          {/* Coming Soon Card */}
          {blogPosts.length < 3 && (
            <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border-2 border-dashed border-slate-300 overflow-hidden flex items-center justify-center min-h-[300px]">
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-slate-400" />
                </div>
                <p className="text-slate-500 font-medium">More articles coming soon...</p>
                <p className="text-sm text-slate-400 mt-2">Stay tuned for more insights</p>
              </div>
            </div>
          )}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-[var(--kunj-java)]/5 border border-primary/10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
              Want to learn more?
            </h3>
            <p className="text-slate-600 mb-4 max-w-md">
              Follow us on social media for regular mental health tips and updates.
            </p>
            <a
              href="https://www.instagram.com/kunjcare?igsh=c3Q0Y3h4c2d0aWZo&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-[var(--kunj-java)] text-white font-medium transition-all hover:shadow-lg hover:scale-105"
            >
              Follow @kunjcare
            </a>
          </div>
        </div>
      </div>

      {/* Blog Modal */}
      {selectedPost && (
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </section>
  );
};

export default Blog;

