import { FlatList, Text, View } from 'react-native';
import OrderListItem from '../../components/OrderListItem/index';
import orders from '../../../assets/data/orders.json';

const Orders = () => {
  return (
    <View>
      <FlatList data={orders} renderItem={({ item }) => <OrderListItem order={item} />} />
    </View>
  );
};

export default Orders;
