import React, { useReducer, useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { View, AnimatePresence, SafeAreaView } from 'moti';

import Colors from '../../Colors';

const AimatedBackground = ({ bg }) => {
  return (
    <View
      key="bg"
      from={{
        width: 0,
        height: 0,
        scale: 0,
      }}
      animate={{
        width: 10,
        height: 10,
        scale: 200,
      }}
      transition={{
        type: 'timing',
        duration: 1000,
      }}
      style={{
        position: 'absolute',
        borderRadius: 50,
        right: 0,
        bottom: 0,
        backgroundColor: bg,
      }}
    />
  );
};

export default function RadiousBackground() {
  const [selectedColor, setSelectedColor] = useState(Colors.orange);
  const [backgroundColor, setBackgroundColor] = useState(selectedColor);
  const [visible, toggle] = useReducer((s) => !s, true);

  const ColorView = ({ color }) => {
    return (
      <Pressable
        onPress={() => {
          setSelectedColor((prevColor) => {
            setBackgroundColor(prevColor);
            return color;
          });

          if (visible) {
            setTimeout(() => {
              toggle();
            }, 0);
          }

          toggle();
        }}
      >
        <View style={[styles.colorContainer, { backgroundColor: color }]} />
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.colorsContianer} key="colorsContainer">
        <ColorView color={Colors.orange} key={Colors.orange} />
        <ColorView color={Colors.yellow} key={Colors.yellow} />
        <ColorView color={Colors.green} key={Colors.green} />
        <ColorView color={Colors.blue} key={Colors.blue} />
        <ColorView color={Colors.pink} key={Colors.pink} />
      </View>

      <AnimatePresence>
        {visible && <AimatedBackground bg={selectedColor} />}
      </AnimatePresence>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bg: {
    position: 'absolute',
    borderRadius: 50,
    right: 0,
  },
  colorsContianer: {
    zIndex: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  colorContainer: {
    width: 50,
    height: 50,
    borderRadius: 40,
    borderColor: 'white',
    borderWidth: 4,
    marginHorizontal: 8,
  },
});
