import AboutArtistCard from "../../components/Cards/AboutArtistCard";

const Artists = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col py-[41px] px-12 box-border items-center justify-center gap-[50px] mq685:p-5 mq685:box-border">
      <AboutArtistCard
        prop="http://drive.google.com/uc?export=view&id=1xjItXJb42SDUKVL04FvI5deC2KwMBCf4"
        artistName="Neetu Agarwal"
        secDescription="Artist"
        priDescription="Painting is not just a form of art, it's a language. It's a way of expressing emotions, thoughts and ideas that cannot be put into words. With each stroke of the brush, I create a visual story that speaks to the soul and captures the essence of life. "
      />
      <AboutArtistCard
        prop="http://drive.google.com/uc?export=view&id=1v5HG2E3YlRrp9nyZpLhX18Wd17cSw2ZF"
        artistName="Aman Mishra"
        secDescription="Amateur Artist"
        priDescription="Painting is a journey that never ends, an exploration of color and light that transcends time and place. With every brushstroke, I seek to capture the essence of my subject and convey its soul to the viewer"
      />
      <AboutArtistCard
        prop="http://drive.google.com/uc?export=view&id=1g2TScvzB69eknckvKlDNkBAsiH28N07W"
        artistName="Shreshtha Agarwal"
        secDescription="Amateur Artist"
        priDescription="Through oil painting, I am able to express the beauty and complexity of the world around us, and connect with others in a way that words cannot. "
      />
    </div>
  );
};

export default Artists;
