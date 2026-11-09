import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { cores } from './constants/cores';
import { receitasIniciais } from './data/receitas';
import Detalhes from './screens/Detalhes';
import Formulario from './screens/Formulario';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  const [receitas, setReceitas] = useState(receitasIniciais);

  const adicionarReceita = (nova) => setReceitas((atuais) => [nova, ...atuais]);

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: cores.primaria },
          headerTintColor: '#FFFFFF',
        }}
      >
        <Stack.Screen name="Home" options={{ title: 'Receitas' }}>
          {(props) => <Home {...props} receitas={receitas} />}
        </Stack.Screen>
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={({ route }) => ({ title: route.params.receita.nome })}
        />
        <Stack.Screen name="Formulario" options={{ title: 'Nova receita' }}>
          {(props) => <Formulario {...props} aoAdicionar={adicionarReceita} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
