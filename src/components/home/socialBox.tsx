import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialBox: React.FC<{ name: string; icon: IconProp; url: string }> = (
  props
) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={props.url}
      className="m-1 flex items-center justify-center rounded-md bg-yellow-400 p-2 transition-all hover:bg-yellow-500"
    >
      <FontAwesomeIcon icon={props.icon} size="2x" className="p-1" />
      {props.name}
    </a>
  );
};

export default SocialBox;
