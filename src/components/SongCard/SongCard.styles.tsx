import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  artist: {
    color: 'black',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  innerContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  infoContainer: {
    flex :1,
    flexDirection: 'row',
    alignItems:'center'
  },
  year: {
    marginLeft: 10,
    color: 'gray',
    fontSize: 12,
    fontWeight: 'bold',
  },
  soldOutContainer: {
    borderWidth: 1,
    borderColor: 'orange',
    padding: 5,
    borderRadius: 5,
    
  },
  solOutTitle: {
    color: 'red',
    fontSize :10
    
  },
  contentContainer:{
    flexDirection:'row',
    
  }


});
