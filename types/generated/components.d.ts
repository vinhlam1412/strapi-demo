import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_components_case_studies';
  info: {
    displayName: 'CaseStudy';
  };
  attributes: {
    Challenge: Schema.Attribute.Text;
    client: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    Result: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsClientLogo extends Struct.ComponentSchema {
  collectionName: 'components_components_client_logos';
  info: {
    displayName: 'ClientLogo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface ComponentsFeature extends Struct.ComponentSchema {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    ctaViewDetail: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    featureItem: Schema.Attribute.Component<'components.feature-detail', true>;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFeatureDetail extends Struct.ComponentSchema {
  collectionName: 'components_components_feature_details';
  info: {
    displayName: 'FeatureDetail';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentsIntroduction extends Struct.ComponentSchema {
  collectionName: 'components_components_introductions';
  info: {
    displayName: 'Introduction';
  };
  attributes: {
    ctaDiscoverMore: Schema.Attribute.Component<'shared.link', false>;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.Blocks;
    virtualElement: Schema.Attribute.Component<
      'components.virtual-element',
      true
    >;
    virtualHeading: Schema.Attribute.String;
  };
}

export interface ComponentsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_components_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    author: Schema.Attribute.String;
    position: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      >;
  };
}

export interface ComponentsVirtualElement extends Struct.ComponentSchema {
  collectionName: 'components_components_virtual_elements';
  info: {
    displayName: 'virtualElement';
  };
  attributes: {
    key: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
    socialLinks: Schema.Attribute.Component<'shared.logo-link', true>;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutFooterBlock extends Struct.ComponentSchema {
  collectionName: 'components_layout_footer_blocks';
  info: {
    displayName: 'FooterBlock';
  };
  attributes: {
    link: Schema.Attribute.String;
    logo_footer: Schema.Attribute.Media<'images'>;
    social_icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SectionCaseStudySection extends Struct.ComponentSchema {
  collectionName: 'components_section_case_study_sections';
  info: {
    displayName: 'CaseStudy Section';
  };
  attributes: {
    caseStudy: Schema.Attribute.Component<'components.case-study', true>;
    ctaRead: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionClientSection extends Struct.ComponentSchema {
  collectionName: 'components_section_client_sections';
  info: {
    displayName: 'Client Section';
    icon: 'heart';
  };
  attributes: {
    clientLogo: Schema.Attribute.Component<'components.client-logo', true>;
    description: Schema.Attribute.Text;
    testimonial: Schema.Attribute.Component<'components.testimonials', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_banners';
  info: {
    displayName: 'HeroBanner';
  };
  attributes: {
    backgroundMedia: Schema.Attribute.Media<'images'>;
    card: Schema.Attribute.Component<'shared.card', true>;
    primaryCTA: Schema.Attribute.Component<'shared.link', false>;
    secondaryCTA: Schema.Attribute.Component<'shared.link', false>;
    slogan: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionIntroductionSection extends Struct.ComponentSchema {
  collectionName: 'components_section_introduction_sections';
  info: {
    displayName: 'Introduction Section';
    icon: 'message';
  };
  attributes: {
    description: Schema.Attribute.Text;
    introduction: Schema.Attribute.Component<'components.introduction', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_section_service_sections';
  info: {
    displayName: 'Service Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'components.feature', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    primaryCTA: Schema.Attribute.Component<'shared.link', false>;
    secondaryCTA: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.case-study': ComponentsCaseStudy;
      'components.client-logo': ComponentsClientLogo;
      'components.feature': ComponentsFeature;
      'components.feature-detail': ComponentsFeatureDetail;
      'components.introduction': ComponentsIntroduction;
      'components.testimonials': ComponentsTestimonials;
      'components.virtual-element': ComponentsVirtualElement;
      'layout.footer': LayoutFooter;
      'layout.footer-block': LayoutFooterBlock;
      'layout.header': LayoutHeader;
      'section.case-study-section': SectionCaseStudySection;
      'section.client-section': SectionClientSection;
      'section.hero-banner': SectionHeroBanner;
      'section.introduction-section': SectionIntroductionSection;
      'section.service-section': SectionServiceSection;
      'shared.card': SharedCard;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
    }
  }
}
