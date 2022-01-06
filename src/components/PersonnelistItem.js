import React, { useState, useEffect}from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Assets from '././definitions/Assets';
import Colors from '././definitions/Colors';


const PersonneListItem = ({onClick, personneData}) => {


    useEffect(() => {
        console.log(personneData)
      }, []);

  return (
        <TouchableOpacity style={styles.container} onPress={onClick}>
          <View style={styles.noThumbnailContainer}>
              <Image source={Assets.icons.missingIMG} />
          </View>
            <View style={styles.informationContainer}>
                <Text style={styles.title}>
                    {personneData.name}
                </Text>
                <Text style={[styles.data]}>
                    {personneData.known_for_department}
                </Text>
                <Text style={[styles.data, styles.cuisine]}>
                    {personneData.popularity}
                </Text>
                <Text style={[styles.data, styles.cuisine]}>
                    {personneData.known_for.title}
                </Text>
            </View>
  </TouchableOpacity >

  );
};

export default PersonneListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  informationContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  statContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
  noThumbnailContainer: {
    width: 128,
    height: 128,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 128,
    height: 128,
    borderRadius: 12,
    backgroundColor: Colors.mainGreen,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  data: {
    fontSize: 16,
  },
  cuisine: {
    fontStyle: 'italic',
  },
  icon: {
    tintColor: Colors.mainGreen,
  },
  stat: {
    marginLeft: 4,
  },
});