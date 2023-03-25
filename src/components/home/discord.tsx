import { useLanyardWS } from "use-lanyard";

const DiscordPresence: React.FC<{ id: `${bigint}` }> = ({ id }) => {
  const lanyard = useLanyardWS(id);
  console.debug(lanyard);

  return (
    <>
      {lanyard ? (
        <div
          className={
            (lanyard.discord_status == "online"
              ? "border-[#57F287] hover:bg-[#57F287]"
              : lanyard.discord_status == "idle"
              ? "border-[#FEE75C] hover:bg-[#FEE75C]"
              : lanyard.discord_status == "dnd"
              ? "border-[#ED4245] hover:bg-[#ED4245]"
              : "border-[#7289DA hover:bg-[#7289DA]") +
            " rounded-md border-2 bg-opacity-80 p-2 transition-all duration-200 ease-in-out"
          }
        >
          <a
            href={"https://discord.com/users/" + id}
            target="_blank"
            rel="noreferrer"
          >
            <p>{lanyard.discord_status} on Discord</p>
            {lanyard.activities[0] && (
              <>
                {lanyard.activities[0].type == 0 && (
                  <>
                    <p>Playing {lanyard.activities[0].name}</p>
                    <p>{lanyard.activities[0].state}</p>
                    <p>{lanyard.activities[0].details}</p>
                  </>
                )}
                {lanyard.activities[0].type == 1 && (
                  <p>Streaming {lanyard.activities[0].name}</p>
                )}
                {lanyard.activities[0].type == 2 && (
                  <p>
                    Listening to {lanyard.activities[0].details} by{" "}
                    {lanyard.activities[0].state}
                  </p>
                )}
                {lanyard.activities[0].type == 3 && (
                  <p>Watching {lanyard.activities[0].state}</p>
                )}
                {lanyard.activities[0].type == 4 && (
                  <p>
                    {lanyard.activities[0].emoji?.name}{" "}
                    {lanyard.activities[0].state}
                  </p>
                )}
                {lanyard.activities[0].type == 5 && (
                  <p>Competing in {lanyard.activities[0].name}</p>
                )}
              </>
            )}
          </a>
        </div>
      ) : (
        <p>Not connected to Layard WS...</p>
      )}
    </>
  );
};

export default DiscordPresence;
