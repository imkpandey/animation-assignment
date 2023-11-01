import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const TextAnimation = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [focusBackground, setFocusBackground] = useState("/focus.png");
  const [buttonBoxIndex, setButtonBoxIndex] = useState(-1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const words = gsap.utils.toArray(".word");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.to(
      words[0],
      {
        x: () => -window.scrollY / 0.35,
        y: () => window.scrollY / 0.1,
        duration: 2,
      },
      "<"
    ); // Custom displacement for logo

    tl.to(
      words[1],
      {
        x: () => -window.scrollY / 0.35,
        y: () => window.scrollY / 0.1,
        color: "white",
        letterSpacing: "-5px",
        duration: 2,
      },
      "<"
    ); // Custom displacement and color change for Lets

    tl.to(
      words[2],
      {
        x: () => window.scrollY / 0.75,
        y: () => window.scrollY / 0.1,
        opacity: 0.2,
        color: "white",
        letterSpacing: "-5px",
        zIndex: -1,
        duration: 2,
      },
      "<"
    ); // Custom displacement and opacity change for Team

    tl.to(
      words[3],
      {
        x: () => window.scrollY / 0.01,
        y: () => window.scrollY / 2,
        duration: 2,
      },
      "<"
    ); // Custom displacement for Up

    tl.to(
      ".hr",
      {
        borderColor: "transparent",
        duration: 2,
      },
      "<"
    );

    tl.to(
      ".header",
      {
        visibility: "visible",
        opacity: 1,
        duration: 2,
      },
      "<"
    );

    tl.from(
      ".button-box",
      {
        y: 400,
        x: -200,
        opacity: 0,
        duration: 2,
      },
      "<"
    );

    tl.to(
      ".button-box",
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 2,
      },
      "<"
    );

    tl.from(
      ".button-text",
      {
        opacity: 0,
        duration: 1,
      },
      "<"
    );

    tl.to(
      ".button-text",
      {
        opacity: 1,
        duration: 1,
      },
      "<"
    );

    tl.from(
      ".focus",
      {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      "<"
    );

    tl.to(
      ".focus",
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
      },
      "<"
    );

    const buttonBoxes = document.querySelectorAll(".button-box");
    const container = document.querySelector(".container");

    buttonBoxes.forEach((box, index) => {
      box.addEventListener("mouseenter", () => {
        setIsHovering(true);
        setButtonBoxIndex(index);
        setFocusBackground("/focus-active.png");
        container.classList.add("blur-area");
      });

      box.addEventListener("mouseleave", () => {
        setIsHovering(false);
        setButtonBoxIndex(-1);
        setFocusBackground("/focus.png");
        container.classList.remove("blur-area");
      });
    });
  }, []);

  const focusStyle = isHovering
    ? buttonBoxIndex === 1
      ? "left-[300px]"
      : {}
    : {};

  return (
    <div className="container relative -mt-6 h-[105vh] mx-auto flex justify-center items-center w-full overflow-hidden">
      <img
        src={focusBackground}
        alt="focus"
        className={`focus fixed w-full -mt-6 ${focusStyle}`}
      />
      <div className="hr w-fit py-8 flex border-b-2 relative">
        <div className="blur-active flex flex-col mt-[-65px] gap-4 blur-active">
          <img src="/logo.png" alt="logo" className="word w-40 mx-4" />
          <h1 className="word text-9xl mx-4 font-medium text-[#DEFC01] tracking-[-15px] uppercase">
            Let&apos;<span className="text-white">s</span>
          </h1>
        </div>
        <div className="fixed flex justify-between items-center gap-28 py-8 ml-96 -mt-2 invisible">
          <div className="blur-active header flex flex-col justify-center items-center gap-6 opacity-0 invisible">
            <h1 className="text-2xl text-white font-medium">Schedule Call</h1>
            <div className="button-box py-2 w-48 bg-[#dcf901] hover:bg-white rounded-3xl cursor-pointer">
              <h1 className="button-text text-2xl text-center text-black font-semibold tracking-tighter">
                Call Us
              </h1>
            </div>
          </div>
          <div className="blur-active header flex flex-col justify-center items-center gap-6 opacity-0 invisible">
            <h1 className="text-2xl text-white font-medium">Contact Us</h1>
            <div className="button-box py-2 w-48 bg-[#dcf901] hover:bg-white rounded-3xl cursor-pointer">
              <h1 className="button-text text-2xl text-center text-black font-semibold tracking-tighterr">
                Contact
              </h1>
            </div>
          </div>
        </div>
        <h1 className="word text-9xl mx-4 font-medium text-[#DEFC01] tracking-[-15px] uppercase">
          Team
        </h1>
        <h1 className="word text-9xl mx-4 font-medium text-[#DEFC01] tracking-[-15px] uppercase">
          Up
        </h1>
      </div>
    </div>
  );
};

export default TextAnimation;
