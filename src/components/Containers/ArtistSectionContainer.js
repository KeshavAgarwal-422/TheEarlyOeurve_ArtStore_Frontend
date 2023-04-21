import ArtistCard from "../Cards/ArtistCard";

const ArtistSectionContainer = () => {
  return (
    <section className="self-stretch bg-whitesmoke-100 flex flex-col py-14 px-[50px] items-start justify-start text-left text-base text-gray-200 font-karla mq685:pl-5 mq685:pr-5 mq685:box-border mq1000:pl-5 mq1000:pr-5 mq1000:box-border">
      <div className="self-stretch flex flex-col py-0 px-10 items-start justify-start gap-[32px]">
        <div className="relative tracking-[0.88px] leading-[24px] uppercase ">
          Featured Artists
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[32px] text-xl font-optima-lt-std mq685:flex-col ">
          <ArtistCard
            ImageUrl="http://drive.google.com/uc?export=view&id=1xjItXJb42SDUKVL04FvI5deC2KwMBCf4"
            name="NeetuAgarwal"
            profile="Artist, India"
          />
          <ArtistCard
            ImageUrl="http://drive.google.com/uc?export=view&id=1v5HG2E3YlRrp9nyZpLhX18Wd17cSw2ZF"
            name="AmanMishra"
            profile="Painter, India"
          />
          <ArtistCard
            ImageUrl="http://drive.google.com/uc?export=view&id=1g2TScvzB69eknckvKlDNkBAsiH28N07W"
            name="ShreshthaAgarwal"
            profile="Painter, India"
          />
        </div>
      </div>
    </section>
  );
};

export default ArtistSectionContainer;
