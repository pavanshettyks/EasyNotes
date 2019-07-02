import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './Home'
import Camera from './Camera'
import Dummy from './Dummy'


const RootStack = createStackNavigator(
    {
      Home: {
                screen: Home,
                
              },
      Camera: {
                  screen: Camera,
                  navigationOptions: {
                  header: null,
                  }
                },
    
    },
    {
      initialRouteName: 'Home',
    }
  );

const AppContainer = createAppContainer(RootStack);

export default AppContainer;