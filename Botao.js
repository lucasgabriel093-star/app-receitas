import { Pressable, StyleSheet, Text } from 'react-native';
import { cores } from '../constants/cores';

export default function Botao({ titulo, aoPressionar, secundario = false }) {
  return (
    <Pressable
      onPress={aoPressionar}
      style={({ pressed }) => [
        styles.botao,
        secundario && styles.secundario,
        pressed && styles.pressionado,
      ]}
    >
      <Text style={[styles.texto, secundario && styles.textoSecundario]}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    minHeight: 48,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: cores.primaria,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secundario: {
    backgroundColor: cores.card,
    borderWidth: 1,
    borderColor: cores.primaria,
  },
  pressionado: { opacity: 0.7 },
  texto: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  textoSecundario: { color: cores.primaria },
});
