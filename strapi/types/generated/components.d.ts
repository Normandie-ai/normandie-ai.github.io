import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCards extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cards';
  info: {
    displayName: 'Cards';
    icon: 'grid';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    cards: Schema.Attribute.Component<'components.card', true>;
    variant: Schema.Attribute.Enumeration<['blue', 'purple']>;
  };
}

export interface BlocksFeatures extends Struct.ComponentSchema {
  collectionName: 'components_blocks_features';
  info: {
    description: '';
    displayName: 'Features';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
    titleImage: Schema.Attribute.Media;
    variant: Schema.Attribute.String & Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_heroes';
  info: {
    description: '';
    displayName: 'hero';
    icon: 'monitor';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    button: Schema.Attribute.Component<'components.link', false>;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface BlocksStats extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stats';
  info: {
    description: 'Statistics section with dynamic grid layout';
    displayName: 'Stats';
    icon: 'chartLine';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    stats: Schema.Attribute.JSON & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['default', 'dark']> &
      Schema.Attribute.DefaultTo<'dark'>;
  };
}

export interface BlocksTeam extends Struct.ComponentSchema {
  collectionName: 'components_blocks_teams';
  info: {
    description: '';
    displayName: 'Team';
    icon: 'apps';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images' | 'files'>;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsCard extends Struct.ComponentSchema {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'Card';
    icon: 'grid';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'earth';
  };
  attributes: {
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.cards': BlocksCards;
      'blocks.features': BlocksFeatures;
      'blocks.hero': BlocksHero;
      'blocks.stats': BlocksStats;
      'blocks.team': BlocksTeam;
      'components.card': ComponentsCard;
      'components.link': ComponentsLink;
    }
  }
}
