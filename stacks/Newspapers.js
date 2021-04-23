import React, { useState, useEffect } from 'react'
import { FlatList, ScrollView } from 'react-native'

import LoadingAnimation from '../components/LoadingAnimation'
import NewsCard from '../components/NewsCard'

export default function Newspapers({ navigation }) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([
    { id: '1', title: 'BBC', description: 'Breaking news, sport, TV, radio and a whole lot more. The BBC informs, educates and entertains - wherever you are, whatever your age.', source: 'https://www.bbc.com/' },
    { id: '2', title: 'CNN', description: 'Find the latest breaking news and information on the top stories, weather, business, entertainment, politics, and more.', source: 'https://edition.cnn.com/' },
    { id: '3', title: 'The Daily Mail', description: 'Get the latest breaking news, showbiz & celebrity photos, sport news & rumours, viral videos and top stories.', source: 'https://www.dailymail.co.uk/home/index.html' },
    { id: '4', title: 'The Guardian', description: 'Latest international news, sport and comment from the Guardian.', source: 'https://www.theguardian.com/international' },
    { id: '5', title: 'The New York Times', description: 'The New York Times seeks the truth and helps people understand the world, investigations, photos and video of international and regional news, politics and more.', source: 'https://www.nytimes.com/international/' },
    { id: '6', title: 'The Times', description: 'News and opinion from The Times & The Sunday Times.', source: 'https://www.thetimes.co.uk/' },
  ])

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  })

  if (loading) {
    return <LoadingAnimation />
  } else {
    return (
      <ScrollView>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <NewsCard
                navigation={navigation}
                title={item.title}
                description={item.description}
                url={item.source}
              />
            )
          }}
        />
      </ScrollView>
    )
  }
}
