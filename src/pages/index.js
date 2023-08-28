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

  // const smPartners = partners.slice(0, 6);

  // const mdPartners = partners.slice(6, 9);

  // const lgPartners = partners.slice(9, 12);

  const [navbarIsActive, setNavbarActive] = useState(false);

  function handleClick(value) {
    setNavbarActive(value);
  }

  return (
    <div>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PN2KQX9"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>



      <div className="my_navbar">
        <div className="container flex justify-between items-center pb-[20px] pt-[20px] lg:pb-[30px] lg:pt-[30px]">
          <div className="lg:hidden cursor-pointer">
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

            <div className="lg:flex hidden items-center">
              <ul className="flex uppercase items-center justify-between text-[14px] leading-[17px] font-bold opacity-80">
                <li className="ml-[25px]">
                  <Link href="/">{langData.nav_link_1}</Link>
                </li>
                <li className="ml-[25px]">
                  <Link href="#web_app">{langData.nav_link_2}</Link>
                </li>
                <li className="ml-[25px]">
                  <Link href="#mobile_app">{langData.nav_link_3}</Link>
                </li>
                <li className="ml-[25px]">
                  <Link href="#about">{langData.nav_link_4}</Link>
                </li>
                <li className="ml-[25px]">
                  <Link href="#contacts">{langData.nav_link_5}</Link>
                </li>
              </ul>
            </div>

            <div
              className={
                !navbarIsActive
                  ? "my_navbar_links lg:hidden"
                  : "my_navbar_links my_navbar_links-active"
              }
            >
              <ul className="flex uppercase">
                <li className="ml-[10px] mt-4">
                  <Link href="/">{langData.nav_link_1}</Link>
                </li>
                <li className="ml-[10px] mt-4">
                  <Link href="#web_app">{langData.nav_link_2}</Link>
                </li>
                <li className="ml-[10px] mt-4">
                  <Link href="#mobile_app">{langData.nav_link_3}</Link>
                </li>
                <li className="ml-[10px] mt-4">
                  <Link href="#about">{langData.nav_link_4}</Link>
                </li>
                <li className="ml-[10px] mt-4">
                  <Link href="#contacts">{langData.nav_link_5}</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* LANGUAGES WITH TEXT */}
          <div className="hidden lg:flex">
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
          <div className="lg:hidden flex">
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


      <section className="pt-[100px] pb-[60px]">
        <div className="section_1">
          <img src="./images/section1.png" alt="" />
          <h2 className="mt-4 font-bold opacity-80 text-[21px] leading-[26px] sm:text-[24px] sm:leading-[30px] lg:text-[26px] lg:leading-[33px] xl:text-[30px] xl:leading-[37px]">
            {langData.header_title1}
          </h2>
          <p className="mt-6 font-medium opacity-60 text-[16px] leading-[25px] sm:text-[18px] sm:leading-[28px] xl:text-[25px] xl:leading-[40px]">
            {langData.header_text}
          </p>
        </div>
        <div id="web_app"></div>
      </section>

      <section className=" bg-[#F7F7F7] py-[60px]">
        <div className="section_1">
          <h2 className="font-bold opacity-80 text-[21px] leading-[26px] sm:text-[24px] sm:leading-[30px] lg:text-[26px] lg:leading-[33px] xl:text-[30px] xl:leading-[37px]">
            {langData.section_1_title_1}
          </h2>
          <p className="mt-6 font-medium opacity-60 text-[16px] leading-[25px] sm:text-[18px] sm:leading-[28px] xl:text-[25px] xl:leading-[40px]">
            {langData.section_1_text_1}
          </p>
          <h2 className="mt-6 font-bold opacity-80 text-[21px] leading-[26px] sm:text-[24px] sm:leading-[30px] lg:text-[26px] lg:leading-[33px] xl:text-[30px] xl:leading-[37px]">
            {langData.section_1_title_2}
          </h2>
          <p className="mt-6 font-medium opacity-60 text-[16px] leading-[25px] sm:text-[18px] sm:leading-[28px] xl:text-[25px] xl:leading-[40px]">
            {langData.section_1_text_2}
          </p>
          <h2 className="mt-6 font-bold opacity-80 text-[21px] leading-[26px] sm:text-[24px] sm:leading-[30px] lg:text-[26px] lg:leading-[33px] xl:text-[30px] xl:leading-[37px]">
            {langData.section_1_title_3}
          </h2>
          <p className="mt-6 font-medium opacity-60 text-[16px] leading-[25px] sm:text-[18px] sm:leading-[28px] xl:text-[25px] xl:leading-[40px]">
            {langData.section_1_text_3}
          </p>
          <img className="mt-5" src="./images/section2.png" alt="" />
        </div>
        <div id="mobile_app"></div>
      </section>

      <section className="section_1 py-[60px]"> 
        <div>
          <h2 className="font-bold opacity-80 text-[21px] leading-[26px] sm:text-[24px] sm:leading-[30px] lg:text-[26px] lg:leading-[33px] xl:text-[30px] xl:leading-[37px]">
            {langData.section_2_title}
          </h2>
          <p className="mt-6 font-medium opacity-60 text-[16px] leading-[25px] sm:text-[18px] sm:leading-[28px] xl:text-[25px] xl:leading-[40px]">
            {langData.section_2_text}
          </p>
          <img className="mt-8 sm:hidden" src="./images/section2mini.png" alt="" />
          <img className="mt-8 hidden sm:flex" src="./images/section3.png" alt="" />

          <div className="md:grid md:grid-cols-2 md:gap-10">
            <div className="mt-8">
              <div className="flex w-2/3 items-center mb-4">
                <img className="mr-3" src="./images/section_icon1.png" alt="" />
                <h4 className=" opacity-80 font-bold text-[18px] leading-[22px] sm:text-[20px] sm:leading-[25px] lg:text-[22px] lg:leading-[28px] xl:text-[25px] xl:leading-[31px]">{langData.section_2_item_1_title}</h4>
              </div>
              <p className="opacity-60 text-[16px] font-medium leading-[25px] sm:text-[18px] sm:leading-[28px] xl:text-[25px] xl:leading-[40px]">{langData.section_2_item_1_text}</p>
            </div>

            <div className="mt-8">
              <div className="flex w-2/3 items-center mb-4">
                <img className="mr-3" src="./images/section_icon2.png" alt="" />
                <h4 className=" opacity-80 font-bold text-[18px] leading-[22px] sm:text-[20px] sm:leading-[25px] lg:text-[22px] lg:leading-[28px] xl:text-[25px] xl:leading-[31px]">{langData.section_2_item_2_title}</h4>
              </div>
              <p className="opacity-60 text-[16px] font-medium leading-[25px] sm:text-[18px] sm:leading-[28px] xl:text-[25px] xl:leading-[40px]">{langData.section_2_item_2_text}</p>
            </div> 
            <div className="mt-8">
              <div className="flex w-2/3 items-center mb-4">
                <img className="mr-3" src="./images/section_icon3.png" alt="" />
                <h4 className=" opacity-80 font-bold text-[18px] leading-[22px] sm:text-[20px] sm:leading-[25px] lg:text-[22px] lg:leading-[28px] xl:text-[25px] xl:leading-[31px]">{langData.section_2_item_3_title}</h4>
              </div>
              <p className="opacity-60 text-[16px] font-medium leading-[25px] sm:text-[18px] sm:leading-[28px] xl:text-[25px] xl:leading-[40px]">{langData.section_2_item_3_text}</p>
            </div> 
            <div className="mt-8">
              <div className="flex w-2/3 items-center mb-4">
                <img className="mr-3" src="./images/section_icon4.png" alt="" />
                <h4 className=" opacity-80 font-bold text-[18px] leading-[22px] sm:text-[20px] sm:leading-[25px] lg:text-[22px] lg:leading-[28px] xl:text-[25px] xl:leading-[31px]">{langData.section_2_item_4_title}</h4>
              </div>
              <p className="opacity-60 text-[16px] font-medium leading-[25px] sm:text-[18px] sm:leading-[28px] xl:text-[25px] xl:leading-[40px]">{langData.section_2_item_4_text}</p>
            </div> 
          </div>
        </div>
        <div id="about"></div>
      </section>



      <section className="py-[60px] bg-[#F7F7F7]">
        <div className="section_1">
          <h2 className="font-bold opacity-80 text-[21px] leading-[26px] sm:text-[24px] sm:leading-[30px] lg:text-[26px] lg:leading-[33px] xl:text-[30px] xl:leading-[37px]">
            {langData.section_3_title}
          </h2>
          <p className="mt-6 font-medium opacity-60 text-[16px] leading-[25px] sm:text-[18px] sm:leading-[28px] xl:text-[25px] xl:leading-[40px]">
            {langData.section_3_text}
          </p>
        </div>
        <div id="contacts"></div>
      </section>

      <footer className="section_1 py-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h4 className="font-bold text-[21px] leading-7 sm:text-[24px] sm:leading-[30px] lg:text-[26px] lg:leading-[32px] xl:text-[30px] xl:leading-[37px]">{langData.footer_title}</h4>
            <div className="flex mt-6 xl:mt-10 font-medium text-[18px] leading-6 xl:text-[25px] xl:leading-[31px]">
              <img className="mr-3" src="/images/foot_1.png" alt="" />
              <p className="opacity-60">+ 998 (90)968 7881</p>
            </div>
            <div className="flex mt-3 text-[18px] font-medium leading-6 xl:text-[25px] xl:leading-[31px] xl:mt-5">
              <img className="mr-3" src="/images/foot_2.png" alt="" />
              <p className="opacity-60">hello@opentech.uz</p>
            </div>
            <div className="flex mt-3 text-[18px] font-medium leading-6 xl:text-[25px] xl:leading-[31px] xl:mt-5">
              <img className="mr-3" src="/images/foot_3.png" alt="" />
              <p className="opacity-60">{langData.footer_adress}</p>
            </div>
          </div>
          <div className="md:flex md:justify-end md:items-end">
            <div>
              <img className="mt-8" src="./images/itparkLogo 1.png" alt="" />
              <img className="mt-6" src="./images/oracleLogo 1.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
