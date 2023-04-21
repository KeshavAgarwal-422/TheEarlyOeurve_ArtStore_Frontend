const FooterContainer = () => {
  return (
    <div className=" bg-gainsboro flex flex-col pt-10 px-0 pb-0 items-start justify-start text-left text-base text-black font-dm-sans">
      <div className="self-stretch flex flex-col py-0 pr-[108px] pl-[109px] items-start justify-start gap-[28px]">
        <div className="self-stretch flex flex-row py-0 pr-0 pl-[173px] items-center justify-between mq685:flex-col mq1000:w-full mq1000:pl-[5%] mq1000:pr-[5%] mq1000:box-border">
          <div className="w-[181px] shrink-0 flex flex-row py-2.5 pr-2.5 pl-0 box-border items-center justify-center">
            <img
              className="relative rounded-xxl w-40 h-[161px] shrink-0 object-cover"
              alt=""
              src="../119387896-123284702829832-8666968427235121470-n-13@2x.png"
            />
          </div>
          <div className="w-[464px] shrink-0 flex flex-col py-0 pr-0 pl-10 box-border items-center justify-center gap-[40px]">
            <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
              <div className="w-[464px] flex flex-row items-center justify-center gap-[16px]">
                <img
                  className="relative w-3.5 h-[19.47px] shrink-0"
                  alt=""
                  src="../shape2.svg"
                />
                <div className="flex-1 relative leading-[22px]">
                  123, Main Road West Mumbai, Maharashtra 400067 India
                </div>
              </div>
              <div className="w-[464px] flex flex-row py-0 pr-[100px] pl-0 box-border items-center justify-center gap-[120px] font-assistant">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="relative w-[17.96px] h-[17.96px] shrink-0"
                    alt=""
                    src="../path1.svg"
                  />
                  <div className="relative">(123) 456-7890</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="relative w-5 h-[18px] shrink-0"
                    alt=""
                    src="../shape3.svg"
                  />
                  <div className="relative">(123) 456-7890</div>
                </div>
              </div>
            </div>
            <div className="w-[464px] flex flex-row items-center justify-center gap-[26px] text-gray-200">
              <div className="w-[105px] shrink-0 flex flex-row py-2.5 pr-0 pl-2.5 box-border items-start justify-start">
                <div className="relative font-medium opacity-[0.5] mix-blend-normal">
                  Social Media
                </div>
              </div>
              <div className="w-[333px] shrink-0 flex flex-row items-center justify-start gap-[24px]">
                <div className="flex flex-row p-[3px] items-start justify-start">
                  <a href="https://www.instagram.com/the.early.oeuvre/">
                    <img
                      className="relative w-[18px] h-[18px] shrink-0"
                      alt=""
                      src="../facebook1.svg"
                    />
                  </a>
                </div>
                <div className="flex flex-col py-1 px-[3px] items-start justify-start">
                  <a href="https://www.instagram.com/the.early.oeuvre/">
                    <img
                      className="relative w-[px] h-[18px] shrink-0"
                      alt=""
                      src="../icons8-instagram.svg"
                    />
                  </a>
                </div>

                <div className="flex flex-row p-[3px] items-start justify-start">
                  <a href="https://www.instagram.com/the.early.oeuvre/">
                    <img
                      className="relative w-[18px] h-[18px] shrink-0"
                      alt=""
                      src="../pinterest1.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="self-stretch flex flex-row items-center justify-center mq1000:flex-col">
          <div className="flex-1 flex flex-row items-center justify-center gap-[20px] mq685:gap-[0] mq1000:w-full mq1000:pl-[0%] mq1000:box-border mq1000:flex-[unset] mq1000:self-stretch">
            <div className="w-[88px] shrink-0 flex flex-row items-center justify-center">
              <a
                href="/aboutus"
                className="[text-decoration:none] relative uppercase font-medium text-[inherit] inline-block w-[88px] shrink-0"
              >
                About us
              </a>
            </div>
            <div className="w-[127px] shrink-0 flex flex-col items-center justify-center">
              <a
                href="/contactus"
                className="[text-decoration:none] relative uppercase font-medium text-[inherit] inline-block w-[127px]"
              >
                Contact us
              </a>
            </div>
            <div className="w-[54px] shrink-0 flex flex-row items-center justify-center">
              <a
                href="/help"
                className="[text-decoration:none] relative uppercase font-medium text-[inherit] inline-block w-[54px] shrink-0"
              >
                Help
              </a>
            </div>
            <div className="w-32 shrink-0 flex flex-row items-center justify-center">
              <a
                href="/privacypolicies"
                className="[text-decoration:none] relative uppercase font-medium text-[inherit] inline-block w-32 shrink-0"
              >
                Privacy Policy
              </a>
            </div>
            <div className="w-[101px] shrink-0 flex flex-row items-center justify-center">
              <a
                href="/disclaimer"
                className="[text-decoration:none] relative uppercase font-medium text-[inherit] inline-block w-[101px] shrink-0"
              >
                Disclaimer
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-row p-2.5 items-center justify-center text-gray-200 font-assistant mq1000:flex-[unset] mq1000:self-stretch">
            <div className="relative opacity-[0.5] mix-blend-normal">
              Copyright © 2022 • The Early Oeuvre.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
