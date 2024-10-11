import React from "react";

interface TypographyProps {
  children: string;
  type: string;
  color?: string;
  customStyles?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  type,
  color = "primary-900",
  customStyles = "",
}) => {
  let typographyStyles;
  let typographyTag;

  switch (type) {
    case "title1":
      typographyStyles = `text-6xl font-bold text-${color} mb-4 dark:text-${color}-30 ${customStyles}`;
      typographyTag = <h1 className={typographyStyles}>{children}</h1>;
      break;
    case "title2":
      typographyStyles = `text-5xl font-semibold text-${color} mb-3 dark:text-${color}-30  ${customStyles}`;
      typographyTag = <h2 className={typographyStyles}>{children}</h2>;
      break;
    case "title3":
      typographyStyles = `text-4xl font-semibold text-${color} mb-3 dark:text-${color}-30  ${customStyles}`;
      typographyTag = <h3 className={typographyStyles}>{children}</h3>;
      break;
    case "title4":
      typographyStyles = `text-3xl font-medium text-${color} mb-2 dark:text-${color}-30  ${customStyles}`;
      typographyTag = <h4 className={typographyStyles}>{children}</h4>;
      break;
    case "title5":
      typographyStyles = `text-2xl font-medium text-${color} mb-2 dark:text-${color}-30  ${customStyles}`;
      typographyTag = <h5 className={typographyStyles}>{children}</h5>;
      break;
    case "title6":
      typographyStyles = `text-xl font-medium text-${color} mb-1 dark:text-${color}-30  ${customStyles}`;
      typographyTag = <h6 className={typographyStyles}>{children}</h6>;
      break;
    case "subtitle1":
      typographyStyles = `text-4xl font-semibold text-${color} mb-3 dark:text-${color}-30  ${customStyles}`;
      typographyTag = <h3 className={typographyStyles}>{children}</h3>;
      break;
    case "subtitle2":
      typographyStyles = `text-3xl font-medium text-${color} mb-2 dark:text-${color}-30  ${customStyles}`;
      typographyTag = <h4 className={typographyStyles}>{children}</h4>;
      break;
    case "subtitle3":
      typographyStyles = `text-2xl font-semibold text-${color} mb-3 dark:text-${color}-30  ${customStyles}`;
      typographyTag = <h3 className={typographyStyles}>{children}</h3>;
      break;
    case "subtitle4":
      typographyStyles = `text-xl font-medium text-${color} mb-2 dark:text-${color}-30  ${customStyles}`;
      typographyTag = <h4 className={typographyStyles}>{children}</h4>;
      break;
    case "body1":
      typographyStyles = `text-base text-${color} leading-7 mb-4 dark:text-${color}-30  ${customStyles}`;
      typographyTag = <p className={typographyStyles}>{children}</p>;
      break;
    case "body2":
      typographyStyles = `text-sm text-${color} leading-6 mb-3 dark:text-${color}-30  ${customStyles}`;
      typographyTag = <p className={typographyStyles}>{children}</p>;
      break;
    default:
      break;
  }

  return typographyTag;
};

export default Typography;
