import { SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevateCards from './components/ElevateCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <FlatCards />
          <ElevateCards />
          <ContactList />
          <FancyCard />
          <ActionCard />

        </View>
      </ScrollView>
    </SafeAreaView>


  )
}

export default App

const styles = StyleSheet.create({})