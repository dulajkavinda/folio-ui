const SMALL = "small" as const;
const MEDIUM = "medium" as const;
const LARGE = "large" as const;

export const sizeConstants = {
  SMALL,
  MEDIUM,
  LARGE,
};

const MAX_CHARACTERS_DESCRIPTION = 160;
const PROJECT_CASE_BTN_TEXT = "Case Study" as const;
const PROJECT_GITHUB_BTN_TEXT = "Github" as const;
const PROJECT_LINK_BTN_TEXT = "Link" as const;
const PROJECT_VIEW_MORE_TEXT = "view more" as const;

const STACK_ICON_MAP: Record<string, string> = {
  graphql: "GraphQL",
  github: "github",
  reactjs: "ReactJS",
  node: "NodeJS",
  docker: "Docker",
  python: "Python",
  scss: "SCSS",
  nextjs: "NextJS",
  mocha: "Mocha",
  jest: "Jest",
  aws: "AWS",
  ts: "TS",
  ts2: "TS",
  js: "JS",
  mongodb: "MongoDB",
  mysql: "MySQL",
  postgresql: "PostgreSQL",
  redis: "Redis",
  nginx: "Nginx",
  linux: "Linux",
  redux: "Redux",
  express: "Express",
  chakra: "ChakraUI",
};

export const projectConstants = {
  PROJECT_CASE_BTN_TEXT,
  PROJECT_GITHUB_BTN_TEXT,
  PROJECT_LINK_BTN_TEXT,
  PROJECT_VIEW_MORE_TEXT,
  MAX_CHARACTERS_DESCRIPTION,
  STACK_ICON_MAP,
};
