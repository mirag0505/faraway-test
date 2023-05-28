import { FC } from "react";
import { Breadcrumb, Button, Col, Layout, Row, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import starWarsLogo from "../assets/star.png";

// type CustomLayoutProps = {
//   children: React.ReactNode;
// };

export const CustomLayout: FC = () => {
  const { Header, Content, Footer, Sider } = Layout;
  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", background: "white" }}>
          <img style={{ width: "100px" }} alt={"starwars"} src={starWarsLogo} />
        </div>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div style={{ height: "50px" }}></div>

        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            display: "flex",
          }}>
          <Content
            style={{
              maxWidth: 1240,
              margin: "auto",
              padding: "0 24px",
              minHeight: 280,
              height: "100%",
              width: "100%",
              flexGrow: "1",
            }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          color: "white",
          textAlign: "center",
          background: "#001529",
          marginTop: "50px",
        }}>
        StarWars hometask
      </Footer>
    </Layout>
  );
};
