import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '@/styles/_joinstyle';
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '@/constants';
import { useState } from 'react';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.iconsection}>
        <Link href="/" asChild>
          <TouchableOpacity>
            <Text style={{fontSize: 18}}>← Back</Text>
          </TouchableOpacity>
        </Link>
        <Image source={HEROLOGOGREEN} />
      </View>
      
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Sign In</Text>
        <Text style={styles.subText}>Welcome back! Please sign in to your account</Text>
      </View>
      
      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput 
            style={styles.formControl}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        
        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput 
              style={styles.passwordControl}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text>{showPassword ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>
      
      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={[styles.secondaryButton, {borderColor: '#4285F4'}]}>
          <Image source={GOOGLELOGO} />
          <Text style={[styles.secondaryButtonText, {color: '#4285F4'}]}>
            Continue with Google
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.secondaryButton, {borderColor: '#3B5998'}]}>
          <Image source={FACEBOOKLOGO} />
          <Text style={[styles.secondaryButtonText, {color: '#3B5998'}]}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don't have an account? </Text>
        <Link href="/join" asChild>
          <TouchableOpacity>
            <Text style={styles.signupSubTitleText}>Join Now</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}
