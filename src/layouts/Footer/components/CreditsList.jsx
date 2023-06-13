import React, { useMemo } from "react";
import clsx from "clsx";
import { Credit, VerticalLine } from "./index";
import { Link, WrapNodeForRevealAnim } from "@components";
import { footerData } from "@data";

const textUnderlineStyle = clsx(
  "underline underline-offset-2",
  "sm:decoration-[0.7px] decoration-[0.5px]"
);

const DevelopmentCredits = () => {
  return useMemo(
    () =>
      footerData.developmentCredits.map(({ text, tool }) => (
        <WrapNodeForRevealAnim key={text}>
          <div id="text" className="inline-block">
            <span>{text} </span>

            {Array.isArray(tool) ? (
              // if tool has multiple elements
              tool.map(({ name, href }, index) => (
                <React.Fragment key={name}>
                  <Link
                    href={href}
                    target="_blank"
                    className={textUnderlineStyle}
                  >
                    {name}
                  </Link>
                  {index !== tool.length - 1 && <span> + </span>}
                </React.Fragment>
              ))
            ) : (
              // if only one tool element
              <Link
                href={tool.href}
                target="_blank"
                className={textUnderlineStyle}
              >
                {tool.name}
              </Link>
            )}
          </div>
        </WrapNodeForRevealAnim>
      )),
    [footerData.developmentCredits]
  );
};

const FontsCredits = () => {
  return useMemo(
    () =>
      footerData.fontsCredits.map(({ name, href }) => (
        <WrapNodeForRevealAnim key={name}>
          <div id="text" className="inline-block">
            <Link href={href} target="_blank" style={{ fontFamily: name }}>
              {name}
            </Link>
          </div>
        </WrapNodeForRevealAnim>
      )),
    [footerData.fontsCredits]
  );
};

const AssetsCredits = () => {
  return useMemo(
    () =>
      footerData.assetsCredits.map(({ name, by, provider, href }) => (
        <WrapNodeForRevealAnim key={name}>
          <div id="text" key={name} className="inline-block">
            <span>{name} by </span>
            <Link href={href} target="_blank" className={textUnderlineStyle}>
              {!provider || provider.trim().length === 0 ? (
                // if provider is not given
                by
              ) : (
                // if provider is given
                <>
                  <span className="italic">{by} </span>
                  <span>({provider})</span>
                </>
              )}
            </Link>
          </div>
        </WrapNodeForRevealAnim>
      )),
    [footerData.assetsCredits]
  );
};

const CreditsList = ({ id, className }) => (
  <div
    id={id}
    className={clsx(
      className,
      "w-full",
      "xs:text-[12px] text-[10px]",
      "flex xs:flex-row flex-col justify-center items-start",
      "md:gap-8 xs:gap-5 gap-8"
    )}
  >
    {/* Development */}
    <Credit title="Development">
      <DevelopmentCredits />
    </Credit>

    <VerticalLine />

    {/* Fonts used */}
    <Credit title="Fonts">
      <FontsCredits />
    </Credit>

    <VerticalLine />

    {/* Assets used */}
    <Credit title="Assets">
      <AssetsCredits />
    </Credit>
  </div>
);

export default React.memo(CreditsList);
