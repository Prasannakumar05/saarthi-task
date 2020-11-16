import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View,Image,ScrollView,TextInput } from 'react-native';
import SearchBar from './components/SearchBar';
import colors from './constants/colors';
import { Ionicons } from "@expo/vector-icons";

export default function App() {

  const [dataSource, setDataSource] = useState([])
  const [search, setSearch] = useState('');
  const [masterDataSource,setMasterDataSource] = useState([]);


  useEffect(() => {
    fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=13.0827,80.270&radius=2500&type=restaurant&key=AIzaSyDhHzf6y1brSirE2hPeMjTqSBYE73pzukM`)
      .then(response => response.json())
      .then((responseJson) => {
      setDataSource(responseJson.results)
      })
      .catch(err => console.log(err))
    
    
  }, [])
  
  //  const searchFilterFunction = (text) => {
    
  //   if (text) {
     
  //     const newData = masterDataSource.filter(
  //       function (item) {
  //         const itemData = item.title
  //           ? item.title.toUpperCase()
  //           : ''.toUpperCase();
  //         const textData = text.toUpperCase();
  //         return itemData.indexOf(textData) > -1;
  //     });
  //     setDataSource(newData);
  //     setSearch(text);
  //   } else {
  //     // Inserted text is blank
  //     // Update FilteredDataSource with masterDataSource
  //     setDataSource(masterDataSource);
  //     setSearch(text);
  //   }
  //  };
  //  const ItemView = ({item}) => {
  //   return (
  //     // Flat List Item
  //     <Text
  //       style={styles.itemStyle}
  //       onPress={() => getItem(item)}>
  //       {item.id}
  //       {'.'}
  //       {item.title.toUpperCase()}
  //     </Text>
  //   );
  // };

  // const ItemSeparatorView = () => {
  //   return (
  //     // Flat List Item Separator
  //     <View
  //       style={{
  //         height: 0.5,
  //         width: '100%',
  //         backgroundColor: '#fff',
  //       }}
  //     />
  //   );
  // };

  // const getItem = (item) => {
  //   // Function for click on an item
  //   alert('Id : ' + item.id + ' Title : ' + item.title);
  // };
  
  
  return (
    <View style={styles.container}>
      <View>
            <View style={styles.searchBar}>
        <Ionicons name={"ios-search"} size={24} color={colors.dark} />
        <View style={{ paddingRight: 20 }}>
          <TextInput
            style={{ marginLeft: 20 }}
            placeholder={"Search for restaurants"}
            // onChangeText={(text) => searchFilterFunction(text)}      
          />
        </View>
      </View>
        </View>
      {/* <SearchBar/> */}
      <View style={{ marginTop: 10,alignItems:'center',justifyContent:'center'}}>
        <FlatList data={dataSource} renderItem={({item})=>{
        return(
          <View style={styles.BigCards}>
            <Image
              resizeMode="contain"
              style={styles.img1}
              source={{uri: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'}}/>
            
            <View style={{flexDirection:'column'}}>
              <Text numberOfLines={1} style={styles.nameText}>{item.name.slice(0,29)}</Text>
              <Text  style={ styles.decsName}>Indian   Italian  Mexican</Text>
              <View style={{flexDirection:'row'}}>
             <Text style={styles.ratingText}>{item.rating}</Text>
               {/* <Text style={styles.text}>{item.types}</Text> */}
             {/* <Text>{item.geometry.location.lat}</Text> */}
             <Text style={styles.userRating}>({item.user_ratings_total})</Text>
                </View>
              <Text numberOfLines={2} style={styles.address}>{item.vicinity.slice(0,38)}</Text>
              </View>
        </View>
        )
      }} keyExtractor={item=> item.name} />
        
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:40
  },
   BigCards: {
    width: '100%',
    height: 100,
    borderWidth: 0.5,
    //borderRadius: 15,
    overflow: "hidden",
    marginTop: 10,
    borderColor: colors.light,
     flexDirection: 'row',
    marginVertical:5
  },
   text: {
    color: colors.medium,
    marginLeft:20,
    fontSize:15
  },
   img1: {
    width: '20%',
     height: '65%',
     borderRadius: 35,
  },
  nameText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:20
  },
  ratingText: {
    color: colors.primary,
    marginLeft: 30,
    fontSize:17
  },
  textUser: {
    marginLeft: 2,
    color: colors.dark,
    fontSize:17
  },
  userRating: {
    color: colors.medium,
    marginLeft:5,
    fontSize:15
  },
  decsName: {
     color: colors.dark,
    marginLeft:30,
    fontSize:15
  },
  address: {
    color: colors.medium,
    marginLeft:25,
    fontSize:15
  },
  searchBar: {
    borderWidth: 1,
    borderColor: colors.medium,
    padding: 12,
    margin: 8,
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 20,
  },
});


