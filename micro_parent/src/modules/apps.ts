export interface IAppItem {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
}

const apps: IAppItem[] = [
  {
    name: "micro_vue",
    entry: "//localhost:8001",
    container: "#micro-viewport",
    activeRule: "/micro_vue",
  },
  {
    name: "micro_react",
    entry: "//localhost:3000",
    container: "#micro-viewport",
    activeRule: "/micro_react",
  },
];

export default apps;
