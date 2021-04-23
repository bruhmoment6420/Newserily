import React from 'react'
import { Card, Title, Button, Paragraph } from 'react-native-paper';

export default function NewsCard({ title, description, navigation, url }) {
  return (
    <Card style={{ paddingBottom: 10 }}>
      <Card.Content>
        <Title style={{ paddingTop: 10 }}>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => navigation.navigate('View Paper', { source: url })}>Open</Button>
      </Card.Actions>
    </Card>
  )
}