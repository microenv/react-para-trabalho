import {
  AppstoreOutlined as HomeIcon,
  MailOutlined as ClassIcon,
  SettingOutlined as AlarmIcon,
  SettingOutlined as DoneIcon,
  SettingOutlined as PlayIcon,
  SettingOutlined as CommunityIcon,
} from "@ant-design/icons";

export default [
  {
    id: "home",
    label: "Início",
    icon: HomeIcon,
    linkTo: "/",
  },
  {
    id: "nossa-metodologia",
    label: "Nossa Metodologia",
    icon: ClassIcon,
    linkTo: "/nossa-metodologia",
  },
  {
    id: "comece-por-aqui",
    label: "Comece por Aqui",
    icon: PlayIcon,
    linkTo: "/aprender-react-do-zero",
  },
  {
    id: "html-css-javascript",
    label: "HTML / CSS / Javascript",
    icon: ClassIcon,
    linkTo: "/html-css-javascript",
  },
  {
    id: "open-source",
    label: "Contribua com a gente!",
    icon: CommunityIcon,
    linkTo: "/open-source",
  },
];
