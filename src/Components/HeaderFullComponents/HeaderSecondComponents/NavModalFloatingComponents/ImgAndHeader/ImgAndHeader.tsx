interface ImgAndHeaderProps {
  img: string;
  alt: string;
  span: string;
}

const ImgAndHeader = ({ img, alt, span }: ImgAndHeaderProps) => {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <div className="flex w-[100px] h-[100px] !mb-2">
        <img className="flex w-full h-full" src={img} alt={alt} />
      </div>
      <span className="flex text-xl text-[#555] font-semibold">{span}</span>
    </div>
  );
};

export default ImgAndHeader;
