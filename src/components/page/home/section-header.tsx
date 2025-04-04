export const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-md font-bold uppercase tracking-wide text-slate-200 lg:sr-only">
      {children}
    </h2>
  );
};

export default SectionHeader;
