import { FlatList, Text, View } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import { useState } from 'react';
import DishBasketList from '../../components/DishBasketList/index';

const restaurant = restaurants[0];

const Basket = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <View className="flex-1 w-full py-4 p-2 mt-2">
      <Text className="text-4xl font-semibold ">{restaurant.name}</Text>
      <Text className="text-xl font-semibold p-1 mt-2">Your items</Text>
      <View className="h-[1px] bg-gray-300 my-3" />
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <DishBasketList basketDish={item} />}
      />
      {/*  button */}
      <View className="h-[1px] bg-gray-300 my-5" />
      <View className="bg-black text-white mt-auto p-5 text-center rounded-lg">
        <Text className="text-white text-center text-base font-semibold">
          Add {quantity} to the basket &#8226; $15
        </Text>
      </View>
    </View>
  );
};

export default Basket;
