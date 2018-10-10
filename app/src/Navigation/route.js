import RestaurantListScreen from "../components/restList";
import RestaurantProfileScreen from "../components/restProfile";
import { StackNavigator,DrawerNavigator } from "react-navigation";
import SideMenu from '../components/sideMenu'
import Screen1 from '../components/Screen1'
import Screen2 from '../components/Screen2'
import Screen3 from '../components/Screen3'



const RestaurantStack = StackNavigator(
  {
    RestaurantListScreen: {
      name: "RestaurantListScreen",
      description: "RestaurantListScreen",
      screen: RestaurantListScreen,
      navigationOptions: {
        title: "RestaurantListScreen"
      }
    },
    RestaurantProfileScreen: {
      name: "RestaurantProfileScreen",
      description: "RestaurantProfileScreen",
      screen: RestaurantProfileScreen,
      navigationOptions: {
        //title: "RestaurantProfileScreen",
        headerTintColor: "black"
      }
    },
  },
  {
    initialRouteName: "RestaurantListScreen",
    navigationOptions: {
      headerTintColor: "#fff"
    }
  }
)
const Screen1Stack = StackNavigator(
  {
  Screen1: {
    name: "Screen1",
    description: "Screen1",
    screen: Screen1,
    navigationOptions: {
      title: "Screen1",
    }
  },
},
{
  initialRouteName: "Screen1",
    navigationOptions: {
      headerTintColor: "#fff"
    }
}
)

const Screen2Stack = StackNavigator(
  {
    Screen2: {
      name: "Screen2",
      description: "Screen2",
      screen: Screen2,
      navigationOptions: {
        title: "Screen2",
      }
    },
},
{
  initialRouteName: "Screen2",
    navigationOptions: {
      headerTintColor: "#fff"
    }
}
)

const Screen3Stack = StackNavigator(
  {
    Screen3: {
      name: "Screen3",
      description: "Screen3",
      screen: Screen3,
      navigationOptions: {
        title: "Screen3",
      }
    },
},
{
  initialRouteName: "Screen3",
    navigationOptions: {
      headerTintColor: "#fff"
    }
}
)

const DrawerRoutes = {
  RestaurantStack: {
    name: 'RestaurantStack',
    screen:RestaurantStack
  },
  Screen1Stack: {
    name: 'Screen1Stack',
    screen:Screen1Stack
  },
  Screen2Stack: {
    name: 'Screen2Stack',
    screen:Screen2Stack
  },
  Screen3Stack: {
    name: 'Screen3Stack',
    screen:Screen3Stack
  },
 
  
  
}

const DrawerStack = DrawerNavigator(
  DrawerRoutes,
  {
      contentComponent: SideMenu,
      initialRouteName: 'RestaurantStack',
      headerMode: 'screen',
      navigationOptions: {
        headerStyle: {backgroundColor:'#0082c9'},
          gesturesEnabled: false,
      },
  },
);

const MainAppRoutes = {
  DrawerStack: {
    screen: DrawerStack,
    name: 'DrawerStack',
},
}
export default MainAppRoutes