import { Pressable, StyleSheet, Text } from 'react-native';
import { cores } from '../constants/cores';

export default function Chip({ texto, ativo, aoPressionar }) {
  return (
    <Pressable onPress={aoPressionar} style={[styles.chip, ativo && styles.ativo]}>
      <Text style={[styles.texto, ativo && styles.textoAtivo]}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    minHeight: 40,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: cores.borda,
    backgroundColor: cores.card,
    justifyContent: 'center',
    marginRight: 8,
  },
  ativo: { backgroundColor: cores.primaria, borderColor: cores.primaria },
  texto: { color: cores.texto, fontSize: 14 },
  textoAtivo: { color: '#FFFFFF', fontWeight: '600' },
});
