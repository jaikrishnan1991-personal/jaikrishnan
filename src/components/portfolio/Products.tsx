import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChefHat, Cpu, Cloud, Sparkles, Check } from "lucide-react";

import braneUws1 from "@/assets/products/brane-uws.jpg";
import braneUws2 from "@/assets/products/brane-uws-2.jpg";
import rakakaHero from "@/assets/products/rakaka-hero.jpg";
import frshlyDispenser from "@/assets/products/frshly-dispenser.png";

// Featured product - Rakaka
const featuredProduct = {
  id: "rakaka",
  title: "Autonomous Cooking System",
  company: "Rakaka Food Technology",
  tagline: "Simplify Cooking",
  description: "Built an IoT-enabled autonomous cooking system from scratch — spanning mechanical design, embedded systems, software orchestration, and user experience. A patented, modular architecture enabling effortless meal creation.",
  images: [rakakaHero],
  videos: [
    { id: "bFxjtevRHGw", title: "Rakaka Demo" },
    { id: "elfl-DESBgk", title: "Rakaka Overview" },
  ],
  tags: ["Food-Tech", "IoT", "AI/ML", "Patented", "Full-Stack Product"],
  features: [
    {
      icon: ChefHat,
      title: "One-Touch Cooking",
      description: "Load ingredients, select recipe, and enjoy fresh meals without manual intervention"
    },
    {
      icon: Cpu,
      title: "Poka-Yoke Loading",
      description: "Integrated weighing scale and image-based algorithm ensures accurate ingredient loading"
    },
    {
      icon: Cloud,
      title: "Cloud Platform",
      description: "Cloud-connected platform extracting cooking data and enabling personalized recommendations"
    },
    {
      icon: Sparkles,
      title: "AI-Powered",
      description: "ML-driven personalization that continuously improves the cooking experience"
    },
  ],
  highlights: [
    "Patented Food Processor Machine (IN 365893)",
    "End-to-end hardware-software co-design",
    "Camera-based ingredient verification",
    "Zero post-cooking cleaning required",
  ],
};

const otherProducts = [
  {
    id: "brane-uws",
    title: "Autonomous Underwater Systems",
    company: "Brane Group",
    description: "Designed and architected autonomous underwater vehicles (AUVs) and unmanned surface vessels (USVs) for maritime operations, integrating AI perception, embedded control systems, and robust mechanical design.",
    images: [braneUws2, braneUws1],
    tags: ["Robotics", "AI", "Embedded Systems", "Maritime"],
  },
  {
    id: "frshly",
    title: "Smart Food Dispensing System",
    company: "Frshly",
    description: "Led product innovation for smart food dispensing systems with computer-vision-driven interaction flows tightly coupled with embedded hardware behavior.",
    images: [frshlyDispenser],
    tags: ["Computer Vision", "IoT", "Product Design"],
  },
];

function ProductCard({ product }: { product: typeof otherProducts[0] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <Dialog>
          <DialogTrigger asChild>
            <img
              src={product.images[selectedImage]}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-zoom-in"
            />
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            <img
              src={product.images[selectedImage]}
              alt={product.title}
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
        
        {product.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {product.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === selectedImage 
                    ? "bg-primary w-6" 
                    : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">
              {product.title}
            </h3>
            <p className="text-primary font-medium text-sm">{product.company}</p>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function FeaturedProduct() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'image' | 'video'>('image');
  const [selectedVideo, setSelectedVideo] = useState(0);

  return (
    <div className="mb-16">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Media Section */}
        <div className="relative">
          {/* Tab Switcher */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setActiveTab('image')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'image'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              Images
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'video'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              Videos
            </button>
          </div>

          {activeTab === 'image' ? (
            <>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary cursor-zoom-in group">
                    <img
                      src={featuredProduct.images[selectedImage]}
                      alt={featuredProduct.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured Project
                    </Badge>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
                  <img
                    src={featuredProduct.images[selectedImage]}
                    alt={featuredProduct.title}
                    className="w-full h-auto rounded-lg"
                  />
                </DialogContent>
              </Dialog>
              
              {/* Thumbnail selector */}
              {featuredProduct.images.length > 1 && (
                <div className="flex gap-3 mt-4 justify-center">
                  {featuredProduct.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                        idx === selectedImage 
                          ? "border-primary ring-2 ring-primary/30" 
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary">
                <iframe
                  src={`https://www.youtube.com/embed/${featuredProduct.videos[selectedVideo].id}`}
                  title={featuredProduct.videos[selectedVideo].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              
              {/* Video selector */}
              <div className="flex gap-3 mt-4 justify-center">
                {featuredProduct.videos.map((video, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedVideo(idx)}
                    className={`w-24 h-16 rounded-lg overflow-hidden border-2 transition-all relative ${
                      idx === selectedVideo 
                        ? "border-primary ring-2 ring-primary/30" 
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                      alt={video.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-black border-b-[5px] border-b-transparent ml-0.5" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center">
          <p className="text-primary font-medium mb-2">{featuredProduct.company}</p>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            {featuredProduct.title}
          </h3>
          <p className="text-xl text-muted-foreground italic mb-4">"{featuredProduct.tagline}"</p>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            {featuredProduct.description}
          </p>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {featuredProduct.features.map((feature) => (
              <div key={feature.title} className="flex gap-3 p-3 rounded-xl bg-secondary/50">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            {featuredProduct.highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {featuredProduct.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Products I've Built
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment — physical products that solve real-world problems
          </p>
        </div>

        {/* Featured Product */}
        <FeaturedProduct />

        {/* Other Products */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
          Other Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {otherProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
