import { StackNavigator } from "react-navigation";
import routes from "./route";

const PrimaryNav = StackNavigator(routes, {
  initialRouteName: "DrawerStack",
  navigationOptions: {
   header:null
  }
});

export default PrimaryNav;
