import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import colors from '../constants/colors';


const SearchBar = () => {
    return (
        <View>
            <View style={styles.searchBar}>
        <Ionicons name={"ios-search"} size={24} color={colors.dark} />
        <View style={{ paddingRight: 20 }}>
          <TextInput
                        style={{ marginLeft: 20 }}
                        placeholder={"Search for restaurants"}
                        onChangeText={ text =>searchFilter(text)}
          />
        </View>
      </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
     searchBar: {
    borderWidth: 1,
    borderColor: colors.medium,
    padding: 12,
    margin: 8,
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 20,
  },
})


 const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = data.filter(
        function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };