import { Tabs } from "dracula-ui";
import Link from "next/link";
import { useRouter } from "next/router";

const pages: pageInfo[] = [
  {
    slug: "/",
    title: "Home",
    display: true,
  },
  {
    slug: "/posts",
    title: "Blog",
    display: true,
  },
  {
    slug: "/projects",
    title: "Projects",
    display: true,
  },
  {
    slug: "/uses",
    title: "Uses",
    display: true,
  },
];

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <div className="drac-box drac-bg-black p-2">
      <Tabs>
        {pages.map((page, index) => {
          const active = page.slug === router.pathname;

          if (!page.display && !active) return <></>;
          return (
            <li
              className={`drac-tab ${active ? "drac-tab-active" : ""}`}
              key={index}
            >
              <Link className="drac-tab-link drac-text" href={page.slug}>
                {page.title}
              </Link>
            </li>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Header;
