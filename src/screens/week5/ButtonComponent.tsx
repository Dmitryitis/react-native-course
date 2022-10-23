import React, { useState } from "react";
import { Button, Text, View } from "react-native";


const ButtonComponent = () => {
  const [pressedCount, setPressedCount] = useState(0);
  const disabledCount = 3

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ margin: 16 }}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : 'The button isn\'t pressed yet'
        }
      </Text>
      <Button
        title='Press me'
        disabled={pressedCount === disabledCount}
        onPress={()=>setPressedCount(pressedCount+1)}
      />
      <View style={{ margin: 10 }} />
      <Button
        title='Reset'
        onPress={()=>setPressedCount(0)}
      />
    </View>
  );
}

export default ButtonComponent