import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_banners';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    anchor: Schema.Attribute.String;
    backgroundImage: Schema.Attribute.Media<'files' | 'images'>;
    cards: Schema.Attribute.Component<'components.card', true>;
    content: Schema.Attribute.RichText;
    logo: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface BlocksCards extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cards';
  info: {
    description: '';
    displayName: 'Cards';
    icon: 'grid';
  };
  attributes: {
    anchor: Schema.Attribute.String;
    backgroundImage: Schema.Attribute.Media<'images'>;
    cards: Schema.Attribute.Component<'components.card', true>;
    hasNotch: Schema.Attribute.Boolean;
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
    anchor: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    hasNotch: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
    titleImage: Schema.Attribute.Media;
    variant: Schema.Attribute.String & Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface BlocksGridList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_grid_lists';
  info: {
    description: '';
    displayName: 'GridList';
  };
  attributes: {
    anchor: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'components.card', true>;
    content: Schema.Attribute.RichText;
    hasNotch: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
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
    anchor: Schema.Attribute.String;
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttons: Schema.Attribute.Component<'components.link', true>;
    description: Schema.Attribute.RichText;
    hasNotch: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHighlight extends Struct.ComponentSchema {
  collectionName: 'components_blocks_highlights';
  info: {
    description: '';
    displayName: 'Highlight';
  };
  attributes: {
    anchor: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    hasNotch: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    splineURL: Schema.Attribute.String;
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
    anchor: Schema.Attribute.String;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    hasNotch: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    stats: Schema.Attribute.Component<'components.card', true>;
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
    anchor: Schema.Attribute.String;
    cardContent: Schema.Attribute.RichText;
    cardImage: Schema.Attribute.Media<'images' | 'files'>;
    cardTitle: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    hasNotch: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTimeline extends Struct.ComponentSchema {
  collectionName: 'components_blocks_timelines';
  info: {
    description: '';
    displayName: 'Timeline';
  };
  attributes: {
    anchor: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'components.card', true>;
    content: Schema.Attribute.RichText;
    hasNotch: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsCard extends Struct.ComponentSchema {
  collectionName: 'components_components_cards';
  info: {
    description: '';
    displayName: 'Card';
    icon: 'grid';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images' | 'files'>;
    button: Schema.Attribute.Component<'components.link', false>;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    iconSize: Schema.Attribute.Enumeration<['sm', 'md', 'lg']>;
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
      'blocks.banner': BlocksBanner;
      'blocks.cards': BlocksCards;
      'blocks.features': BlocksFeatures;
      'blocks.grid-list': BlocksGridList;
      'blocks.hero': BlocksHero;
      'blocks.highlight': BlocksHighlight;
      'blocks.stats': BlocksStats;
      'blocks.team': BlocksTeam;
      'blocks.timeline': BlocksTimeline;
      'components.card': ComponentsCard;
      'components.link': ComponentsLink;
    }
  }
}
