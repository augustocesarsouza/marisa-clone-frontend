interface SectionTitleProps {
  span: string;
}

const SectionTitle = ({ span }: SectionTitleProps) => {
  return (
    <span className="text-[13px] font-semibold text-[#3d3d3d] hover:text-[#ec008c] cursor-pointer">
      {span}
    </span>
  );
};

export default SectionTitle;
