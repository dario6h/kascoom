export default function ServicesHeroSection() {
  return (
    <section
      className="relative h-[180px] sm:h-[200px] md:h-[220px] lg:h-[250px] overflow-hidden"
      style={{
        backgroundImage: 'url(/images/services/hero-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability if needed in future */}
      <div className="absolute inset-0 bg-black/40"></div>
    </section>
  );
}
