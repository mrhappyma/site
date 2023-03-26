const AnalyticsEmbed: React.FC = () => {
  return (
    <>
      <iframe
        plausible-embed
        src="https://analytics.userexe.me/share/userexe.me?auth=tNKtqFwLgtNnLU3T1qGhz&embed=true&theme=system&background=transparent&period=realtime"
        scrolling="no"
        frameBorder="0"
        loading="lazy"
        style={{ width: 1, minWidth: "100%", height: 600 }}
      />
      <script async src="https://analytics.userexe.me/js/embed.host.js" />
    </>
  );
};

export default AnalyticsEmbed;
