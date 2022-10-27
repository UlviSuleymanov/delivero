import { View, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import restaurants from '../../../assets/data/restaurants.json';
import Menu from '../../components/Menu/index';
import Header from './Header';
const restaurant = restaurants[0];

const RestaurantDetails = () => {
  return (
    <View className="flex-1 ">
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <Menu dish={item} />}
      />
      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        className="m-10"
        style={styles.icon}
      />
    </View>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
});
