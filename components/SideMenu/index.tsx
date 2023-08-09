import {
  Calendar,
  File,
  FilePlus,
  FileText,
  Home,
  Settings,
  User,
} from "react-feather";
import "../../app/globals.css";

import {
  MenuContainer,
  MenuFooter,
  MenuFooterContainer,
  MenuGroup,
  MenuGroupItem,
  MenuGroupTitle,
  MenuTitle,
  Profile,
  UserEmail,
  UserName,
} from "./styles";

export default function SideMenu() {
  return (
    <MenuContainer>
      <div>
        <MenuTitle>Sistema Academico</MenuTitle>
        <MenuGroup>
          <MenuGroupTitle>Dashboard</MenuGroupTitle>
          <ul>
            <MenuGroupItem>
              <Home />
              <span>Home</span>
            </MenuGroupItem>
            <MenuGroupItem>
              <User />
              <span>Perfil</span>
            </MenuGroupItem>
            <MenuGroupItem>
              <Calendar />
              <span>Calendário</span>
            </MenuGroupItem>
          </ul>
        </MenuGroup>

        <MenuGroup>
          <MenuGroupTitle>Academico</MenuGroupTitle>
          <ul>
            <MenuGroupItem>
              <File />
              <span>Boletim</span>
            </MenuGroupItem>
            <MenuGroupItem>
              <FileText />
              <span>Matrícula</span>
            </MenuGroupItem>
            <MenuGroupItem>
              <FilePlus />
              <span>Certificados</span>
            </MenuGroupItem>
          </ul>
        </MenuGroup>
      </div>

      <MenuFooterContainer>
        <MenuGroupItem>
          <Settings />
          <span>Configurações</span>
        </MenuGroupItem>
        <MenuFooter>
          <Profile src="/images/profile.avif" alt="Perfil" />
          <div>
            <UserName>Matheus Cassiano</UserName>
            <UserEmail>matheuscassiano@gmail.com</UserEmail>
          </div>
        </MenuFooter>
      </MenuFooterContainer>
    </MenuContainer>
  );
}
