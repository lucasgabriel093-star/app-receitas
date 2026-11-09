import { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Botao from '../components/Botao';
import Cabecalho from '../components/Cabecalho';
import Card from '../components/Card';
import Chip from '../components/Chip';
import { cores } from '../constants/cores';

export default function Home({ navigation, receitas }) {
  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('Todas');
  const [lista, setLista] = useState(receitas);

  const categorias = ['Todas', ...new Set(receitas.map((r) => r.categoria))];

  useEffect(() => {
    const temporizador = setTimeout(() => {
      const termo = busca.trim().toLowerCase();
      const filtradas = receitas.filter(
        (r) =>
          (categoria === 'Todas' || r.categoria === categoria) &&
          r.nome.toLowerCase().includes(termo)
      );
      setLista(filtradas);
    }, 300);

    return () => clearTimeout(temporizador);
  }, [busca, categoria, receitas]);

  const abrirDetalhes = (receita) => navigation.navigate('Detalhes', { receita });

  return (
    <View style={styles.container}>
      <Cabecalho titulo="Minhas receitas" subtitulo={`${lista.length} encontrada(s)`} />

      <TextInput
        style={styles.busca}
        placeholder="Buscar receita..."
        placeholderTextColor={cores.suave}
        value={busca}
        onChangeText={setBusca}
      />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtros}>
        {categorias.map((item) => (
          <Chip
            key={item}
            texto={item}
            ativo={item === categoria}
            aoPressionar={() => setCategoria(item)}
          />
        ))}
      </ScrollView>

      <FlatList
        data={lista}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Card receita={item} aoPressionar={abrirDetalhes} />}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhuma receita encontrada.</Text>}
      />

      <Botao titulo="Nova receita" aoPressionar={() => navigation.navigate('Formulario')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.fundo, padding: 16 },
  busca: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 10,
    backgroundColor: cores.card,
    paddingHorizontal: 12,
    fontSize: 16,
    color: cores.texto,
    marginBottom: 10,
  },
  filtros: { flexGrow: 0, marginBottom: 12 },
  vazio: { textAlign: 'center', color: cores.suave, marginTop: 24, fontSize: 16 },
});
