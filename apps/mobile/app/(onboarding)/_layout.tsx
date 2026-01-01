import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';

export default function OnboardingLayout() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: isDark ? '#000000' : '#ffffff',
        },
        headerTintColor: isDark ? '#ffffff' : '#000000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: isDark ? '#000000' : '#ffffff',
        },
      }}>
      <Stack.Screen
        name="getting-started"
        options={{
          title: 'Welcome to Blob',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: 'Login',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
