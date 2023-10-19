import { FC } from "react";
import "./header.css";
import logo from "../../images/icons8-développement-web-64.png";
import { Typography, List } from "antd";

const { Title } = Typography;

const listMenu = [
  "ACCUEIL",
  "À PROPOS",
  "SERVICES",
  "COMPÉTENCES",
  "MON TRAVAIL",
  "CONTACT",
];

const Header: FC = () => {
  // JSX
  return (
    <div className="root">
      <div className="content">
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            style={{ width: 35, height: 38, marginRight: 10 }}
          />
          <Title style={{ color: "#f6a639", margin: "0 auto" }} level={4}>
            Antoni.dev
          </Title>
        </div>
        <div className="menu">
          {listMenu.map((item, index) => (
            <List className="list" key={index}>
              <p style={{ fontSize: 11.5 }}>{item}</p>
            </List>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
