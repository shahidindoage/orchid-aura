import React, { useState } from 'react';
import { Sparkles, Clock, Calendar, ArrowUpRight, X, Share2, Check, Bookmark, BookOpen, ArrowRight, Compass } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost } from '../types';

interface BlogsProps {
  onOpenBooking?: () => void;
}

export const Blogs: React.FC<BlogsProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [copiedLink, setCopiedLink] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = ['All', 'Cellular Wellness', 'Organic Skincare', 'Holistic Sleep', 'Hydrotherapy', 'Sound Therapy'];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  const mainFeaturedPost = filteredPosts.find(post => post.featured) || filteredPosts[0];
  const secondaryPosts = filteredPosts.filter(post => post.id !== mainFeaturedPost?.id).slice(0, 4);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <section id="journal" className="py-12 lg:py-16 bg-[#fff] relative overflow-hidden select-none">
      {/* Background soft ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C6A473]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#A37B57]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2ECE4] border border-[#C6A473]/30 text-[#A37B57] text-xs font-jakarta font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A473]" />
              <span>Sanctuary Journal & Somatic Insights</span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#222222] font-normal leading-[1.15] tracking-tight">
              Wisdom for <span className="italic font-normal text-[#A37B57]">cellular vitality</span> & quiet stillness.
            </h2>

            <p className="font-inter text-[#666666] text-sm sm:text-base font-light leading-relaxed">
              Explore evidence-backed somatic essays on lymphatic circulation, cold-pressed botanicals, circadian sleep hygiene, and autonomic recovery.
            </p>
          </div>

          {/* Minimalist Pill Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#EFE8DE] lg:border-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-jakarta font-medium whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-[#222222] text-white shadow-md'
                      : 'bg-white/80 hover:bg-white text-[#666666] border border-[#EFE8DE] hover:border-[#A37B57]/50 hover:text-[#222222]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Editorial Layout: Left Featured + Right 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDE: Featured Blog Card (5 Cols) */}
          {mainFeaturedPost && (
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-white rounded-3xl border border-[#EFE8DE] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between h-full group">
                
                {/* Featured Image */}
                <div 
                  onClick={() => setActiveArticle(mainFeaturedPost)}
                  className="relative h-72 sm:h-80 lg:h-88 overflow-hidden cursor-pointer shrink-0"
                >
                  <img
                    src={mainFeaturedPost.image}
                    alt={mainFeaturedPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Category & Featured Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-[#222222] text-white font-jakarta text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Featured
                    </span>
                    <span className="bg-white/95 backdrop-blur-md text-[#A37B57] font-jakarta text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                      {mainFeaturedPost.category}
                    </span>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    onClick={(e) => toggleBookmark(mainFeaturedPost.id, e)}
                    className={`absolute top-4 right-4 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all ${
                      bookmarkedIds.includes(mainFeaturedPost.id)
                        ? 'bg-[#A37B57] text-white shadow-md'
                        : 'bg-white/80 text-[#222222] hover:bg-white'
                    }`}
                    title="Bookmark essay"
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                {/* Featured Content Area */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-2.5 text-[11px] font-jakarta text-[#8E867A]">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#C6A473]" />
                        <span>{mainFeaturedPost.readTime}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#C6A473]" />
                        <span>{mainFeaturedPost.date}</span>
                      </div>
                    </div>

                    <h3 
                      onClick={() => setActiveArticle(mainFeaturedPost)}
                      className="font-playfair text-2xl sm:text-3xl text-[#222222] font-normal leading-[1.22] hover:text-[#A37B57] transition-colors cursor-pointer"
                    >
                      {mainFeaturedPost.title}
                    </h3>

                    <p className="font-inter text-xs sm:text-sm text-[#666666] font-light leading-relaxed line-clamp-4">
                      {mainFeaturedPost.excerpt}
                    </p>
                  </div>

                  {/* Author & Read Action */}
                  <div className="pt-5 border-t border-[#EFE8DE] flex items-center justify-between gap-4 mt-auto">
                    <div className="flex items-center gap-3">
                      <img
                        src={mainFeaturedPost.author.avatar}
                        alt={mainFeaturedPost.author.name}
                        className="w-10 h-10 rounded-full object-cover border border-[#EFE8DE]"
                      />
                      <div>
                        <p className="font-jakarta text-xs font-semibold text-[#222222]">
                          {mainFeaturedPost.author.name}
                        </p>
                        <p className="font-inter text-[11px] text-[#888888]">
                          {mainFeaturedPost.author.role}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveArticle(mainFeaturedPost)}
                      className="inline-flex items-center gap-2 bg-[#222222] hover:bg-[#A37B57] text-white px-4 py-2.5 rounded-full text-xs font-jakarta font-semibold transition-all duration-300 shadow-xs group/btn"
                    >
                      <span>Read essay</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* RIGHT SIDE: 2 by 2 Grid of 4 Blogs (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {secondaryPosts.map((post) => {
              const isBookmarked = bookmarkedIds.includes(post.id);

              return (
                <article
                  key={post.id}
                  className="bg-white rounded-3xl border border-[#EFE8DE] shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between group h-full"
                >
                  {/* Thumbnail */}
                  <div 
                    onClick={() => setActiveArticle(post)}
                    className="relative h-48 overflow-hidden cursor-pointer shrink-0"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                    {/* Category Pill */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/95 backdrop-blur-md text-[#222222] font-jakarta text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                        {post.category}
                      </span>
                    </div>

                    {/* Bookmark Button */}
                    <button
                      onClick={(e) => toggleBookmark(post.id, e)}
                      className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all ${
                        isBookmarked
                          ? 'bg-[#A37B57] text-white shadow-md'
                          : 'bg-white/80 text-[#222222] hover:bg-white'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-[10px] font-jakarta text-[#8E867A]">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#C6A473]" />
                          <span>{post.readTime}</span>
                        </div>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>

                      <h3
                        onClick={() => setActiveArticle(post)}
                        className="font-playfair text-lg text-[#222222] font-medium leading-snug hover:text-[#A37B57] transition-colors cursor-pointer line-clamp-2"
                      >
                        {post.title}
                      </h3>

                      <p className="font-inter text-xs text-[#666666] font-light leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Author & Arrow Action */}
                    <div className="pt-3.5 border-t border-[#EFE8DE] flex items-center justify-between gap-2 mt-auto">
                      <div className="flex items-center gap-2.5 truncate">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-7 h-7 rounded-full object-cover border border-[#EFE8DE] shrink-0"
                        />
                        <p className="font-jakarta text-[11px] font-semibold text-[#222222] truncate">
                          {post.author.name}
                        </p>
                      </div>

                      <button
                        onClick={() => setActiveArticle(post)}
                        className="w-8 h-8 rounded-full bg-[#FAF8F5] group-hover:bg-[#A37B57] text-[#222222] group-hover:text-white flex items-center justify-center shrink-0 border border-[#EFE8DE] group-hover:border-[#A37B57] transition-all duration-300"
                        title="Read essay"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </article>
              );
            })}
          </div>

        </div>

        {/* Private Journal Subscription Footer Box */}
        {/* <div className="mt-20 bg-gradient-to-r from-[#1F1C18] via-[#28231E] to-[#1A1815] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C6A473]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#D4B384] text-[11px] font-jakarta font-medium backdrop-blur-md">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Sanctuary Dispatch</span>
              </div>
              
              <h3 className="font-playfair text-2xl sm:text-3xl text-white font-normal leading-snug">
                Receive private seasonal wellness dispatches.
              </h3>

              <p className="font-inter text-xs sm:text-sm text-[#B0A89C] font-light leading-relaxed max-w-xl">
                Subscribe to receive private invitations for seasonal retreats, somatic therapy breakdowns, and limited cold-pressed botanical drops.
              </p>
            </div>

            <div className="lg:col-span-5">
              {!subscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your private email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="bg-[#2B2620] border border-[#3A332B] rounded-full px-5 py-3 text-xs sm:text-sm font-jakarta text-white placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#D4B384] flex-1"
                  />
                  <button
                    type="submit"
                    className="bg-[#A37B57] hover:bg-[#C6A473] text-white font-jakarta text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="bg-[#2B2620] p-4 rounded-2xl border border-[#3A332B] flex items-center gap-3 text-xs sm:text-sm font-jakarta text-[#D4B384]">
                  <Check className="w-5 h-5 text-[#C6A473] shrink-0" />
                  <span>Your email has been added to our private journal list.</span>
                </div>
              )}
            </div>
          </div>
        </div> */}

      </div>

      {/* Full Article Reader Modal Overlay */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-md animate-fade-in">
          
          <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl border border-[#EFE8DE] shadow-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-[#A37B57]/30 flex flex-col">
            
            {/* Reader Top Bar */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 sm:px-10 py-4 border-b border-[#EFE8DE] flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-jakarta text-[#A37B57]">
                <span className="font-semibold uppercase tracking-wider">{activeArticle.category}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] hover:bg-[#EFE8DE] text-xs font-jakarta text-[#222222] border border-[#EFE8DE] transition-colors"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-[#A37B57]" />}
                  <span>{copiedLink ? 'Copied' : 'Share'}</span>
                </button>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="w-9 h-9 rounded-full bg-[#FAF8F5] hover:bg-[#222222] hover:text-white text-[#222222] flex items-center justify-center border border-[#EFE8DE] transition-colors"
                  aria-label="Close article"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Reader Main Body */}
            <div className="p-6 sm:p-12 space-y-8">
              
              {/* Header Title */}
              <div className="space-y-5 max-w-3xl">
                <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#222222] font-normal leading-[1.15]">
                  {activeArticle.title}
                </h1>

                <div className="flex items-center gap-4 pt-2">
                  <img
                    src={activeArticle.author.avatar}
                    alt={activeArticle.author.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#EFE8DE] shadow-xs"
                  />
                  <div>
                    <p className="font-jakarta text-sm font-semibold text-[#222222]">
                      {activeArticle.author.name}
                    </p>
                    <p className="font-inter text-xs text-[#666666]">
                      {activeArticle.author.role} • Published {activeArticle.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Visual Image */}
              <div className="relative h-72 sm:h-[420px] rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Pull Quote Box */}
              <div className="border-l-2 border-[#A37B57] pl-6 py-2 bg-[#FAF6F0] rounded-r-2xl my-6">
                <p className="font-playfair italic text-lg sm:text-xl text-[#222222] font-normal leading-relaxed">
                  "{activeArticle.excerpt}"
                </p>
              </div>

              {/* Article Content Text */}
              <div className="max-w-3xl space-y-6 font-inter text-[#333333] text-sm sm:text-base font-light leading-relaxed whitespace-pre-line">
                {activeArticle.content.trim()}
              </div>

              {/* Article Tags */}
              <div className="pt-6 border-t border-[#EFE8DE] flex flex-wrap items-center gap-2">
                <span className="text-xs font-jakarta font-semibold text-[#222222] mr-2">Topics:</span>
                {activeArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#FAF8F5] border border-[#EFE8DE] text-[#A37B57] text-xs font-jakarta px-3.5 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Related Sanctuary Ritual CTA */}
              <div className="bg-[#1C1A17] text-white rounded-2xl p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-[#D4B384] text-xs font-jakarta font-medium">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Somatic Application</span>
                  </div>
                  <h4 className="font-playfair text-xl sm:text-2xl text-white font-normal leading-tight">
                    Experience this somatic treatment in person.
                  </h4>
                  <p className="font-inter text-xs text-[#B0A89C] font-light leading-relaxed">
                    Consult our lead therapists for a bio-individual appointment matching these principles.
                  </p>
                </div>

                {onOpenBooking && (
                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      onOpenBooking();
                    }}
                    className="inline-flex items-center gap-2 bg-[#A37B57] hover:bg-[#C6A473] text-white font-jakarta text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 shrink-0 shadow-md hover:scale-105"
                  >
                    <span>Reserve a session</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
};

