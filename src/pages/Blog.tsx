import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/portfolio/Header";
import { Footer } from "@/components/portfolio/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Rss, PenLine, ArrowRight } from "lucide-react";

const BLOGGER_URL = "https://www.blogger.com/blog/posts/8861496811805576316";
const BLOG_FEED_URL = "https://jaikrishnanganeshan.blogspot.com/";

const Blog = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="jaikrishnan-portfolio-theme">
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 pt-24 pb-16">
          <div className="container-custom">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm mb-6">
                <PenLine className="w-4 h-4" />
                Thoughts & Insights
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                The Blog
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                I write about product thinking, first-principles design, robotics, AI, and lessons 
                learned from building hardware-software products from scratch.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full px-8">
                  <a href={BLOG_FEED_URL} target="_blank" rel="noopener noreferrer">
                    <Rss className="w-4 h-4 mr-2" />
                    Visit My Blog
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Blog Preview Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/30 cursor-pointer"
                    onClick={() => window.open(BLOG_FEED_URL, '_blank')}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <PenLine className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Product Philosophy
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Deep dives into first-principles product thinking and building products that matter.
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Read articles <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/30 cursor-pointer"
                    onClick={() => window.open(BLOG_FEED_URL, '_blank')}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Tech & Robotics
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Explorations in robotics, AI systems, and the intersection of hardware and software.
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Read articles <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/30 cursor-pointer"
                    onClick={() => window.open(BLOG_FEED_URL, '_blank')}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Startup Lessons
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Real lessons from founding and building startups in deep-tech and food-tech.
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Read articles <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Coming Soon Notice */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-secondary/50 border border-border">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="text-muted-foreground">
                  Actively blogging — new content coming regularly
                </span>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Blog;
