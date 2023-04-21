const AboutArtistCard = ({
  prop,
  artistName,
  secDescription,
  priDescription,
}) => {
  return (
    <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] flex flex-row py-5 px-0 items-center justify-center gap-[150px] text-left text-11xl text-dimgray-200 font-inria-serif md:flex-col md:gap-[100px] mq1000:gap-[50px] mq1000:text-3xl">
      <div className="flex flex-col items-center justify-start gap-[5px]">
        <div className="rounded-xxs w-[242px] h-[243px] shrink-0 flex flex-row p-2.5 box-border items-center justify-center mq1000:w-[210px] mq1000:h-[210px] mq1000:aspect-[1]">
          <img
            className="self-stretch flex-1 relative rounded-small max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={prop}
          />
        </div>
        <div className="flex flex-col items-center justify-start gap-[5px]">
          <b className="relative tracking-[0.03em] mq1000:text-8xl">
            {artistName}
          </b>
          <div className="relative text-7xl tracking-[0.03em] font-light text-gray-100 mq1000:text-3xl">
            {secDescription}
          </div>
        </div>
      </div>
      <p className="m-0 relative text-5xl tracking-[0.02em] leading-[35px] inline-block italic font-light text-center w-[459px] shrink-0 mq685:text-lg mq685:leading-[30px] mq1000:text-2xl mq1000:w-[350px]">
        {priDescription}
      </p>
    </div>
  );
};

export default AboutArtistCard;
