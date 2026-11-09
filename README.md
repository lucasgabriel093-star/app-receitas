# App de Receitas

## Descrição
Catálogo de receitas feito com React Native e Expo. Permite buscar receitas por nome, filtrar por categoria, ver os detalhes de cada uma e cadastrar novas receitas.

## Aluno
LUCAS GABRIEL DE CASTRO SILVA RGM 4156924

## Telas
- **Home**: lista de receitas, campo de busca e filtro por categoria.
- **Detalhes**: ingredientes, modo de preparo e botão de favoritar.
- **Formulário**: cadastro de uma nova receita com validação.

## Fonte de dados
Dados locais (`data/receitas.js`).

## Onde estão os requisitos
- Componentes: `components/Card.js`, `Botao.js`, `Cabecalho.js`, `Chip.js`, `CampoTexto.js`
- Props com callback: `Card` (`aoPressionar`), `Botao` (`aoPressionar`), `Formulario` (`aoAdicionar`)
- useState: `screens/Home.js` (busca, categoria, lista), `screens/Formulario.js` (form, erro), `screens/Detalhes.js` (favorita), `App.js` (receitas)
- useEffect: `screens/Home.js` (filtra a lista quando busca ou categoria mudam, com cleanup do `setTimeout`)
- Navegação com parâmetros: `Home` envia `{ receita }` para `Detalhes`, lido com `route.params`

## Vídeo de demonstração
`demo/demo.mp4`

## Como executar
```
npm install
npx expo start
```
