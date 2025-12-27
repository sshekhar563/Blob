import { View, Text, Pressable, Image, ScrollView, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function GettingStartedScreen() {
  const { height, width } = useWindowDimensions();

  const isSmallDevice = height < 700;
  const imageSize = isSmallDevice ? 120 : Math.min(width * 0.4, 180);
  const titleSize = isSmallDevice ? 'text-2xl' : 'text-3xl';
  const descriptionSize = isSmallDevice ? 'text-sm' : 'text-base';
  const verticalPadding = isSmallDevice ? 'py-4' : 'py-8';

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'left', 'right']}>
      <ScrollView
        className="flex-1"
        contentContainerClassName={`flex-grow justify-between px-6 ${verticalPadding}`}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View className="min-h-[200px] flex-1 items-center justify-center">
          <View className={`items-center ${isSmallDevice ? 'mb-4' : 'mb-8'}`}>
            <Image
              source={require('../../assets/adaptive-icon.png')}
              style={{ width: imageSize, height: imageSize }}
              resizeMode="contain"
            />
          </View>

          <Text
            className={`mb-4 px-6 text-center ${titleSize} font-extrabold tracking-tight text-gray-900`}
            numberOfLines={2}
            adjustsFontSizeToFit>
            Learn Smarter with <Text className="text-orange-500">Blob</Text>
          </Text>

          <Text
            className={`px-6 text-center ${descriptionSize} leading-6 text-gray-500`}
            numberOfLines={3}>
            Your AI-powered study companion. Transform notes into interactive flashcards and quizzes
            instantly.
          </Text>
        </View>

        <View className="mt-6">
          <Pressable
            className="mb-4 h-14 items-center justify-center rounded-2xl bg-orange-500 shadow-lg shadow-orange-200 active:bg-orange-600"
            onPress={() => router.push('/(onboarding)/login')}>
            <View className="flex-row items-center">
              <Text className="mr-2 text-lg font-bold text-white">Continue</Text>
              <Ionicons name="arrow-forward" size={20} color="white" />
            </View>
          </Pressable>

          <Text className="px-4 text-center text-xs leading-4 text-gray-400">
            By continuing, you agree to our Terms and Privacy Policy
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
