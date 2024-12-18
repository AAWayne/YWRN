/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import FastImage, {
  ResizeMode,
  OnLoadEvent,
  OnProgressEvent,
} from "react-native-fast-image";

import { RTNNativeApi } from "rtn-native-api";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
              alignItem: 'center',
              justContent: 'center'
          }}>
          <FastImage
              style={{
                width: '100%',
                height: 200,
                margin: 20,
              }}
              source={{
                uri: "https://res8.vmallres.com/pimages/uomcdn/CN/pms/202205/gbom/6941487259298/428_428_D7BFF22D4678EB68440F914B352214C4mp_tds.png",
              }}
              resizeMode={FastImage.resizeMode.contain}
              onLoadStart={() => {
                console.log("onLoadStart: success");
              }}
              onProgress={(e: OnProgressEvent) => {
                console.log(
                    "onProgress: success loaded=" +
                    e.nativeEvent.loaded +
                    " total=" +
                    e.nativeEvent.total
                );
              }}
          />

            <Text style={{alignSelf: 'center'}}
                  onPress={async ()  => {
                      const value = await RTNNativeApi.method('testHsH', {key: 'sdsd'})
                      console.log('value', value)
                  }}
            >点击调用</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
