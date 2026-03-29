import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../contexts/AuthContext';
import Home from '../screens/Home';
import Products from '../screens/Products';
import Favorites from '../screens/Favorites';
import Login from '../screens/Login';
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator 
  screenOptions={{ 
    headerShown: false,
    tabBarActiveTintColor: '#ffcb45', 
    tabBarInactiveTintColor: 'gray',  
  }}
>
  <Tab.Screen 
    name="Home" 
    component={Home} 
    options={{ 
      title: 'Home',
      tabBarIcon: ({ color, size }) => (
        <Feather name="home" color={color} size={size} />
      )
    }} 
  />
  
  <Tab.Screen 
    name="Products" 
    component={Products} 
    options={{ 
      title: 'Produtos',
      tabBarIcon: ({ color, size }) => (
        <Feather name="search" color={color} size={size} /> 
      )
    }} 
  />
  
  <Tab.Screen 
    name="Favorites" 
    component={Favorites} 
    options={{ 
      title: 'Favoritos',
      tabBarIcon: ({ color, size }) => (
        <Feather name="heart" color={color} size={size} />
      )
    }} 
  />
</Tab.Navigator>
  );
}

function NotFoundScreen() {
  return <Text>Rota não encontrada</Text>;
}

export function AppNavigator() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="Main" component={MainTabs} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
        <Stack.Screen name="NotFound" component={NotFoundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
