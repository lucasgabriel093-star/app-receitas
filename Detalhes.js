import { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Botao from '../components/Botao';
import Cabecalho from '../components/Cabecalho';
import { cores } from '../constants/cores';

export default function Detalhes({ route }) {
  const { receita } = route.params;
  const [favorita, setFavorita] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <Cabecalho titulo={receita.nome} subtitulo={`${receita.categoria} • ${receita.tempo} min`} />

      <Text style={styles.secao}>Ingredientes</Text>
      {receita.ingredientes.map((ingrediente) => (
        <Text key={ingrediente} style={styles.texto}>{`• ${ingrediente}`}</Text>
      ))}

      <Text style={styles.secao}>Modo de preparo</Text>
      <Text style={styles.texto}>{receita.preparo}</Text>

      <Botao
        titulo={favorita ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        secundario={favorita}
        aoPressionar={() => setFavorita(!favorita)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.fundo },
  conteudo: { padding: 16 },
  secao: { fontSize: 18, fontWeight: '700', color: cores.texto, marginTop: 12, marginBottom: 6 },
  texto: { fontSize: 16, color: cores.texto, lineHeight: 24, marginBottom: 4 },
});
