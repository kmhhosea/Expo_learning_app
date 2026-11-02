import { Pressable, StyleSheet } from 'react-native';
import { SymbolView } from 'expo-symbols';

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <Pressable
      accessibilityLabel="Add sticker"
      accessibilityRole="button"
      onPress={onPress}
      style={styles.button}>
      <SymbolView
        name={{ ios: 'plus', android: 'add', web: 'add' }}
        size={38}
        tintColor="#25292e"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#ffd33d',
    borderRadius: 42,
    height: 84,
    justifyContent: 'center',
    marginHorizontal: 60,
    width: 84,
  },
});
