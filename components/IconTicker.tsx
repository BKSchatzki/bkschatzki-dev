import appwriteIcon from "../public/icons/appwrite.svg";
import bashIcon from "../public/icons/bash.svg";
import css3Icon from "../public/icons/css3.svg";
import dockerIcon from "../public/icons/docker.svg";
import esLintIcon from "../public/icons/eslint.svg";
import expressIcon from "../public/icons/express.svg";
import figmaIcon from "../public/icons/figma.svg";
import framerMotionIcon from "../public/icons/framer-motion.svg";
import gitIcon from "../public/icons/git.svg";
import githubIcon from "../public/icons/github.svg";
import graphQlIcon from "../public/icons/graphql.svg";
import html5Icon from "../public/icons/html5.svg";
import javascriptIcon from "../public/icons/javascript.svg";
import jestIcon from "../public/icons/jest.svg";
import kaggleIcon from "../public/icons/kaggle.svg";
import linuxIcon from "../public/icons/linux.svg";
import materialUiIcon from "../public/icons/materialui.svg";
import mongodbIcon from "../public/icons/mongodb.svg";
import mySqlIcon from "../public/icons/mysql.svg";
import nextJsIcon from "../public/icons/nextjs.svg";
import nodeJsIcon from "../public/icons/nodejs.svg";
import npmIcon from "../public/icons/npm.svg";
import postgreSqlIcon from "../public/icons/postgresql.svg";
import postmanIcon from "../public/icons/postman.svg";
import prettierIcon from "../public/icons/prettier.svg";
import prismaIcon from "../public/icons/prisma.svg";
import reactIcon from "../public/icons/react.svg";
import tailwindCssIcon from "../public/icons/tailwindcss.svg";
import typescriptIcon from "../public/icons/typescript.svg";
import ubuntuIcon from "../public/icons/ubuntu.svg";
import viteJsIcon from "../public/icons/vitejs.svg";
import vsCodeIcon from "../public/icons/vscode.svg";
import wordpressIcon from "../public/icons/wordpress.svg";

import Image from "next/image";

const icons = [
  { alt: "appwrite", src: appwriteIcon },
  { alt: "bash", src: bashIcon },
  { alt: "css3", src: css3Icon },
  { alt: "docker", src: dockerIcon },
  { alt: "esLint", src: esLintIcon },
  { alt: "express", src: expressIcon },
  { alt: "figma", src: figmaIcon },
  { alt: "framerMotion", src: framerMotionIcon },
  { alt: "git", src: gitIcon },
  { alt: "github", src: githubIcon },
  { alt: "graphQl", src: graphQlIcon },
  { alt: "html5", src: html5Icon },
  { alt: "javascript", src: javascriptIcon },
  { alt: "jest", src: jestIcon },
  { alt: "kaggle", src: kaggleIcon },
  { alt: "linux", src: linuxIcon },
  { alt: "materialUi", src: materialUiIcon },
  { alt: "mongodb", src: mongodbIcon },
  { alt: "mySql", src: mySqlIcon },
  { alt: "nextJs", src: nextJsIcon },
  { alt: "nodeJs", src: nodeJsIcon },
  { alt: "npm", src: npmIcon },
  { alt: "postgreSql", src: postgreSqlIcon },
  { alt: "postman", src: postmanIcon },
  { alt: "prettier", src: prettierIcon },
  { alt: "prisma", src: prismaIcon },
  { alt: "react", src: reactIcon },
  { alt: "tailwindCss", src: tailwindCssIcon },
  { alt: "typescript", src: typescriptIcon },
  { alt: "ubuntu", src: ubuntuIcon },
  { alt: "viteJs", src: viteJsIcon },
  { alt: "vsCode", src: vsCodeIcon },
  { alt: "wordpress", src: wordpressIcon },
];

const IconTicker = () => {
  return (
    <ul className="mt-6 flex w-full items-center justify-center gap-3 overflow-hidden">
      {icons.map((icon, index) => (
        <li key={index}>
          <Image
            src={icon.src}
            alt={icon.alt}
            height={64}
            className="max-w-none"
          />
        </li>
      ))}
    </ul>
  );
};

export default IconTicker;
