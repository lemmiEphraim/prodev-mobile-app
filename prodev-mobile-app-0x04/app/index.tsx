import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '@/styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '@/constants';

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={BACKGROUNDIMAGE} 
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>
        
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome to Prodev</Text>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              Get started with your account
            </Text>
          </View>
        </View>
        
        <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 40}}>
          <View style={styles.buttonGroup}>
            <Link href="/join" asChild>
              <TouchableOpacity style={styles.buttonPrimary}>
                <Text style={styles.buttonPrimaryText}>Join Now</Text>
              </TouchableOpacity>
            </Link>
            
            <Link href="/signin" asChild>
              <TouchableOpacity style={styles.buttonSecondary}>
                <Text style={styles.buttonSecondaryText}>Sign In</Text>
              </TouchableOpacity>
            </Link>
          </View>
          
          <View style={styles.buttonGroupSubText}>
            <Text style={{color: 'white'}}>Already have an account?</Text>
            <Link href="/signin" asChild>
              <TouchableOpacity>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Sign In</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
