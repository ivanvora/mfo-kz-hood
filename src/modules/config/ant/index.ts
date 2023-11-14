import { ThemeConfig } from "antd/es/config-provider/context";

export const theme: ThemeConfig = {
  token: {
    colorPrimary: "#8fadbf",
    colorInfo: "#8fadbf",
    wireframe: true,
    fontFamily: "'Roboto', sans-serif",
    fontSize: 16,
    borderRadius: 10,
  },
  components: {
    Button: {
      defaultColor: "rgb(143, 173, 191)",
      fontSize: 16,
      controlHeight: 50,
    },
    Input: {
      controlHeight: 50,
    },
    Typography: {
      colorTextHeading: "#071526",
    },
    Table: {
      fontSize: 12,
    },
  },
};
