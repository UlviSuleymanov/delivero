import { Text, View, Image } from 'react-native';

const Restaurant = ({ item }) => {
  return (
    <View className="flex  justify-start w-full my-2 ">
      <Image
        source={{
          uri: `${item?.image}`,
        }}
        className="w-full aspect-[5/3] mb-1"
      />
      <View className="flex flex-row items-center">
        <View>
          <Text className="text-sm font-medium my-1">{item?.name}</Text>
          <Text className="text-gray-400">
            ${item?.deliveryFee} &#8226; {item?.minDeliveryTime}-{item?.maxDeliveryTime} minutes
          </Text>
        </View>
        <View className="ml-auto  bg-gray-300 rounded-full w-[35px] h-[35px] items-center justify-center">
          <Text>{item?.rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default Restaurant;
