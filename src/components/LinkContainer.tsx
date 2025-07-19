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
        href="https://open.spotify.com/artist/1dJ95RetZNmck5ab3IdWOL?si=s9ynh-UGTVC9NxSR-FRsiw"
        children={<ImageLink src={spotify_logo} alt="Spotify" />}
      />
      <Link
        href="https://www.linkedin.com/in/william-andrian/"
        children={<ImageLink src={linkedin_logo} alt="LinkedIn" />}
      />
    </div>
  );
}
