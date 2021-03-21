import React, { useReducer } from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { View as MotiView, AnimatePresence, Text as MotiText } from 'moti';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../../Colors';

const TabHeart = () => {
  const [like, toggleLike] = useReducer((l) => !l, false);

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleLike}>
        <View style={styles.animationContianer}>
          <AnimatePresence exitBeforeEnter>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: 32,
                height: 32,
              }}
            >
              <MotiView
                key="likeIcon"
                from={{ scale: 1, translateY: 0 }}
                animate={{
                  scale: like ? [0.8, 0.9, 1] : 1,
                  top: like ? [-2, -8, 0] : 0,
                }}
                transition={{
                  type: 'timing',
                }}
                style={{
                  position: 'absolute',
                }}
              >
                <AntDesign
                  name="heart"
                  size={32}
                  color={like ? Colors.red : Colors.white}
                />
              </MotiView>
            </View>
          </AnimatePresence>
          <AnimatePresence exitBeforeEnter>
            <MotiText
              style={styles.text}
              key="dislikeText"
              animate={{ scale: like ? 1 : 1 }}
            >
              {like ? 'Like' : 'Dislike'}
            </MotiText>
            )
          </AnimatePresence>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
    flex: 1,
  },
  animationContianer: {
    backgroundColor: '#283747',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  text: {
    color: Colors.white,
    fontSize: 24,
    marginLeft: 14,
  },
});

export default TabHeart;
