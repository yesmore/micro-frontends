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
    container: "#micro-vue-viewport",
    activeRule: "/micro_vue",
  },
];

export default apps;
