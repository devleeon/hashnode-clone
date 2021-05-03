import { Box, Container, styled } from "@material-ui/core";
import axios from "axios";
import React, {
  createContext,
  ReactChild,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import SideBar from "./SideBar";

const LayOutContainer = styled(Container)(({ theme }) => ({
  paddingRight: "8px",
  paddingLeft: "8px",
}));
const GridContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: "10px",
  },
  [theme.breakpoints.up("lg")]: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridGap: "15px",
  },
}));

const GridLeftItem = styled(Box)(({ theme }) => ({
  width: "100%",
  top: 0,
  [theme.breakpoints.up("sm")]: {
    gridColumnEnd: "span 3",
  },
  [theme.breakpoints.up("md")]: {
    gridColumnEnd: "span 2",
  },
  [theme.breakpoints.up("lg")]: {
    gridColumnEnd: "span 1",
  },
}));

export type CurrentUserType = {
  currentUser: {
    username: string;
    email: string;
    avatar: string;
  };
  setCurrentUser: Function;
};

export const CurrentUser = createContext<CurrentUserType>({
  currentUser: {
    username: "",
    email: "",
    avatar: "",
  },
  setCurrentUser: () => {},
});
export const useCurrentUser = () => useContext(CurrentUser);

interface Props {
  children: ReactChild;
  sticky?: boolean;
}
function LayOut({ children, sticky }: Props): ReactElement {
  const [currentUser, setCurrentUser] = useState({
    username: "",
    email: "",
    avatar: "",
  });
  const getUser = async () => {
    const { data } = await axios.post("user");
    setCurrentUser(data);
  };
  console.log(currentUser);
  useEffect(() => {
    getUser();
  }, []);
  return (
    <Box
      bgcolor="secondary.light"
      height="100%"
      minHeight="100vh"
      position="relative"
    >
      <LayOutContainer maxWidth="xl" fixed>
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
          <GridContainer>
            <GridLeftItem {...(sticky && { position: "sticky", top: 0 })}>
              <SideBar />
            </GridLeftItem>
            {children}
          </GridContainer>
        </CurrentUser.Provider>
      </LayOutContainer>
    </Box>
  );
}

export default LayOut;
