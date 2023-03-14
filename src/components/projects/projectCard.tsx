/* eslint-disable @typescript-eslint/restrict-template-expressions */

const ProjectCard: React.FC<{
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  color?: draculaBackground;
  date?: string;
}> = (props) => {
  return (
    /*TODO: Idea for after Dracula styles are moved separately:
    On hover border and text should be the color the background used to be */
    <a href={props.url} target="_blank" rel="noreferrer">
      <div
        className={`drac-bg-${
          props.color ?? "black-light"
        } rounded-md p-5 transition-all hover:bg-transparent hover:shadow-xl`}
      >
        <h2 className={`drac-heading drac-heading-xl`}>{props.title}</h2>
        <p className={`drac-text drac-text-base`}>{props.description}</p>
        <p className={`drac-text drac-text-sm`}>{props.date}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
