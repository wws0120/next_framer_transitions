const SectionWrapper = ({ children, className = '' }) => {
  return (
    <section className={`py-16 px-4 md:px-8 lg:px-10 ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
