import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function MyForm() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hola mundo</Text>
            <TextInput placeholder="Escribe algo" style={styles.input} />
            <Button title="Enviar" onPress={() => alert('Enviado')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontSize: 24, marginBottom: 10 },
    input: { borderWidth: 1, padding: 10, marginBottom: 20 }
});