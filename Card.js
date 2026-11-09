import { Pressable, StyleSheet, Text, View } from 'react-native';
import { cores } from '../constants/cores';

export default function Card({ receita, aoPressionar }) {
  const { nome, categoria, tempo } = receita;

  return (
    <Pressable onPress={() => aoPressionar(receita)} style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <View style={styles.linha}>
        <Text style={styles.info}>{categoria}</Text>
        <Text style={styles.info}>{`${tempo} min`}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: cores.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: cores.borda,
    padding: 16,
    marginBottom: 12,
  },
  nome: { fontSize: 18, fontWeight: '600', color: cores.texto },
  linha: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 },
  info: { fontSize: 14, color: cores.suave },
});
