import spotify_logo from "/src/assets/spotify.png";
import linkedin_logo from "/src/assets/linkedin.png";

import Link from "./Link";
import ImageLink from "./ImageLink";
import GithubIcon from "./svg/GithubIcon";

export default function LinkContainer() {
  return (
    <div className="mt-3 flex flex-row items-center justify-center gap-5">
      <Link href="https://github.com/kirisame-ame" children={<GithubIcon />} />
      <Link
        href="https://open.spotify.com/user/kirisame_ame"
        children={<ImageLink src={spotify_logo} alt="Spotify" />}
      />
      <Link
        href="https://www.linkedin.com/in/kirisame-ame/"
        children={<ImageLink src={linkedin_logo} alt="LinkedIn" />}
      />
    </div>
  );
}
