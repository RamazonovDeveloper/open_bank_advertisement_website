// import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { data } from "./data";
import { partners } from "./data";
import Link from "next/link";

export default function Home() {
  const [lang, setLang] = useState("uz");
  const [langData, setLangData] = useState(data["uz"]);

  useEffect(() => {
    let identifyLang = localStorage.getItem("lang");
    console.log("identify Language is :");

    if (!identifyLang || identifyLang != "uz" || identifyLang != "ru") {
      // console.log("salom sanga eee qizgina");
      localStorage.setItem("lang", "uz");
      identifyLang = "uz";
    }

    setLang(identifyLang);

    setLangData(data[lang]);
  }, []);

  useEffect(() => {
    setLangData(data[lang]);
  }, [lang]);

  const handleLangClick = (name) => {
    localStorage.setItem("lang", name);
    setLang(name);
  };

  const smPartners = partners.slice(0, 6);

  const mdPartners = partners.slice(6, 9);

  const lgPartners = partners.slice(9, 12);

  const [navbarIsActive, setNavbarActive] = useState(false);

  function handleClick(value) {
    setNavbarActive(value);
  }

  return (
    <main>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PN2KQX9"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* <nav className="container flex justify-between items-center pt-[30px] pb-[31.44px]">
        <div className="flex">
          <a href="#">
            <img className="w-[100px]" src="/images/open-card-logo.png" alt="Logo" />
          </a>
          <div>
            <ul className="flex uppercase items-center">
              <li className="lg:ml-[60px] md:ml-[40px]"><Link href="/openCard/#store">{langData.nav_link_1}</Link></li>
              <li className="lg:ml-[60px] md:ml-[40px]"><Link href="/openCard/#bank">{langData.nav_link_2}</Link></li>
              <li className="lg:ml-[60px] md:ml-[40px]"><Link href="/">{langData.nav_link_4}</Link></li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex">
          <div
            className={
              lang == "ru"
                ? "flex items-center cursor-pointer mr-8"
                : "flex items-center cursor-pointer mr-8 opacity-30"
            }
            onClick={() => {
              setLang("ru");
              handleLangClick("ru");
            }}
          >
            <img src="/images/Flag.png" alt="RuFlag" />
            <p className="ml-2 text-[14px] leading-[22px] tracking-[0.01em]">Русский</p>
          </div>
          <div
            className={
              lang == "uz"
                ? "flex items-center cursor-pointer"
                : "flex items-center cursor-pointer opacity-30"
            }
            onClick={() => {
              setLang("uz");
              handleLangClick("uz");
            }}
          >
            <img src="/images/bayroq.png" alt="UzFlag" />
            <p className="ml-2 text-[14px] leading-[22px] tracking-[0.01em]">O'zbek</p>
          </div>
        </div>
        <div className="md:hidden flex">
          <img
            className={lang != "uz" ? "hidden" : "flex"}
            onClick={() => setLang("ru")}
            src="/images/Flag.png"
            alt="RuFlag"
          />
          <img
            className={lang != "ru" ? "hidden" : "flex"}
            onClick={() => setLang("uz")}
            src="/images/bayroq.png"
            alt="UzFlag"
          />
        </div>
      </nav> */}

      <div className="my_navbar">
        <div className="container flex justify-between items-center pt-6 pb-[10px]">
          <div className="md:hidden cursor-pointer">
            {navbarIsActive ? (
              <div>
                <img
                  onClick={() => handleClick(false)}
                  src={"/assets/close.png"}
                  alt=""
                />
              </div>
            ) : (
              <div>
                <img
                  onClick={() => handleClick(true)}
                  src={"/assets/menu.png"}
                  alt=""
                />
              </div>
            )}
          </div>
          <div className="flex">
            <Link href="/">
              <img
                className="w-[100px]"
                src={"/assets/open_rass_logo.png"}
                alt="Logo"
              />
            </Link>

            <div className="md:flex hidden">
              <ul className="flex uppercase items-center">
                <li className="lg:ml-[60px] md:ml-[40px]">
                  <Link href="/">{langData.nav_link_4}</Link>
                </li>
                <li className="lg:ml-[60px] md:ml-[40px]">
                  <Link href="/openCard/#store">{langData.nav_link_1}</Link>
                </li>
                <li className="lg:ml-[60px] md:ml-[40px]">
                  <Link href="/openCard/#bank">{langData.nav_link_2}</Link>
                </li>
              </ul>
            </div>

            <div
              className={
                !navbarIsActive
                  ? "my_navbar_links md:hidden"
                  : "my_navbar_links my_navbar_links-active"
              }
            >
              <ul className="flex uppercase">
                <li className="lg:ml-[60px] md:ml-[40px]">
                  <Link href="/">{langData.nav_link_4}</Link>
                </li>
                <li className="lg:ml-[60px] mb-3 ">
                  <Link href="#store">{langData.nav_link_3}</Link>
                </li>
                <li className="lg:ml-[60px] mb-3">
                  <Link href="#bank">{langData.nav_link_2}</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* LANGUAGES WITH TEXT */}
          <div className="hidden md:flex">
            <div
              className={
                lang === "uz"
                  ? "opacity-50 flex cursor-pointer"
                  : "flex cursor-pointer"
              }
              onClick={() => handleLangClick("ru")}
            >
              <img className="w-7 me-2" src={"/assets/Flag.png"} alt="" />
              <p className="text-base">Русский</p>
            </div>
            <div
              className={
                lang === "ru"
                  ? "opacity-50 flex cursor-pointer ml-[30px]"
                  : "flex cursor-pointer ml-[30px]"
              }
              onClick={() => handleLangClick("uz")}
            >
              <img className="w-7 me-2" src={"/assets/bayroq.png"} alt="" />
              <p className="text-base">O'zbek</p>
            </div>
          </div>

          {/* LANGUAGES WITHOUT TEXT */}
          <div className="md:hidden flex">
            <img
              className={lang != "uz" ? "hidden" : "flex w-6"}
              onClick={() => setLang("ru")}
              src={"/assets/Flag.png"}
              alt="RuFlag"
            />
            <img
              className={lang != "ru" ? "hidden" : "flex w-6"}
              onClick={() => setLang("uz")}
              src={"/assets/bayroq.png"}
              alt="UzFlag"
            />
          </div>
        </div>
      </div>

      <header className="mt-20">
        <div className="_container relative">
          <div className="bg-main_violet text-white px-[10px] py-10 rounded-xl sm:px-[16px] sm:pt-[50px] md:pt-[40px] md:px-[20px] lg:pt-[60px] lg:px-[30px] relative overflow-hidden">
            <div className="relative md:w-full z-10">
              <div className="sm:mb-[390px] md:mb-[60px] lg:mb-[100px]">
                <div className="text-[25px] lg:w-[55%]  uppercase font-light leading-[34px] tracking-[0.035em] sm:text-[32px] sm:leading-[43px]">
                  <h3>{langData.header_title1}</h3>
                  <h3 className="lg:ml-auto lg:mr-0 lg:w-fit md:mt-[10px]">
                    {langData.header_title2}
                  </h3>
                </div>
                <p className="mt-5 md:mt-[30px] md:w-[40%] opacity-80 font-light leading-[22px]">
                  {langData.header_text}
                </p>
              </div>
              <img
                className="my_header_card sm:w-[400px] mt-4 mb-12 sm:mt-10 sm:absolute top-[190px] left-0 md:w-[351px] lg:w-[416px] md:left-auto md:right-0 md:top-[30px] lg:top-1"
                src="/images/mainCard.png"
                alt=""
              />
              <a
                className="scan_btn flex items-center md:w-[330px] text-text_gray lg:w-[322px] rounded-xl py-5 px-6 pr-4 text-base font-medium leading-[21px] md:py-2 md:px-[28px] "
                href="https://openuz.onelink.me/6W8i/payMerchant"
                target="_blank"
              >
                <img
                  className="mr-2 md:hidden"
                  src="/images/footIos.png"
                  alt=""
                />
                <img
                  className="mr-3 md:hidden"
                  src="/images/footPlay.png"
                  alt=""
                />
                <p>{langData.header_scan}</p>
                <img
                  className="md:ml-auto md:mr-0 hidden md:flex"
                  src="/images/download_qr_code.png"
                  alt=""
                  width={"66px"}
                  height={"66px"}
                />
              </a>
            </div>
            <div className="absolute -bottom-[150px] -left-1/3 md:-left-[20px] md:-bottom-[175px] w-[1120px] ">
              <img src="/images/mainCardBack.png" className="w-full" alt="" />
            </div>
          </div>

          <a
            href="https://openuz.onelink.me/6W8i/payMerchant"
            target="_blank"
            className="absolute top-[160px] -right-[150px] cursor-pointer xl:flex hidden  bg-main_violet rounded-xl p-4 text-text_gray w-[155px] items-center"
          >
            <img src="/images/download.png" alt="" />
            <p className="text-[14px] leading-[14px] ml-2 w-[80px]">
              {langData.download_btn}
            </p>
          </a>
        </div>
      </header>

      {/* OPEN CARD SECTION */}
      <section className="container">
        <h2 className="text-[28px] mb-[35px] sm:mb-10  mt-[70px] sm:mt-[90px]  leading-[38px] sm:text-[32px] sm:leading-[43px] lg:mb-[60px]">
          {langData.section_open_card_header}
        </h2>
        <div className=" grid grid-cols-2 gap-4 sm:gap-[10px] md:gap-5 lg:grid-cols-4">
          <div className="py-[34px] px-3 text-center rounded-xl my_card">
            <p className="text-main_violet text-[20px] font-light leading-6 mb-4 md:text-[28px] sm:leading-[36px] md:leading-[39px]">
              <span className="text-[25px] leading-[30px] mr-[5px] sm:text-[24px] md:text-[32px]">
                12
              </span>
              {langData.section_open_card_1_title}
            </p>
            <p className="text-[14px] font-normal leading-[18px] md:text-base">
              {langData.section_open_card_1_body}
            </p>
          </div>
          <div className="py-[30px] px-4 text-center rounded-xl my_card">
            <img
              className="mx-auto mb-4 w-[30px] sm:w-[38px]"
              src="/images/timer.png"
              alt="timer"
            />
            <p className="text-[14px] font-normal leading-[18px] md:text-base">
              {langData.section_open_card_2_body}
            </p>
          </div>
          <div className="py-[30px] w-[100%] mx-auto text-center rounded-xl my_card">
            <p className="text-main_violet mb-4">
              <span className="text-[23px] leading-[28px] font-light sm:text-[30px] sm:leading-[36px] md:leading-[39px]">
                50 000 000
              </span>
            </p>
            <p className="text-[14px] font-normal leading-[18px] md:text-base">
              {langData.section_open_card_3_body}
            </p>
          </div>
          <div className="py-[30px] w-[100%] mx-auto text-center rounded-xl my_card">
            <img
              className="mx-auto mb-4 w-[30px] sm:w-[38px]"
              src="/images/hand.png"
              alt="timer"
            />
            <p className="text-[14px] font-normal leading-[18px] md:text-base">
              {langData.section_open_card_4_body}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 CARDS */}
      <section className="container">
        <h2 className="text-[28px] mb-[35px] sm:mb-10  mt-[70px] sm:mt-[90px]  leading-[38px] sm:text-[32px] sm:leading-[43px] lg:mb-[60px]">
          {langData.section_card_title}
        </h2>
        <div>
          <div
            style={{ backgroundImage: "url(/images/card1BackFigma.png)" }}
            className="my_card_back_styles w-full md:w-[calc(50%_-_10px)]  rounded-xl h-[645px] pt-5 px-[10px] sm:px-5 lg:pt-[30px] xl:px-[30px] mb-2.5 md:mb-5 md:mr-5 md:float-left"
          >
            <div className="">
              <h2 className="text-[23px] leading-[31px] sm:text-[30px] sm:leading-[40px] lg:text-[32px] lg:leading-[43px]">
                {langData.section_card_1_title}
              </h2>
              <p className="text-base leading-[21px] font-medium mt-5 lg:mt-[30px]">
                {langData.section_card_1_text}
              </p>
            </div>
          </div>
          <div className="relative w-full md:w-[calc(50%_-_10px)] bg-card_yellow rounded-xl h-[394px] pt-5 lg:pt-[30px] px-[10px] sm:px-5 xl:px-[30px] overflow-hidden mb-2.5 md:mb-5 md:float-right">
            <div className="">
              <h2 className="text-[23px] leading-[31px] sm:text-[30px] sm:leading-[40px] lg:text-[32px] lg:leading-[43px]">
                {langData.section_card_2_title}
              </h2>
              <p className="text-base leading-[21px] font-medium mt-5  lg:mt-[30px] md:w-[90%]">
                {langData.section_card_2_text}
              </p>
            </div>
            <div className="absolute -bottom-[130px] md:-bottom-[110px] -right-[45%] sm:-right-[25%] md:-right-[35%] lg:-right-[27%]">
              <img className="" src="/images/card2Img.png" alt="" />
            </div>
          </div>
          <div
            style={{ backgroundImage: "url(/images/card3BackFigma.png)" }}
            className="my_card3_back_styles w-full md:w-[calc(50%_-_10px)] rounded-xl h-[625px] pt-5 px-[10px] sm:px-5 lg:pt-[30px] xl:px-[30px] mb-2.5 md:mb-5 md:float-right"
          >
            <div className="">
              <h2 className="text-[23px] leading-[31px] sm:text-[30px] sm:leading-[40px] lg:text-[32px] lg:leading-[43px]">
                {langData.section_card_3_title1}
                <br />
                {langData.section_card_3_title2}
              </h2>
              <p className="text-base leading-[21px] font-medium mt-5 lg:mt-[30px]">
                {langData.section_card_3_text}
              </p>
            </div>
          </div>
          <div
            style={{ backgroundImage: "url(/images/card4BackFigma.png)" }}
            className="my_card4_back_styles w-full md:w-[calc(50%_-_10px)] rounded-xl h-[693px] md:h-[789px] pt-5 px-[10px] sm:px-5 lg:pt-[30px] xl:px-[30px] mb-2.5 md:float-left md:mb-5"
          >
            <div className="">
              <h2 className="text-[23px] leading-[31px] sm:text-[30px] sm:leading-[40px] lg:text-[32px] lg:leading-[43px]">
                {langData.section_card_4_title}
              </h2>
              <p className="text-base leading-[21px] font-medium mt-5 lg:mt-[30px]">
                {langData.section_card_4_text}
              </p>
            </div>
          </div>
          <div
            style={{ backgroundImage: "url(/images/card5BackFigmaNice.png)" }}
            className="my_card5_back_styles w-full md:w-[calc(50%_-_10px)] rounded-xl h-[395px] pt-5 px-[10px] sm:px-5 lg:pt-[30px] xl:px-[30px] mb-2.5 md:mb-5 md:float-right"
          >
            <div className="">
              <h2 className="text-[23px] leading-[31px] sm:text-[30px] sm:leading-[40px] lg:text-[32px] lg:leading-[43px]">
                {langData.section_card_5_title}
              </h2>
              <p className="text-base leading-[21px] font-medium mt-5 lg:mt-[30px]">
                {langData.section_card_5_text}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-card_violet w-full rounded-xl h-[602px] md:h-[382px] lg:h-[451px] overflow-hidden md:flex md:flex-row-reverse">
          <div className="md:w-1/2 md:pl-[30px] xl:pl-10 pt-5 px-[10px] sm:px-5 lg:pt-[30px] xl:px-[30px]">
            <h2 className="text-[23px] leading-[31px] sm:text-[30px] sm:leading-[40px] lg:text-[32px] lg:leading-[43px] md:w-[70%]">
              {langData.section_card_6_title}
            </h2>
            <p className="text-base leading-[21px] font-medium mt-5 md:mt-8">
              {langData.section_card_6_text}
            </p>
          </div>
          <div className="mt-14 md:h-full md:w-1/2 md:mt-0 w-full flex justify-center">
            <img className="md:h-full" src="/images/card62x.png" alt="" />
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="container mb-[60px] md:relative">
        <h2 className="text-[28px] mb-[35px]  mt-[70px] sm:mt-[90px]  leading-[38px] sm:text-[32px] sm:leading-[43px] md:mb-20 lg:mb-[60px]">
          {langData.section_map_title}
        </h2>
        <img
          className="mb-9 mt-1 sm:mb-11 md:w-[91%]"
          src="/images/map.png"
          alt="Uzb Map"
        />
        <div className="text-base md:absolute md:top-24 md:left-[calc(50%+30px)] xl:left-[calc(50%+40px)]">
          <div className="flex items-center mb-5">
            <span className="w-5 block h-5 bg-main_violet rounded mr-4"></span>
            <p className="font-medium leading-[20px]">
              {langData.section_map_text1}
            </p>
          </div>
          <div className="flex items-center">
            <span className="w-5 block h-5 bg-check_gray rounded mr-4"></span>
            <p>{langData.section_map_text2}</p>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      {/* <section className="container mb-[60px]">
        <h2 className="text-[28px] mb-[35px] sm:mb-10  mt-[70px] sm:mt-[90px]  leading-[38px] sm:text-[32px] sm:leading-[43px] lg:mb-[60px]">
          {langData.section_partners_title}
        </h2>
        <div className="w-full grid grid-cols-2 gap-[10px] md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {
            smPartners.map((item, index)=> {
              return<div className="my_card rounded-xl w-full flex h-[130px] " key={index}>
                <img
                  className=" mx-auto my-auto w-[130px] sm:w-[150px]"
                  src={item.image_url}
                  alt=""
                />
              </div>
            })
          }
          {
            mdPartners.map((item, index)=> {
              return<div className="my_card rounded-xl w-full h-[130px] hidden md:flex" key={index}>
                <img
                  className=" mx-auto my-auto w-[130px] sm:w-[150px]"
                  src={item.image_url}
                  alt=""
                />
              </div>
            })
          }
          {
            lgPartners.map((item, index)=> {
              return<div className="my_card rounded-xl w-full h-[130px] hidden lg:flex" key={index}>
                <img
                  className=" mx-auto my-auto w-[130px] sm:w-[150px]"
                  src={item.image_url}
                  alt=""
                />
              </div>
            })
          }

        </div>
        <div className="w-full flex justify-end">
          <div className="text-main_violet leading-[21px] pb-1 my_link cursor-pointer mt-5">{langData.section_partners_link}</div>
        </div>
      </section> */}

      <footer className="_container h-[480px] md:h-[283px] lg:h-[375px] bg-main_violet md:bg-inherit text-white md:text-black rounded-xl rounded-b-none overflow-hidden md:mb-[30px]">
        <div className=" h-full relative md:py-[26px]">
          <div className="absolute md:static z-10 md:w-1/2  ml-auto mr-0 h-full flex items-center px-[10px] sm:px-4 md:px-0">
            <div className="pt-[60px] pb-[10px]">
              <h2 className="text-[28px] leading-[38px] sm:text-[30px] sm:leading-[40px] font-normal">
                {langData.footer_title}
              </h2>
              <div className="mt-[30px] mb-[80px] text-base w-[90%] leading-[21px] font-medium md:mb-0 md:mt-[60px]">
                <p>{langData.footer_text}</p>
                <div className="flex mt-[30px]">
                  <img
                    className="mr-5 md:hidden"
                    src="/images/footTel.png"
                    alt="Tel Icon"
                  />
                  <img
                    className="mr-5 hidden md:block"
                    src="/images/footTelBlack.png"
                    alt="Tel Icon"
                  />
                  <a href="tel:+998712001545">+ 998 71 200 15 45</a>
                </div>
              </div>
              <a
                className="scan_btn flex items-center rounded-xl py-5 px-6 pr-4 text-base font-medium md:hidden"
                href="https://openuz.onelink.me/6W8i/payMerchant "
                target="_blank"
              >
                <img className="mr-2" src="/images/footIos.png" alt="" />
                <img className="mr-3" src="/images/footPlay.png" alt="" />
                <p>{langData.header_scan}</p>
              </a>

              <div className="flex justify-between w-3/4 mt-[80px] text-[#4E0F8A]">
                <Link
                  className="underline underline-offset-[8px]"
                  href={"/openCard/#store"}
                >
                  {langData.footer_link_1}
                </Link>
                <Link
                  className="underline underline-offset-[8px]"
                  href={"/openCard/#bank"}
                >
                  {langData.footer_link_2}
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute z-[0] -bottom-[50px] -left-1/3 md:-left-[20px] md:-bottom-[175px] w-[900px] md:hidden">
            <img className="" src="/images/footBack.png" alt="" />
          </div>
          <div className="absolute w-full h-full top-0 left-0 hidden md:flex -z-10">
            <img
              className="h-full w-full"
              src="/images/footBack2x.png"
              alt=""
            />
          </div>
        </div>
      </footer>
    </main>
  );
}
