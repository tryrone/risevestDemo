import AsyncStorage from '@react-native-async-storage/async-storage';

const storeBearerToken = async (value: string) => {
  try {
    await AsyncStorage.setItem('bearer-token', value);
  } catch (e) {
    // saving error
  }
};

const getBearerToken = async (): Promise<string> => {
  try {
    const value = await AsyncStorage.getItem('bearer-token');
    if (value !== null) {
      return value;
    } else {
      return '';
    }
  } catch (e) {
    return '';
    // error reading value
  }
};

const clearAsyncStorage = async () => {
  AsyncStorage.clear();
};

export {storeBearerToken, getBearerToken, clearAsyncStorage};
