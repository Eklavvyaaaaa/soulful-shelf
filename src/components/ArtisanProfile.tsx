const ArtisanProfile = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <div className="w-24 h-24 bg-muted rounded-full mx-auto"></div>
          <h2 className="text-2xl md:text-3xl font-light text-foreground">
            Maria Rodriguez
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A textile artist working with traditional weaving techniques from Oaxaca, Mexico. 
            Each piece reflects a deep connection to ancestral knowledge and contemporary expression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
          <div className="text-left space-y-3">
            <h3 className="text-lg font-normal text-foreground">Heritage</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Techniques passed down through five generations of weavers, 
              each pattern carrying stories of our mountain village.
            </p>
          </div>
          <div className="text-left space-y-3">
            <h3 className="text-lg font-normal text-foreground">Process</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              From hand-spun wool to natural dyes, every step honors 
              the material and the time-honored methods of our ancestors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanProfile;