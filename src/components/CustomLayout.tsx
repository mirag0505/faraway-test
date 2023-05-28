import { FC } from "react";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import starWarsLogo from "../assets/star.png";

// type CustomLayoutProps = {
//   children: React.ReactNode;
// };

export const CustomLayout: FC = () => {
  const { Header, Content, Footer, Sider } = Layout;

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", background: "white" }}>
          <img style={{ width: "100px" }} alt={"starwars"} src={starWarsLogo} />
        </div>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
          <Content
            style={{
              maxWidth: 1240,
              margin: "auto",
              padding: "0 24px",
              minHeight: 280,
            }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>StarWars hometask</Footer>
    </Layout>
  );
};
