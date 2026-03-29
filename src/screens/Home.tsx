import { ScrollView, StyleSheet } from 'react-native';
import { MainTamplates } from '../Templates/MainTampletes';
import { SectionAbout } from '../components/SectionAbout';
import { SectionAboutDoWeDo } from '../components/SectionAboutDoWeDo';
import { SectionServices } from '../components/SectionServices';
import { SectionContact } from '../components/SectionContact';

export default function Home() {
  return (
    <MainTamplates>
      <ScrollView 
        style={styles.scroll}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <SectionAbout />
        <SectionAboutDoWeDo />
        <SectionServices />
        <SectionContact />
      </ScrollView>
    </MainTamplates>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: 30,
  },
});