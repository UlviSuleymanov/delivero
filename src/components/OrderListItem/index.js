import { View, Text, Image } from 'react-native';

const OrderListItem = ({ order }) => {
  return (
    <View className="flex flex-row m-2 items-center">
      <Image source={{ uri: order?.Restaurant.image }} className="w-[75px] h-[75px] mr-[5px]" />
      <View>
        <Text className="text-lg font-semibold">{order?.Restaurant.name}</Text>
        <Text className="my-1">3 items &#8226; $38.54</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </View>
  );
};

export default OrderListItem;
