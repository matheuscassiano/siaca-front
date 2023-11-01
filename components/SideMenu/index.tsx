import { File, FileText, Home, LogOut, User } from "react-feather";
import "../../app/globals.css";

import { UserContext } from "@/contexts/UserContext";
import { Class } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
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
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    const info = localStorage.getItem("user");
    const access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");

    if (info && access && refresh) {
      setUser({
        ...user!,
        info: JSON.parse(info),
        token: { access, refresh },
      });
    }
  }, []);

  const logout = () => {
    router.push("/login");
    localStorage.clear();
  };

  return (
    <MenuContainer>
      <div>
        <MenuTitle>Sistema Acadêmico</MenuTitle>
        <MenuGroup>
          <MenuGroupTitle>Dashboard</MenuGroupTitle>
          <ul>
            <MenuGroupItem onClick={() => router.push("/home")}>
              <Home />
              <span>Home</span>
            </MenuGroupItem>
            <MenuGroupItem onClick={() => router.push("/perfil")}>
              <User />
              <span>Perfil</span>
            </MenuGroupItem>
          </ul>
        </MenuGroup>

        {user?.info?.user_user_type === "coordenador" && (
          <MenuGroup>
            <MenuGroupTitle>Coordenação</MenuGroupTitle>
            <ul>
              <MenuGroupItem onClick={() => router.push("/cursos")}>
                <File />
                <span>Cursos</span>
              </MenuGroupItem>
              <MenuGroupItem onClick={() => router.push("/ofertas/cadastro")}>
                <FileText />
                <span>Cadastrar Ofertas</span>
              </MenuGroupItem>
              <MenuGroupItem onClick={() => router.push("/matriculas")}>
                <FileText />
                <span>Matrículas</span>
              </MenuGroupItem>
              <MenuGroupItem onClick={() => router.push("/disciplinas")}>
                <FileText />
                <span>Disciplinas</span>
              </MenuGroupItem>
              <MenuGroupItem onClick={() => router.push("/salas")}>
                <Class />
                <span>Salas</span>
              </MenuGroupItem>
            </ul>
          </MenuGroup>
        )}

        {user?.info?.user_user_type === "professor" && (
          <MenuGroup>
            <MenuGroupTitle>Professor</MenuGroupTitle>
            <ul>
              <MenuGroupItem onClick={() => router.push("/minhas-ofertas")}>
                <FileText />
                <span>Minhas Ofertas</span>
              </MenuGroupItem>
            </ul>
          </MenuGroup>
        )}

        {user?.info?.user_user_type === "aluno" && (
          <MenuGroup>
            <MenuGroupTitle>Aluno</MenuGroupTitle>
            <ul>
              <MenuGroupItem onClick={() => router.push("/ofertas")}>
                <FileText />
                <span>Ofertas</span>
              </MenuGroupItem>
              <MenuGroupItem onClick={() => router.push("/matriculas/aluno")}>
                <FileText />
                <span>Matrículas</span>
              </MenuGroupItem>
            </ul>
          </MenuGroup>
        )}
      </div>

      <MenuFooterContainer>
        <MenuGroupItem onClick={logout}>
          <LogOut />
          <span>Logout</span>
        </MenuGroupItem>
        <MenuFooter>
          <Profile
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fuser-account-icon-27.png&f=1&nofb=1&ipt=c7fe8fc7d91fa2cd96fbcc959297389aa9bfe59991f81656e24457c4c3be9ae6&ipo=images"
            alt="Perfil"
          />
          <div>
            <UserName>{user?.info?.user_username}</UserName>
            <UserEmail>{user?.info?.user_email}</UserEmail>
          </div>
        </MenuFooter>
      </MenuFooterContainer>
    </MenuContainer>
  );
}
