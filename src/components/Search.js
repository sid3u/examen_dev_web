import React, { useState } from 'react';
import { View, Text ,TextInput, Button, StyleSheet, FlatList } from 'react-native';

import { getPersonne } from '../api/tmdb';
import PersonnelistItem from '../components/PersonnelistItem';

const Search = ({navigation}) => {

    const [personne, setPersonne] = useState([]);

    const loadMorePersonne = () => {
          requestPersonnes();
      };

      const navigateToPersonneDetails = () => {
        navigation.navigate("ViewPersonne");
      };

    const requestPersonne = async () => {    
          const zomatoSearchResult = await getPersonne();
          setPersonne(zomatoSearchResult);
          console.log("debut")
          console.log(personne)
          console.log("nassyyyyyyyyyyyyyyyyyyyym")
      };

      const requestPersonnes = async () => {    
        const zomatoSearchResult = await getPersonne('', '2');
        setPersonne([...personne, ...zomatoSearchResult]);
        console.log("ouiii")
    };

    return (
         <View style={styles.container}>
         <View style={styles.searchContainer}>
            <TextInput
              placeholder='Name'
              style={styles.inputRestaurantName}
            />
            <Button
              title='Rechercher'
              onPress={requestPersonne}
            /> 
          </View>

            <FlatList
                data={personne.results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <PersonnelistItem personneData={item} onClick={navigateToPersonneDetails} />
                    
                )}
                onEndReached={loadMorePersonne}
                onEndReachedThreshold={0.5}
            />
        </View>
      );
    };
    
    export default Search;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingHorizontal: 0,
        marginTop: 0,
      },
      searchContainer: {
        marginBottom: 16,
      },
      inputRestaurantName: {
        marginBottom: 8,
      },
    });