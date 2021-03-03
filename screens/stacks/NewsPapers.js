import React from 'react';
import { View, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import { Card, Title, Button, Paragraph } from 'react-native-paper';

export default function NewsPapers({ navigation }) {
  return (
    <ScrollView>
      <Card style={{ paddingBottom: 10 }}>
        <Card.Content>
          <Title style={{ paddingTop: 10 }}>BBC</Title>
          <Paragraph>
            Breaking news, sport, TV, radio and a whole lot more. The BBC
            informs, educates and entertains - wherever you are, whatever your
            age.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('BBC')}>Open</Button>
        </Card.Actions>
      </Card>

      <Card style={{ paddingBottom: 10 }}>
        <Card.Content>
          <Title style={{ paddingTop: 10 }}>CNN</Title>
          <Paragraph>
            Find the latest breaking news and information on the top stories,
            weather, business, entertainment, politics, and more.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('CNN')}>Open</Button>
        </Card.Actions>
      </Card>

      <Card style={{ paddingBottom: 10 }}>
        <Card.Content>
          <Title style={{ paddingTop: 10 }}>The New York Times</Title>
          <Paragraph>
            The New York Times seeks the truth and helps people understand the
            world, investigations, photos and video of international and
            regional news, politics and more.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('The New York Times')}>
            Open
          </Button>
        </Card.Actions>
      </Card>

      <Card style={{ paddingBottom: 10 }}>
        <Card.Content>
          <Title style={{ paddingTop: 10 }}>The Times</Title>
          <Paragraph>
            News and opinion from The Times & The Sunday Times.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('The Times')}>Open</Button>
        </Card.Actions>
      </Card>

      <Card style={{ paddingBottom: 10 }}>
        <Card.Content>
          <Title style={{ paddingTop: 10 }}>The Guardian</Title>
          <Paragraph>
            Latest international news, sport and comment from the Guardian.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('The Guardian')}>
            Open
          </Button>
        </Card.Actions>
      </Card>

      <Card style={{ paddingBottom: 10 }}>
        <Card.Content>
          <Title style={{ paddingTop: 10 }}>The Daily Mail</Title>
          <Paragraph>
            Get the latest breaking news, showbiz & celebrity photos, sport news
            & rumours, viral videos and top stories.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('The Daily Mail')}>
            Open
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}
