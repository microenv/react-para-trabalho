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
    id: "main",
    linkToPrefix: "",
    menus: [
      {
        id: "home",
        label: "Início",
        icon: HomeIcon,
        linkTo: "/",
      },
      {
        label: "Nossa Metodologia",
        icon: ClassIcon,
        linkTo: "/nossa-metodologia",
      },
      {
        label: "Comece por Aqui",
        icon: PlayIcon,
        linkTo: "/comece-por-aqui",
      },
      {
        label: "HTML / CSS / Javascript",
        icon: ClassIcon,
        linkTo: "/html-css-javascript",
      },
      {
        label: "Contribua com a gente!",
        icon: CommunityIcon,
        linkTo: "/contribua-no-github",
      },
    ],
  },
  // {
  //   id: "classes",
  //   title: <b>Do zero ao Júnior</b>,
  //   linkToPrefix: "/curso-react-basico-gratis",
  //   menus: [
  //     {
  //       // icon: null,
  //       label: "História do React",
  //       icon: DoneIcon,
  //       linkTo: "/",
  //     },
  //     {
  //       // icon: null,
  //       label: "História do React Native",
  //       icon: DoneIcon,
  //     },
  //     {
  //       // icon: null,
  //       label: "Quando usar ou não usar React",
  //       icon: DoneIcon,
  //     },
  //     {
  //       // icon: SettingsIcon,
  //       label: "Conheça alguns aplicativos e sites criados com React",
  //       icon: AlarmIcon,
  //     },
  //     {
  //       // icon: SettingsIcon,
  //       label: "XML e JSON",
  //       icon: AlarmIcon,
  //     },
  //     {
  //       // icon: SettingsIcon,
  //       label: "Diferença entre React e HTML/CSS/Javascript",
  //       icon: AlarmIcon,
  //     },
  //     {
  //       // icon: SettingsIcon,
  //       label: "O que são componentes",
  //       icon: AlarmIcon,
  //     },
  //     {
  //       // icon: SettingsIcon,
  //       label: "Configuração de Ambiente",
  //       icon: AlarmIcon,
  //     },
  //     {
  //       // icon: CodeIcon,
  //       label: "Hello World (Create React App)",
  //       icon: AlarmIcon,
  //     },
  //     {
  //       // icon: CodeIcon,
  //       label: "Entendendo o Projeto",
  //       icon: AlarmIcon,
  //     },
  //     {
  //       // icon: VideoIcon,
  //       label: "Criando um componente",
  //       icon: AlarmIcon,
  //     },
  //     {
  //       // icon: VideoIcon,
  //       label: "Como colocar CSS nos componentes React",
  //       icon: AlarmIcon,
  //     },
  //     {
  //       label: "Componente: Contador de Cliques",
  //       icon: AlarmIcon,
  //     },
  //     {
  //       // icon: VideoIcon,
  //       label: "Documentação de componentes",
  //       icon: AlarmIcon,
  //     },
  //     {
  //       // icon: VideoIcon,
  //       label: "Navegação com Routes",
  //       icon: DoneIcon,
  //     },
  //     {
  //       // icon: VideoIcon,
  //       label: "Criando um Top Menu / Top Nav",
  //       icon: AlarmIcon,
  //     },
  //     {
  //       // icon: VideoIcon,
  //       label: "Criando uma Sidebar",
  //       icon: AlarmIcon,
  //     },
  //     {
  //       // icon: VideoIcon,
  //       label: "Criando um Top Menu + uma Sidebar",
  //       icon: AlarmIcon,
  //     },
  //     {
  //       // icon: VideoIcon,
  //       label: "Criando ",
  //       icon: AlarmIcon,
  //     },
  //   ],
  // },
];
