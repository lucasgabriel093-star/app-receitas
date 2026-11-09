import { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Botao from '../components/Botao';
import Cabecalho from '../components/Cabecalho';
import CampoTexto from '../components/CampoTexto';
import { cores } from '../constants/cores';

const formularioVazio = {
  nome: '',
  categoria: '',
  tempo: '',
  ingredientes: '',
  preparo: '',
};

export default function Formulario({ navigation, aoAdicionar }) {
  const [form, setForm] = useState(formularioVazio);
  const [erro, setErro] = useState('');

  const atualizarCampo = (campo, valor) => setForm({ ...form, [campo]: valor });

  const salvar = () => {
    const { nome, categoria, tempo, ingredientes, preparo } = form;
    const tempoNumero = Number(tempo);

    if (!nome.trim() || !categoria.trim() || !preparo.trim() || !ingredientes.trim()) {
      setErro('Preencha todos os campos.');
      return;
    }
    if (!Number.isFinite(tempoNumero) || tempoNumero <= 0) {
      setErro('Informe o tempo de preparo em minutos.');
      return;
    }

    aoAdicionar({
      id: Date.now(),
      nome: nome.trim(),
      categoria: categoria.trim(),
      tempo: tempoNumero,
      ingredientes: ingredientes.split(',').map((item) => item.trim()).filter(Boolean),
      preparo: preparo.trim(),
    });
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <Cabecalho titulo="Nova receita" subtitulo="Separe os ingredientes por vírgula" />

      <CampoTexto rotulo="Nome" value={form.nome} onChangeText={(v) => atualizarCampo('nome', v)} />
      <CampoTexto
        rotulo="Categoria"
        value={form.categoria}
        onChangeText={(v) => atualizarCampo('categoria', v)}
      />
      <CampoTexto
        rotulo="Tempo (minutos)"
        value={form.tempo}
        keyboardType="numeric"
        onChangeText={(v) => atualizarCampo('tempo', v)}
      />
      <CampoTexto
        rotulo="Ingredientes"
        value={form.ingredientes}
        onChangeText={(v) => atualizarCampo('ingredientes', v)}
      />
      <CampoTexto
        rotulo="Modo de preparo"
        value={form.preparo}
        multiline
        onChangeText={(v) => atualizarCampo('preparo', v)}
      />

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}
      <Botao titulo="Salvar receita" aoPressionar={salvar} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.fundo },
  conteudo: { padding: 16 },
  erro: { color: cores.erro, marginBottom: 12, fontSize: 14 },
});
