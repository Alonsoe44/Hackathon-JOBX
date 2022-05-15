import GiftListCard, { GiftListCardProps } from "../components/GiftListCard";
import { ComponentMeta, ComponentStory } from "@storybook/react";
export default {
  title: "Components/GiftListCard",
  component: GiftListCard,
  argTypes: {
    action: { action: "Handles click" },
  },
} as ComponentMeta<typeof GiftListCard>;

const Template: ComponentStory<typeof GiftListCard> = (args) => (
  <GiftListCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  description: "Normal gift list card",
  etiquettes: ["funny", "playfull"],
  title: "The amazing card",
  action: () => {
    console.log("click");
  },
} as GiftListCardProps;

export const ToMuchText = Template.bind({});
ToMuchText.args = {
  description:
    "Sometimes people needs to write a lot of thing to have an accurate description about a product, that sometimes can break a ui component, that's why we need to thinka about all the edge cases",
  etiquettes: ["funny", "playfull"],
  title: "The amazing card",
  action: () => {
    console.log("click");
  },
} as GiftListCardProps;
