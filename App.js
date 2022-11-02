import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Home from './src/screens/Home';
import RestaurantDetails from './src/screens/RestaurantDetails/index';
import DishDetails from './src/screens/DishDetails/index';
import Basket from './src/screens/Basket/index';
import Orders from './src/screens/Orders/index';
import OrderDetails from './src/screens/OrderDetails/index';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white ">
      {/* <Home /> */}
      {/* <RestaurantDetails /> */}
      {/* <DishDetails /> */}
      {/* <Basket /> */}
      {/* <Orders /> */}
      <OrderDetails />

      <StatusBar style="light" />
    </View>
  );
}
