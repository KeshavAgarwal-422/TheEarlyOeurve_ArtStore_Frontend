const ArtistCard = ({ ImageUrl, name, profile }) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start text-left text-xl text-gray-200 font-optima-lt-std border-[1px] border-solid border-grey-201 mq685:flex-[unset] mq685:self-stretch rounded-full ">
      <div className="w-[200px] flex flex-row items-center justify-start gap-[24px]">
        <img
          className="relative w-20 h-20 shrink-0 object-cover"
          alt=""
          src={ImageUrl}
        />
        <div className="flex flex-col items-start justify-start gap-[3px]">
          <div className="relative leading-[24px]">{name}</div>
          <div className="relative text-base leading-[16px] text-dimgray-100">
            {profile}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
