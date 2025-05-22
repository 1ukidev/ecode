import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default Card = ({ title, description, imageUrl, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode='cover'
        />
      )}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    elevation: 3,
    marginVertical: 20,
    marginHorizontal: 16,
    overflow: 'hidden'
  },

  image: {
    width: '100%',
    height: 150
  },

  contentContainer: {
    padding: 16
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white'
  },

  description: {
    fontSize: 14,
    color: 'white'
  }
});
