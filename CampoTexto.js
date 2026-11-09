import { StyleSheet, Text, TextInput, View } from 'react-native';
import { cores } from '../constants/cores';

export default function CampoTexto({ rotulo, value, onChangeText, ...resto }) {
  return (
    <View style={styles.container}>
      <Text style={styles.rotulo}>{rotulo}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={cores.suave}
        {...resto}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 14 },
  rotulo: { fontSize: 14, fontWeight: '600', color: cores.texto, marginBottom: 4 },
  input: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 10,
    backgroundColor: cores.card,
    paddingHorizontal: 12,
    fontSize: 16,
    color: cores.texto,
  },
});
