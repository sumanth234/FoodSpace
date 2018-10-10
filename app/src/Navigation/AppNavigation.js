import { StackNavigator } from "react-navigation";
import routes from "./route";
import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = StackNavigator(routes, {
  initialRouteName: "DrawerStack",
  navigationOptions: {
   header:null
  }
});

export default PrimaryNav;
