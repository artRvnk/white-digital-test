import React from 'react'
import { Text, View, FlatList } from 'react-native'

import { Typography } from '@/components'
import { Header } from '@/components/header'

export const Main = () => {
  return (
    <>
      <Header.Main />

      <View className="flex-1 items-center justify-center">
        <Text>Activity Main</Text>

        <Typography.Body1SF>Activity Main</Typography.Body1SF>
        <Typography.Body1A>Activity Main</Typography.Body1A>
      </View>
    </>
  )
}
