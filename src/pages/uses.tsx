import type { NextPage } from "next";
import Head from "next/head";
import Header from "~/components/header";

const UsesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Uses | Dominic Ruggiero</title>
      </Head>
      <div className="drac-box drac-bg-black-secondary min-h-screen">
        <Header />
        <main className="m-3 max-w-6xl space-y-2.5 p-2">
          <h1 className="drac-heading drac-heading-2xl drac-text-yellow-pink">
            Uses
          </h1>
          <div className="md:grid md:grid-cols-2 md:gap-2">
            <div className="p-2 md:p-0">
              <h2 className="drac-heading drac-heading-xl drac-text-cyan-green">
                Hardware
              </h2>
              <ul className="drac-list drac-list-unordered drac-list-purple drac-text-white">
                <li>
                  Laptop:{" "}
                  <a
                    href="https://specspro.net/laptops/8285-sony-vaio-b-series-vpc-b11pgx-b/"
                    className="drac-anchor drac-text drac-text-white drac-text-purple--hover"
                  >
                    Sony Vaio VPC-B11PGX/B
                  </a>{" "}
                  (~2010)
                </li>
                <li>
                  Tablet:{" "}
                  <a
                    href="https://support.apple.com/kb/SP849?locale=en_US"
                    className="drac-anchor drac-text drac-text-white drac-text-purple--hover"
                  >
                    iPad 9th Gen
                  </a>{" "}
                  (2021)
                </li>
                <li>
                  Mouse:{" "}
                  <a
                    href="https://www.logitech.com/en-us/products/mice/mx-anywhere-3.910-005833.910-005833.html"
                    className="drac-anchor drac-text drac-text-white drac-text-purple--hover"
                  >
                    Logitech MX Anywhere 3
                  </a>{" "}
                  (2020)
                </li>
              </ul>
            </div>
            <div className="p-2 md:p-0">
              <h2 className="drac-heading drac-heading-xl drac-text-cyan-green">
                Software
              </h2>
              <ul className="drac-list drac-list-unordered drac-list-purple drac-text-white">
                <li>
                  OS:{" "}
                  <a
                    href="https://endeavouros.com/"
                    className="drac-anchor drac-text drac-text-white drac-text-purple--hover"
                  >
                    EndeavourOS Linux
                  </a>
                </li>
                <li>
                  DE:{" "}
                  <a
                    href="https://github.com/BuddiesOfBudgie/budgie-desktop"
                    className="drac-anchor drac-text drac-text-white drac-text-purple--hover"
                  >
                    Budgie
                  </a>
                </li>
                <li>
                  Browser:{" "}
                  <a
                    href="https://mozilla.org/firefox/"
                    className="drac-anchor drac-text drac-text-white drac-text-purple--hover"
                  >
                    Firefox
                  </a>
                </li>
                <li>
                  Colorscheme? :{" "}
                  <a
                    href="https://draculatheme.com"
                    className="drac-anchor drac-text drac-text-white drac-text-purple--hover"
                  >
                    Dracula
                  </a>
                </li>
                <li>
                  Preferred (programming) Language:{" "}
                  <a
                    href="https://typescriptlang.org/"
                    className="drac-anchor drac-text drac-text-white drac-text-purple--hover"
                  >
                    TypeScript
                  </a>
                </li>
                <li>
                  Editor:{" "}
                  <a
                    href="https://code.visualstudio.com/"
                    className="drac-anchor drac-text drac-text-white drac-text-purple--hover"
                  >
                    VSCode
                  </a>
                  , like everyone else. Except Vim users. And Emacs users. And
                  Jetbrains-stuff users. And Atom users. And Sublime Text users.
                  And...
                </li>
              </ul>
            </div>
            <div className="p-2 md:col-span-2 md:p-0">
              <h2 className="drac-heading drac-heading-xl drac-text-cyan-green">
                Other tools
              </h2>
              <ul className="drac-list drac-list-unordered drac-list-purple drac-text-white">
                <li>
                  <a
                    href="https://www.yubico.com/product/yubikey-5-nfc/"
                    className="drac-anchor drac-text drac-text-white drac-text-purple--hover"
                  >
                    Yubikey 5 NFC
                  </a>{" "}
                  - physical 2 factor authenticator. I have 2 of them.
                </li>
                <li>
                  Not much. My setup is pretty clean, just what I need and
                  nothing more. I need all the performance I can get out of this
                  laptop 😅.
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UsesPage;
