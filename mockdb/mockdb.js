// mockdb/mockdb.js
export const mockData = {
  data: [
    {
      id: 1,
      text: 'UX UI design nedir?',
      sender: 'user',
    },
    {
      id: 2,
      text: 'UX kullanıcı deneyimi, UI ise arayüz tasarımıdır.',
      sender: 'ai',
    },
    {
      id: 3,
      text: 'React ne işe yarar?',
      sender: 'user',
    },
    {
      id: 4,
      text: "Web'de interaktif arayüzler yapmak için kullanılır.",
      sender: 'ai',
    },
  ],
};

export const homeGames = [
  {
    image: require('../assets/images/miniGames/ColorGuess/color_home.png'),
    screen: 'GuessColorPage',
  },
  {
    image: require('../assets/images/miniGames/EmojiGuess/emoji_home.png'),
    screen: 'GuessEmojiPage',
  },
  {
    image: require('../assets/images/miniGames/topicGuess/quiz_home.png'),
    screen: 'GuessTopicPage',
  },
  {
    image: require('../assets/images/miniGames/shadows/guess_home.png'),
    screen: 'GuessShadowPage',
  },
  {
    image: require('../assets/images/miniGames/CharadeGuess/charade_home.png'),
    screen: 'GuessCharadePage',
  },
  {
    image: require('../assets/images/miniGames/EmojiGuess/emoji_home.png'),
    screen: 'GuessFlagPage',
  },
  {
    image: require('../assets/images/miniGames/EmojiGuess/emoji_home.png'),
    screen: 'GuessKeyPage',
  },
  {
    image: require('../assets/images/miniGames/EmojiGuess/emoji_home.png'),
    screen: 'PullStickPage',
  },
];
