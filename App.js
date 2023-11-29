// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './Components/LoginScreen';
import RegisterUnits from './Components/RegisterUnits';
import RegisteredUnits from './Components/RegisteredUnits';
import Fees from './Components/Fees';
import Results from './Components/Results';

const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen name="Register" component={RegisterUnits} />
          <Tab.Screen name="Registered" component={RegisteredUnits} />
          <Tab.Screen name="Fees" component={Fees} />
          <Tab.Screen name="Results" component={Results} />
          <Tab.Screen name="Logout" component={() => null} listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              handleLogout();
              navigation.navigate('Login');
            },
          })} />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="Login" component={() => <LoginScreen setIsLoggedIn={setIsLoggedIn} />} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
