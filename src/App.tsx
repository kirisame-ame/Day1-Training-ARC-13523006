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

function App() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-x-bg text-center">
      <div className="flex max-w-3xl flex-col">
        <ProfilePicContainer paths={[general_pp, kirisame_pp]} />
        <h1>William Andrian / Kirisame</h1>
        <p>
          Data Scientist | Web Developer |{" "}
          <Link href="https://lit.link/kirisameame" children="Music Producer" />
        </p>
        <FlagContainer paths={[id_flag, us_flag, jp_flag]} />
        <LinkContainer />
      </div>
    </div>
  );
}

export default App;
