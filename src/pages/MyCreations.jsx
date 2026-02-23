export default function MyCreations() {
  return (
    <div className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold mb-4">My Creations</h1>
          <p className="text-xl text-primary font-light">Handcrafted with love in Saint Augustine, Florida</p>
        </div>

        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
          A glimpse into the artisan process behind Spice Wood Soaps. Each product is carefully crafted by hand using traditional methods and natural ingredients.
        </p>

        {/* Placeholder image grid – replace with actual photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="aspect-square bg-secondary/30 rounded-xl flex items-center justify-center text-muted-foreground">
              [Photo {i}]
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}