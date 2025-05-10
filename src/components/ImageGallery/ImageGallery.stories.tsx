import type { Meta, StoryObj } from '@storybook/react';

import ImageGallery from './index';

const meta = {
  title: 'Example/ImageGallery',
  component: ImageGallery,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    containerWidth: 500
  },
} satisfies Meta<typeof ImageGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneImage: Story = {
    args: {
        images: [
            "https://thumbs.dreamstime.com/b/self-employed-business-woman-working-her-home-office-selling-product-online-shop-127193282.jpg?w=768"
        ]
    },
};

export const TwoImages: Story = {
    args: {
        images: [
            "https://thumbs.dreamstime.com/b/self-employed-business-woman-working-her-home-office-selling-product-online-shop-127193282.jpg?w=768",
            "https://thumbs.dreamstime.com/b/fashion-sensual-pretty-woman-sunglasses-posing-outdoors-city-49642468.jpg?w=768"
        ]
    },
};

export const TwoImagesBis: Story = {
    args: {
        images: [
            "https://thumbs.dreamstime.com/b/young-woman-taking-care-cows-barn-ordinary-focus-grass-129103626.jpg?w=768",
            "https://thumbs.dreamstime.com/b/fashion-sensual-pretty-woman-sunglasses-posing-outdoors-city-49642468.jpg?w=768"
        ]
    },
};

export const ThreeImages: Story = {
    args: {
        images: [
            "https://thumbs.dreamstime.com/b/young-woman-taking-care-cows-barn-ordinary-focus-grass-129103626.jpg?w=768",
            "https://thumbs.dreamstime.com/b/hand-asian-sporty-woman-putting-golf-ball-tee-club-golf-course-evening-time-healthy-sport-lifestyle-sport-147127125.jpg?w=768",
            "https://thumbs.dreamstime.com/b/anonymous-girl-crowded-suitcase-going-vacation-travel-unrecognizable-young-girl-presses-her-foot-crowded-suitcase-175974142.jpg?w=768"
        ]
    },
};

export const FourImages: Story = {
    args: {
        images: [
            "https://thumbs.dreamstime.com/b/young-woman-taking-care-cows-barn-ordinary-focus-grass-129103626.jpg?w=768",
            "https://thumbs.dreamstime.com/b/hand-asian-sporty-woman-putting-golf-ball-tee-club-golf-course-evening-time-healthy-sport-lifestyle-sport-147127125.jpg?w=768",
            "https://thumbs.dreamstime.com/b/girl-dog-happy-beautiful-blond-corgi-fluffy-have-fun-posing-camera-130963631.jpg?w=768",
            "https://thumbs.dreamstime.com/b/let-s-go-travel-enjoy-every-moment-text-realistic-shoes-hat-passport-phone-camera-vacation-blue-background-let-s-117416564.jpg?w=768"
        ]
    },
};

export const FiveImages: Story = {
    args: {
        images: [
            "https://thumbs.dreamstime.com/b/hand-asian-sporty-woman-putting-golf-ball-tee-club-golf-course-evening-time-healthy-sport-lifestyle-sport-147127125.jpg?w=768",
            "https://thumbs.dreamstime.com/b/girl-dog-happy-beautiful-blond-corgi-fluffy-have-fun-posing-camera-130963631.jpg?w=768",
            "https://thumbs.dreamstime.com/b/let-s-go-travel-enjoy-every-moment-text-realistic-shoes-hat-passport-phone-camera-vacation-blue-background-let-s-117416564.jpg?w=768",
            "https://thumbs.dreamstime.com/b/young-woman-taking-care-cows-barn-ordinary-focus-grass-129103626.jpg?w=768",
            "https://thumbs.dreamstime.com/b/anonymous-girl-crowded-suitcase-going-vacation-travel-unrecognizable-young-girl-presses-her-foot-crowded-suitcase-175974142.jpg?w=768",
        ]
    },
};