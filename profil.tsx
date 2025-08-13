import { Image, StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/profile.jpg')} style={styles.avatar} />
      <Text style={styles.name}>Mutiara Dewi</Text>
      <Text style={styles.info}>NIM: 123456789</Text>
      <Text style={styles.info}>Kelas: TI-3A</Text>
      <Text style={styles.info}>Jurusan: Teknik Informatika</Text>
      <Text style={styles.info}>Fakultas: Teknik</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', padding: 16 },
  avatar: { width: 150, height: 150, borderRadius: 75, marginBottom: 16 },
  name: { fontSize: 20, fontWeight: 'bold', marginBottom: 8, color: '#1a4d2e' },
  info: { fontSize: 14, marginBottom: 4, color: '#444' },
});
