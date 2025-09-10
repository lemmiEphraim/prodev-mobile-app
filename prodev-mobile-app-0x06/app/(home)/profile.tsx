import { View, Text, Image, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Profile = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 p-4 bg-gray-50">
        <Text className="text-black text-4xl font-normal mb-6">Profile</Text>
        
        <View className="bg-[#34967C] h-[90px] mb-10 flex-row items-center rounded-md justify-between px-7">
          <View className="flex-row items-center gap-4">
            <Image 
              source={require("@/assets/images/user-image.png")} 
              className="w-12 h-12 rounded-full"
            />
            <View>
              <Text className="font-semibold text-xl text-white">
                Cole Baidoo
              </Text>
              <Text className="text-sm font-thin text-white">@block_cs</Text>
            </View>
          </View>
          <Feather name="edit-3" size={24} color="white" />
        </View>

        <View className="h-auto gap-3 bg-white rounded-md p-4 mb-4 shadow-sm">
          <Pressable className="flex-row items-center justify-between py-3">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full">
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className="text-lg font-semibold mb-1">My Account</Text>
                <Text className="font-thin text-gray-700 text-sm">
                  Make Changes to your account
                </Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
          </Pressable>
          
          <Pressable className="flex-row items-center justify-between py-3">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full">
                <FontAwesome6 name="users" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className="text-lg font-normal mb-1">Saved Beneficiary</Text>
                <Text className="font-thin text-gray-700 text-sm">
                  Manage your saved accounts
                </Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
          </Pressable>
          
          <Pressable className="flex-row items-center justify-between py-3">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full">
                <Ionicons name="lock-closed-outline" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className="text-lg font-normal mb-1">Face ID / Touch ID</Text>
                <Text className="font-thin text-gray-700 text-sm">
                  Manage biometric authentication
                </Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
          </Pressable>
          
          <Pressable className="flex-row items-center justify-between py-3">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full">
                <Ionicons name="shield-checkmark-outline" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className="text-lg font-normal mb-1">Two-Factor Authentication</Text>
                <Text className="font-thin text-gray-700 text-sm">
                  Further secure your account for safety
                </Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
          </Pressable>
          
          <Pressable className="flex-row items-center justify-between py-3">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full">
                <MaterialIcons name="logout" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className="text-lg font-normal mb-1">Log out</Text>
                <Text className="font-thin text-gray-700 text-sm">
                  Sign out of your account
                </Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
          </Pressable>
        </View>

        <Text className="text-black text-xl font-normal mb-6">More</Text>

        <View className="h-auto gap-3 bg-white rounded-md p-4 mb-4 shadow-sm">
          <Pressable className="flex-row items-center justify-between py-3">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full">
                <Ionicons name="settings-outline" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className="text-lg font-semibold mb-1">Settings</Text>
                <Text className="font-thin text-gray-700 text-sm">
                  App preferences and configuration
                </Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
          </Pressable>
          
          <Pressable className="flex-row items-center justify-between py-3">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full">
                <Ionicons name="help-circle-outline" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className="text-lg font-normal mb-1">Help & Support</Text>
                <Text className="font-thin text-gray-700 text-sm">
                  Get help and contact support
                </Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Profile;
