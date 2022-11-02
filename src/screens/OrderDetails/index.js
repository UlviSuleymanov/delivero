import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';
import orders from '../../../assets/data/orders.json';
import restaurants from '../../../assets/data/restaurants.json';
import DishBasketList from '../../components/DishBasketList';
const order = orders[0];
const OrderDetailsHeader = () => {
  return (
    <View className="flex-1 ">
      <Image className="w-full aspect-[5/3] mb-1" source={{ uri: order?.Restaurant?.image }} />
      <View className="m-2">
        <Text className="text-2xl font-semibold">{order?.Restaurant?.name}</Text>
        <Text className="text-gray-400 text-sm">{order.status} &#8226; 2 days ago </Text>
        <Text className="mt-5 text-base tracking-wide">Your Orders</Text>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={OrderDetailsHeader}
        data={restaurants[0].dishes}
        renderItem={({ item }) => <DishBasketList basketDish={item} />}
      />
    </View>
  );
};
export default OrderDetails;
