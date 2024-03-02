import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/theme';
import HeaderBar from '../components/header-bar';

const getCategoriesFromData = (data: any) => {
  let temp: any = {};

  for (let i = 0; i < data.length; i++) {
    if (!temp[data[i].name]) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name] += 1;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getSortedCoffee = (data: any, category: any) => {
  if (category === 'All') {
    return data;
  } else {
    let coffeeList = data.filter((item: any) => item.name === category);
    return coffeeList;
  }
};

const Home = () => {
  const coffeeList = useStore((state: any) => state.coffeeList);
  const beansList = useStore((state: any) => state.BeansList);
  const tabBarHeight = useBottomTabBarHeight();

  const [categories, setCategories] = React.useState(
    getCategoriesFromData(coffeeList),
  );
  const [searchText, setSearchText] = React.useState('');
  const [categoriesIndex, setCategoriesIndex] = React.useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = React.useState(
    getSortedCoffee(coffeeList, categoriesIndex.category),
  );

  return (
    <View style={[styles.screenContainer, {paddingBottom: tabBarHeight}]}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <HeaderBar />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
});
