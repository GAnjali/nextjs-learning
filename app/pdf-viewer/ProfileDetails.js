import { StyleSheet, Text, View, Image } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  details: {
    display: 'flex',
    flexDirection: 'column',
    color: '#a84242',
    fontSize: '12px',
    font: 'Roboto,Helvetica,Arial,sans-serif',
    top: 150,
    left: 50,
    paddingBottom: 50,
    width: '75%',
  },
  heading: {
    fontSize: 15,
    fontWeight: 1000,
    marginBottom: 10,
  },
  text: {
    marginBottom: 5,
    fontSize: 12,
  },
  profilepic: {
    maxWidth: 100,
    maxHeight: 100,
  },
  profileSection: {
    display: 'flex',
    flexDirection: 'row',
  },
  imageview: {
    top: 180,
    width: '25%',
    height: 'auto',
  },
});

export function PersonalDetails() {
  return (
    <View style={styles.profileSection}>
      <View style={{ ...styles.details, ...styles.personalDetails }}>
        <Text style={styles.heading}>PERSONAL DETAILS</Text>
        <Text style={styles.text}>Name: </Text>
        <Text style={styles.text}>Date of Birth: </Text>
        <Text style={styles.text}>Time of Birth: </Text>
        <Text style={styles.text}>Place of Birth: </Text>
        <Text style={styles.text}>Rashi: </Text>
        <Text style={styles.text}>Nakshatra: </Text>
        <Text style={styles.text}>Complexion: </Text>
        <Text style={styles.text}>Height: </Text>
        <Text style={styles.text}>Gotra: </Text>
        <Text style={styles.text}>Bachelors: </Text>
        <Text style={styles.text}>Work: </Text>
      </View>
      <ProfilePic />
    </View>
  );
}

export function FamilyDetails() {
  return (
    <View style={{ ...styles.details, ...styles.familyDetails }}>
      <Text style={styles.heading}>FAMILY DETAILS</Text>
      <Text style={styles.text}>Fathers Name: </Text>
      <Text style={styles.text}>Fathers Occupation: </Text>
      <Text style={styles.text}>Mothers Name: </Text>
      <Text style={styles.text}>Mothers Occupation: </Text>
      <Text style={styles.text}>Siblings: </Text>
    </View>
  );
}
const TextWrapper = ({ label, value }) => {
  return (
    <div style={styles.text}>
      <Text>{label}</Text>
      <Text>:</Text>
      <Text>{value}</Text>
    </div>
  );
};

export function ContactDetails() {
  return (
    <View style={{ ...styles.details, ...styles.contactDetails }}>
      <Text style={styles.heading}>CONTACT DETAILS</Text>
      <TextWrapper label={'Contact Person'} value={'asdfasdf'} />
      <TextWrapper label="Contact Number" value="asdfasdf" />
      <TextWrapper label="Email ID" value="asdfasdf" />
      <TextWrapper label="Resedential Address" value="asdfasdf" />
    </View>
  );
}

export function ProfilePic() {
  return (
    <View style={styles.imageview}>
      <Image
        style={styles.profilepic}
        alt="Image"
        src={'/template-bg-12-wtm.png'}
      />
    </View>
  );
}
