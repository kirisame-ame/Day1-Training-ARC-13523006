import "./App.css";
import id_flag from "/src/assets/id.png";
import us_flag from "/src/assets/us.png";
import jp_flag from "/src/assets/jp.png";
import general_pp from "/src/assets/general_pp.jpg";
import kirisame_pp from "/src/assets/image_logo.png";

import ProfilePicContainer from "./components/ProfilePicContainer";
import FlagContainer from "./components/FlagContainer";
import LinkContainer from "./components/LinkContainer";
import Link from "./components/Link";
import ArrowDown from "./components/svg/ArrowDown";

import Intro from "./sections/Intro";

function App() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-x-bg text-center text-x-text">
      <div className="flex h-screen flex-col items-center justify-center md:w-3xl">
        <ProfilePicContainer paths={[general_pp, kirisame_pp]} />
        <p className="text-sm font-medium md:text-4xl">
          William Andrian / Kirisame
        </p>
        <p className="text-xs font-light md:text-2xl">
          Data Scientist | Web Developer |{" "}
          <Link href="https://lit.link/kirisameame" children="Music Producer" />
        </p>
        <div className="my-3 bg-x-text p-3">
          <FlagContainer paths={[id_flag, us_flag, jp_flag]} />
          <LinkContainer />
        </div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 translate-y-1/2 animate-x-fade-in-down">
          <ArrowDown />
        </div>
      </div>
      <Intro />
    </div>
  );
}

export default App;
