import { useEffect, useState } from "react";
import { data } from "./data";

export default function Home() {

  const [lang, setLang] = useState("uz");
  const [langData, setLangData] = useState(data["uz"]);

  useEffect(() => {
    let identifyLang = localStorage.getItem("lang");
    console.log("identify Language is :");
    console.log(identifyLang)
    setLang(identifyLang)

    setLangData(data[lang])

  }, []);

  useEffect(() => {

    setLangData(data[lang])

  }, [lang]);

  const handleLangClick = (name) => {
    localStorage.setItem("lang", name);
    setLang(name);
  };

  return (
    <main>
      <nav className="container flex justify-between items-center pt-[30px] pb-5">
        <a href="#">
          <img src="/images/open-card-logo.png" alt="Logo" />
        </a>
        <div className="hidden md:flex">
          <div className={lang == "ru" ? "flex items-center cursor-pointer mr-8" : "flex items-center cursor-pointer mr-8 opacity-30"} onClick={() => {setLang("ru"); handleLangClick("ru")}}>
            <img src="/images/Flag.png" alt="RuFlag" />
            <p className="ml-2">Русский</p>
          </div>
          <div className={lang == "uz" ? "flex items-center cursor-pointer" : "flex items-center cursor-pointer opacity-30"}  onClick={() => {setLang("uz"); handleLangClick("uz")}}>
            <img src="/images/bayroq.png" alt="UzFlag" />
            <p className="ml-2">O'zbek</p>
          </div>
        </div>
        <div className="md:hidden flex">
          <img className={lang != "uz" ? "hidden" : "flex"} onClick={() => setLang("ru")} src="/images/Flag.png" alt="RuFlag" />
          <img className={lang != "ru" ? "hidden" : "flex"} onClick={() => setLang("uz")} src="/images/bayroq.png" alt="UzFlag" />
        </div>
      </nav>

      <header className="md:container xl:container">
        <div className="bg-main_violet text-white px-[10px] py-10 rounded-xl sm:px-[16px] sm:pt-[50px] md:pt-[40px] md:px-[20px] lg:pt-[60px] lg:px-[30px] relative">
          <div className="relative md:w-full">
            <div className="sm:mb-[390px] md:mb-[60px] lg:mb-[100px]">
              <div className="text-[25px] lg:w-1/2 uppercase font-light leading-[34px] tracking-[0.035em] sm:text-[32px] sm:leading-[43px]">
                <h3>{langData.header_title1}</h3>
                <h3 className="lg:ml-auto lg:mr-0 lg:w-fit md:mt-[10px]">{langData.header_title2}</h3>
              </div>
              <p className="mt-5 md:mt-[30px] md:w-[40%] opacity-80 font-light leading-[22px]">{langData.header_text}</p>
            </div>
            {/* <div className="mt-10 mb-20 sm:absolute top-[190px] left-0 md:w-[351px] md:right-0 md:top-[90px] "> */}
            <img className="mt-10 mb-20 sm:absolute top-[190px] left-0 md:w-[351px] lg:w-[416px] md:left-auto md:right-0 md:top-[30px] lg:top-1" src="/images/mainCard.png" alt="" />
            {/* </div> */}
            <a className="scan_btn flex items-center rounded-xl py-5 px-6 pr-4 text-base font-light md:w-fit md:py-2" href="#">
              <img className="mr-2 md:hidden" src="/images/footIos.png" alt="" />
              <img className="mr-3 md:hidden" src="/images/footPlay.png" alt="" />
              <p>{langData.header_scan}</p>
              <img className="md:ml-6 hidden md:flex" src="/images/mainScaner.png" alt="" />
            </a>
          </div>
          <div className="absolute bottom-0">
            <img src="/images/mainCardBack.png" alt="" />
          </div>
        </div>
      </header>

      <section className="container">
        <h2 className="text-[28px] mb-[35px] sm:mb-10  mt-[70px] sm:mt-[90px]  leading-[38px] sm:text-[32px] sm:leading-[43px] lg:mb-[60px]">{langData.section_open_card_header}</h2>
        <div className=" grid grid-cols-2 gap-4 sm:gap-[10px] md:gap-5 lg:grid-cols-4">
          <div className="py-[34px] px-3 text-center rounded-xl my_card">
            <p className="text-main_violet text-[20px] font-light leading-6 mb-4 md:text-[28px] sm:leading-[36px] md:leading-[39px]"><span className="text-[25px] leading-[30px] mr-[5px] sm:text-[24px] md:text-[32px]">12</span>{langData.section_open_card_1_title}</p>
            <p className="text-[14px] font-normal leading-[18px] md:text-base">{langData.section_open_card_1_body}</p>
          </div>
          <div className="py-[30px] px-4 text-center rounded-xl my_card">
            <img className="mx-auto mb-4 w-[30px] sm:w-[38px]" src="/images/timer.png" alt="timer" />
            <p className="text-[14px] font-normal leading-[18px] md:text-base">{langData.section_open_card_2_body}</p>
          </div>
          <div className="py-[30px] w-[100%] mx-auto text-center rounded-xl my_card">
            <p className="text-main_violet mb-4"><span className="text-[23px] leading-[28px] font-light sm:text-[30px] sm:leading-[36px] md:leading-[39px]">50 000 000</span></p>
            <p className="text-[14px] font-normal leading-[18px] md:text-base">{langData.section_open_card_3_body}</p>
          </div>
          <div className="py-[30px] w-[100%] mx-auto text-center rounded-xl my_card">
            <img className="mx-auto mb-4 w-[30px] sm:w-[38px]" src="/images/hand.png" alt="timer" />
            <p className="text-[14px] font-normal leading-[18px] md:text-base">{langData.section_open_card_4_body}</p>
          </div>
        </div>
      </section>


      <section className="container">
        <h2 className="text-[28px] mb-[35px] sm:mb-10  mt-[70px] sm:mt-[90px]  leading-[38px] sm:text-[32px] sm:leading-[43px] lg:mb-[60px]">{langData.section_card_title}</h2>
        <div> 
          <div style={{backgroundImage:"url(/images/card1BackFigma.png)"}} className="my_card_back_styles w-full md:w-[calc(50%_-_10px)]  rounded-xl h-[645px] pt-5 px-[10px] sm:px-5 lg:pt-[30px] xl:px-[30px] mb-2.5 md:mb-5 md:mr-5 md:float-left">
            <div className="">
              <h2 className="text-[23px] leading-[31px] sm:text-[30px] sm:leading-[40px] lg:text-[32px] lg:leading-[43px]">{langData.section_card_1_title}</h2>
              <p className="text-base leading-[21px] font-medium mt-5 lg:mt-[30px]">{langData.section_card_1_text}</p>
            </div>
          </div>
          <div className="relative w-full md:w-[calc(50%_-_10px)] bg-card_yellow rounded-xl h-[394px] pt-5 px-[10px] sm:px-5 lg:pt-[30px] xl:px-[30px] overflow-hidden mb-2.5 md:mb-5 md:float-right">
            <div className="">
              <h2 className="text-[23px] leading-[31px] sm:text-[30px] sm:leading-[40px] lg:text-[32px] lg:leading-[43px]">{langData.section_card_2_title}</h2>
              <p className="text-base leading-[21px] font-medium mt-5 md:w-[90%]">{langData.section_card_2_text}</p>
            </div>
            <div className="absolute -bottom-[130px] md:-bottom-[110px] lg:-right-10">
              <img className="" src="/images/card2Img.png" alt="" />
            </div>
          </div>
          <div style={{backgroundImage:"url(/images/card3BackFigma.png)"}} className="my_card3_back_styles w-full md:w-[calc(50%_-_10px)] rounded-xl h-[625px] pt-5 px-[10px] sm:px-5 lg:pt-[30px] xl:px-[30px] mb-2.5 md:mb-5 md:float-right">
            <div className="">
              <h2 className="text-[23px] leading-[31px] sm:text-[30px] sm:leading-[40px] lg:text-[32px] lg:leading-[43px]">{langData.section_card_3_title}</h2>
              <p className="text-base leading-[21px] font-medium mt-5">{langData.section_card_3_text}</p>
            </div>
          </div>
          <div style={{backgroundImage:"url(/images/card4BackFigma.png)"}} className="my_card4_back_styles w-full md:w-[calc(50%_-_10px)] rounded-xl h-[693px] md:h-[789px] pt-5 px-[10px] sm:px-5 lg:pt-[30px] xl:px-[30px] mb-2.5 md:float-left md:mb-5">
            <div className="">
              <h2 className="text-[23px] leading-[31px] sm:text-[30px] sm:leading-[40px] lg:text-[32px] lg:leading-[43px]">{langData.section_card_4_title}</h2>
              <p className="text-base leading-[21px] font-medium mt-5">{langData.section_card_4_text}</p>
            </div>
          </div>
          <div style={{backgroundImage:"url(/images/card5BackFigma.png)"}} className="my_card5_back_styles w-full md:w-[calc(50%_-_10px)] rounded-xl h-[395px] pt-5 px-[10px] sm:px-5 lg:pt-[30px] xl:px-[30px] mb-2.5 md:mb-5 md:float-right">
            <div className="">
              <h2 className="text-[23px] leading-[31px] sm:text-[30px] sm:leading-[40px] lg:text-[32px] lg:leading-[43px]">{langData.section_card_5_title}</h2>
              <p className="text-base leading-[21px] font-medium mt-5">{langData.section_card_5_text}</p>
            </div>
          </div>
        </div>
        <div className="bg-card_violet w-full rounded-xl h-[394px] md:h-[382px] pt-5 px-[10px] sm:px-5 lg:pt-[30px] xl:px-[30px] overflow-hidden md:flex md:flex-row-reverse">
            <div className="md:w-1/2">
              <h2 className="text-[23px] leading-[31px] sm:text-[30px] sm:leading-[40px] lg:text-[32px] lg:leading-[43px]">{langData.section_card_2_title}</h2>
              <p className="text-base leading-[21px] font-medium mt-5">{langData.section_card_2_text}</p>
            </div>
            <div className="mt-8 md:w-1/2 md:mt-0">
              <img className="h-full" src="/images/card6Img.png" alt="" />
            </div>
          </div>
      </section>

      

      {/* MAP SECTION */}
      <section className="container md:relative">
        <h2 className="text-[28px] mb-[35px]  mt-[70px] sm:mt-[90px]  leading-[38px] sm:text-[32px] sm:leading-[43px] md:mb-20 lg:mb-[60px]">{langData.section_map_title}</h2>
        <img className="mb-9 mt-1 sm:mb-11" src="/images/map.png" alt="Uzb Map" />
        <div className="text-base md:absolute md:top-28 left-[50%]">
          <div className="flex items-center mb-5">
            <span className="w-5 block h-5 bg-main_violet rounded mr-4"></span>
            <p className="font-medium leading-[20px]">{langData.section_map_text1}</p>
          </div>
          <div className="flex items-center">
            <span className="w-5 block h-5 bg-check_gray rounded mr-4"></span>
            <p>{langData.section_map_text2}</p>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="container">
        <h2 className="text-[28px] mb-[35px] sm:mb-10  mt-[70px] sm:mt-[90px]  leading-[38px] sm:text-[32px] sm:leading-[43px] lg:mb-[60px]">{langData.section_partners_title}</h2>
        <div className="w-full grid grid-cols-2 gap-[10px] md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          <div className="my_card rounded-xl w-full flex h-[130px] ">
            <img className=" mx-auto my-auto w-[130px] sm:w-[150px]" src="./images/partners1.png" alt="" />
          </div>
          <div className="my_card rounded-xl w-full flex h-[130px]">
            <img className=" mx-auto my-auto w-[130px]" src="./images/partners2.png" alt="" />
          </div>
          <div className="my_card rounded-xl w-full flex h-[130px]">
            <img className=" mx-auto my-auto w-[130px]" src="./images/partners3.png" alt="" />
          </div>
          <div className="my_card rounded-xl w-full flex h-[130px]">
            <img className=" mx-auto my-auto w-[130px]" src="./images/partners4.png" alt="" />
          </div>
          <div className="my_card rounded-xl w-full flex h-[130px]">
            <img className=" mx-auto my-auto w-[130px]" src="./images/partners5.png" alt="" />
          </div>

        </div>
      </section>

      <footer className="container relative my_footer bg-main_violet md:bg-inherit text-white md:text-black py-[60px] md:py-[26px] rounded-xl rounded-b-none mt-[70px] overflow-x-hidden">
        <div className="md:w-1/2 ml-auto mr-0">
          <h2 className="text-[28px] leading-[38px] sm:text-[30px] sm:leading-[40px] font-normal">{langData.footer_title}</h2>
          <div className="mt-[30px] mb-[80px] text-base leading-[21px] font-medium">
            <p>{langData.footer_text}</p>
            <div className="flex mt-[30px]">
              <img className="mr-5 md:hidden" src="/images/footTel.png" alt="Tel Icon" />
              <img className="mr-5 hidden md:block" src="/images/footTelBlack.png" alt="Tel Icon" />
              <p>+ 998  00 000 00 00</p>
            </div>
          </div>
          <a className="scan_btn flex items-center rounded-xl py-5 px-6 pr-4 text-base font-medium md:hidden" href="#">
            <img className="mr-2" src="/images/footIos.png" alt="" />
            <img className="mr-3" src="/images/footPlay.png" alt="" />
            <p>{langData.header_scan}</p>
          </a>
        </div>
        <div className="absolute -left-[100px] w-[520px] top-0 flex md:hidden">
          <img className="" src="/images/footBack.png" alt="" />
        </div>
        <div className="absolute w-full top-0 left-0 hidden md:flex -z-10 ">
          <img className="h-full" src="/images/footGirl.png" alt="" />
        </div>
      </footer>

    </main>
  )
}
