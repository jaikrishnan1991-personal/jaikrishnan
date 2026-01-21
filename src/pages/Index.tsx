import { ThemeProvider } from "@/components/ThemeProvider";
import {
  Header,
  Hero,
  Philosophy,
  Capabilities,
  Experience,
  Patents,
  Education,
  Languages,
  Footer,
} from "@/components/portfolio";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="jaikrishnan-portfolio-theme">
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Philosophy />
          <Capabilities />
          <Experience />
          <Patents />
          <Education />
          <Languages />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
