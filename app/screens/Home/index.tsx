import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Home() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  function handleLogin() {
    console.log(username, password);
    if (username === "Iago" && password === "iago") {
      console.log("Logado com sucesso");
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require("@/app/assets/icon.png")} />
      <Text style={styles.tittle}>Login</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={(text) => setusername(text)}
      />
      <Text style={styles.tittle}>Senha</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={(text) => setpassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.textInput}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.links}>
        <Button title="Esqueci minha senha" onPress={() => {}} />
        <Button title="Cadastrar" onPress={() => {}} />
      </View>
    </View>
  );
}
