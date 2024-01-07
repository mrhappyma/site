import { type Data } from "use-lanyard";
import Card from "./projectCard";

const contactCardCollection: React.FC<{ lanyard: Data | undefined }> = ({
  lanyard,
}) => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-2">
      <div className="py-2 md:py-0">
        <Card
          title="Matrix"
          description="@druge:beeper.com"
          url="https://matrix.to/#/@druge:beeper.com"
          color="animated"
        />
      </div>
      <div className="py-2 md:py-0">
        <Card
          title="Discord"
          description={`${lanyard?.discord_user.username ?? "loading"}${
            lanyard?.discord_user.discriminator &&
            lanyard.discord_user.discriminator != "0"
              ? "#" + lanyard.discord_user.discriminator
              : ""
          }`}
          url={`https://discord.com/users/${lanyard?.discord_user.id ?? "0"}`}
          /* TODO: Add Discord avatar */
          color="pink-purple"
        />
      </div>
      <div className="py-2 md:py-0">
        <Card
          title="Twitter"
          description={`@user____exe`}
          url="https://twitter.com/user____exe"
          color="purple-cyan"
        />
      </div>
      <div className="py-2 md:py-0">
        <Card
          title="Email"
          description="dominic@userexe.me"
          url="mailto:dominic@userexe.me"
          /* TODO: Copy to clipboard instead of opening mail client */
          color="cyan-green"
        />
      </div>
    </div>
  );
};

export default contactCardCollection;
