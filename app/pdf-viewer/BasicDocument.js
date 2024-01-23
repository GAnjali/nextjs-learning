import {
  Document,
  Page,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from '@react-pdf/renderer';
import {
  PersonalDetails,
  ContactDetails,
  FamilyDetails,
} from './ProfileDetails';

// Create styles
const styles = StyleSheet.create({
  viewer: {
    width: '100%', //the pdf viewer will take up all of the width and height
    height: '100vh',
  },
  page: {
    top: '0px',
    position: 'absolute',
    height: '841px',
    width: '100%',
  },
  pageBackgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
});
// Create Document Component
function BasicDocument() {
  return (
    <PDFViewer style={styles.viewer} showToolbar={false}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.pageBackgroundContainer}>
            <Image
              style={styles.imageBackground}
              alt="Image"
              src={'/template-bg-12-wtm.png'}
            />
          </View>
          <PersonalDetails />
          <FamilyDetails />
          <ContactDetails />
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;
