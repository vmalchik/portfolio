export const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    // Informational:
    // Sticky header for each section of the page for screens below lg
    // Subtract margin and add padding to account of padding imposed by the parent
    <div className="sticky max-w-screen top-0 z-10 -mx-6 px-6 md:-mx-12 md:px-12  bg-slate-900/70 backdrop-blur-sm lg:sr-only">
      <h2 className="text-md font-bold uppercase tracking-wide text-slate-200 py-4">
        {children}
      </h2>
    </div>
  );
};
export default SectionHeader;
