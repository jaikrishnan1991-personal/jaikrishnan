import { portfolioData, Language } from "@/data/portfolio-data";

const proficiencyStyles = {
  native: "bg-primary text-primary-foreground",
  professional: "bg-secondary text-foreground",
  basic: "bg-muted text-muted-foreground",
};

const proficiencyLabels = {
  native: "Native",
  professional: "Professional",
  basic: "Basic",
};

function LanguageBadge({ language }: { language: Language }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
      <span className="font-medium text-foreground">{language.name}</span>
      <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${proficiencyStyles[language.proficiency]}`}>
        {proficiencyLabels[language.proficiency]}
      </span>
    </div>
  );
}

export function Languages() {
  const { languages } = portfolioData;

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Languages
          </h2>
          <p className="text-muted-foreground">
            Communication skills across cultures
          </p>
        </div>

        {/* Language badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
          {languages.map((language, index) => (
            <LanguageBadge key={index} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}
