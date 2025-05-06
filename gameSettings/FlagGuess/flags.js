const flags = [
  {
    emoji: '🇦🇿',
    answer: 'Azerbaijan',
  },
  {
    emoji: '🇺🇸',
    answer: 'United States',
  },
  {
    emoji: '🇬🇧',
    answer: 'United Kingdom',
  },
  {
    emoji: '🇨🇳',
    answer: 'China',
  },
  {
    emoji: '🇫🇷',
    answer: 'France',
  },
  {
    emoji: '🇩🇪',
    answer: 'Germany',
  },
  {
    emoji: '🇯🇵',
    answer: 'Japan',
  },
  {
    emoji: '🇰🇷',
    answer: 'South Korea',
  },
  {
    emoji: '🇮🇹',
    answer: 'Italy',
  },
  {
    emoji: '🇪🇸',
    answer: 'Spain',
  },
  {
    emoji: '🇨🇦',
    answer: 'Canada',
  },
  {
    emoji: '🇧🇷',
    answer: 'Brazil',
  },
  {
    emoji: '🇲🇽',
    answer: 'Mexico',
  },
  {
    emoji: '🇦🇺',
    answer: 'Australia',
  },
  {
    emoji: '🇷🇺',
    answer: 'Russia',
  },
  {
    emoji: '🇮🇳',
    answer: 'India',
  },
  {
    emoji: '🇹🇷',
    answer: 'Turkey',
  },
  {
    emoji: '🇸🇦',
    answer: 'Saudi Arabia',
  },
  {
    emoji: '🇿🇦',
    answer: 'South Africa',
  },
  {
    emoji: '🇸🇪',
    answer: 'Sweden',
  },
  {
    emoji: '🇳🇴',
    answer: 'Norway',
  },
  {
    emoji: '🇫🇮',
    answer: 'Finland',
  },
  {
    emoji: '🇳🇱',
    answer: 'Netherlands',
  },
  {
    emoji: '🇧🇪',
    answer: 'Belgium',
  },
  {
    emoji: '🇨🇭',
    answer: 'Switzerland',
  },
  {
    emoji: '🇦🇷',
    answer: 'Argentina',
  },
  {
    emoji: '🇨🇱',
    answer: 'Chile',
  },
  {
    emoji: '🇨🇴',
    answer: 'Colombia',
  },
  {
    emoji: '🇵🇹',
    answer: 'Portugal',
  },
  {
    emoji: '🇵🇱',
    answer: 'Poland',
  },
  {
    emoji: '🇬🇷',
    answer: 'Greece',
  },
  {
    emoji: '🇦🇼',
    answer: 'Aruba',
  },
  {
    emoji: '🇦🇫',
    answer: 'Afghanistan',
  },
  {
    emoji: '🇦🇴',
    answer: 'Angola',
  },
  {
    emoji: '🇦🇮',
    answer: 'Anguilla',
  },
  {
    emoji: '🇦🇽',
    answer: 'Åland Islands',
  },
  {
    emoji: '🇦🇱',
    answer: 'Albania',
  },
  {
    emoji: '🇦🇩',
    answer: 'Andorra',
  },
  {
    emoji: '🇦🇪',
    answer: 'United Arab Emirates',
  },
  {
    emoji: '🇦🇲',
    answer: 'Armenia',
  },
  {
    emoji: '🇦🇸',
    answer: 'American Samoa',
  },
  {
    emoji: '🇦🇶',
    answer: 'Antarctica',
  },
  {
    emoji: '🇹🇫',
    answer: 'French Southern Territories',
  },
  {
    emoji: '🇦🇬',
    answer: 'Antigua and Barbuda',
  },
  {
    emoji: '🇦🇹',
    answer: 'Austria',
  },
  {
    emoji: '🇧🇮',
    answer: 'Burundi',
  },
  {
    emoji: '🇧🇯',
    answer: 'Benin',
  },
  {
    emoji: '🇧🇶',
    answer: 'Bonaire',
  },
  {
    emoji: '🇧🇫',
    answer: 'Burkina Faso',
  },
  {
    emoji: '🇧🇩',
    answer: 'Bangladesh',
  },
  {
    emoji: '🇧🇬',
    answer: 'Bulgaria',
  },
  {
    emoji: '🇧🇭',
    answer: 'Bahrain',
  },
  {
    emoji: '🇧🇸',
    answer: 'Bahamas',
  },
  {
    emoji: '🇧🇦',
    answer: 'Bosnia and Herzegovina',
  },
  {
    emoji: '🇧🇱',
    answer: 'Saint Barthélemy',
  },
  {
    emoji: '🇧🇾',
    answer: 'Belarus',
  },
  {
    emoji: '🇧🇿',
    answer: 'Belize',
  },
  {
    emoji: '🇧🇲',
    answer: 'Bermuda',
  },
  {
    emoji: '🇧🇴',
    answer: 'Bolivia',
  },
  {
    emoji: '🇧🇧',
    answer: 'Barbados',
  },
  {
    emoji: '🇧🇳',
    answer: 'Brunei Darussalam',
  },
  {
    emoji: '🇧🇹',
    answer: 'Bhutan',
  },
  {
    emoji: '🇧🇻',
    answer: 'Bouvet Island',
  },
  {
    emoji: '🇧🇼',
    answer: 'Botswana',
  },
  {
    emoji: '🇨🇫',
    answer: 'Central African Republic',
  },
  {
    emoji: '🇨🇨',
    answer: 'Cocos Islands',
  },
  {
    emoji: '🇨🇲',
    answer: 'Cameroon',
  },
  {
    emoji: '🇨🇩',
    answer: 'Congo, Democratic Republic',
  },
  {
    emoji: '🇨🇬',
    answer: 'Congo',
  },
  {
    emoji: '🇨🇰',
    answer: 'Cook Islands',
  },
  {
    emoji: '🇰🇲',
    answer: 'Comoros',
  },
  {
    emoji: '🇨🇻',
    answer: 'Cabo Verde',
  },
  {
    emoji: '🇨🇷',
    answer: 'Costa Rica',
  },
  {
    emoji: '🇨🇺',
    answer: 'Cuba',
  },
  {
    emoji: '🇨🇼',
    answer: 'Curaçao',
  },
  {
    emoji: '🇨🇽',
    answer: 'Christmas Island',
  },
  {
    emoji: '🇰🇾',
    answer: 'Cayman Islands',
  },
  {
    emoji: '🇨🇾',
    answer: 'Cyprus',
  },
  {
    emoji: '🇨🇿',
    answer: 'Czechia',
  },
  {
    emoji: '🇩🇯',
    answer: 'Djibouti',
  },
  {
    emoji: '🇩🇲',
    answer: 'Dominica',
  },
  {
    emoji: '🇩🇰',
    answer: 'Denmark',
  },
  {
    emoji: '🇩🇴',
    answer: 'Dominican Republic',
  },
  {
    emoji: '🇩🇿',
    answer: 'Algeria',
  },
  {
    emoji: '🇪🇨',
    answer: 'Ecuador',
  },
  {
    emoji: '🇪🇬',
    answer: 'Egypt',
  },
  {
    emoji: '🇪🇷',
    answer: 'Eritrea',
  },
  {
    emoji: '🇪🇭',
    answer: 'Western Sahara',
  },
  {
    emoji: '🇪🇪',
    answer: 'Estonia',
  },
  {
    emoji: '🇪🇹',
    answer: 'Ethiopia',
  },
  {
    emoji: '🇫🇯',
    answer: 'Fiji',
  },
  {
    emoji: '🇫🇰',
    answer: 'Falkland Islands',
  },
  {
    emoji: '🇫🇴',
    answer: 'Faroe Islands',
  },
  {
    emoji: '🇫🇲',
    answer: 'Micronesia',
  },
  {
    emoji: '🇬🇦',
    answer: 'Gabon',
  },
  {
    emoji: '🇬🇪',
    answer: 'Georgia',
  },
  {
    emoji: '🇬🇬',
    answer: 'Guernsey',
  },
  {
    emoji: '🇬🇭',
    answer: 'Ghana',
  },
  {
    emoji: '🇬🇮',
    answer: 'Gibraltar',
  },
];

export default flags;
