const Card: React.FC<{
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  color?: draculaBackground;
  date?: string;
}> = (props) => {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <div
        className={`drac-bg-${
          props.color ?? "black-light"
        } rounded-md p-5 transition-all hover:scale-110 hover:shadow-2xl`}
      >
        <h2 className={`drac-heading drac-heading-xl`}>{props.title}</h2>
        <p className={`drac-text drac-text-base`}>{props.description}</p>
        <p className={`drac-text drac-text-sm`}>{props.date}</p>
      </div>
    </a>
  );
};

export default Card;
