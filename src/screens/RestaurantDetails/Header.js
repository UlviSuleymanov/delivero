import { View, Text, Image, StyleSheet } from 'react-native';

const RestaurantHeader = ({ restaurant }) => {
  return (
    <View className="flex-1 ">
      <Image className="w-full aspect-[5/3] mb-1" source={{ uri: restaurant?.image }} />
      <View className="m-2">
        <Text className="text-2xl font-semibold">{restaurant?.name}</Text>
        <Text className="text-gray-400 text-sm">
          ${restaurant?.deliveryFee} &#8226; {restaurant?.minDeliveryTime}-
          {restaurant?.maxDeliveryTime} minutes
        </Text>
        <Text className="mt-5 text-base tracking-wide">Menu</Text>
      </View>
    </View>
  );
};

export default RestaurantHeader;

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
});
