import GiftListCard from "../components/GiftList";
export default {
  title: "Gift list card",
  component: GiftListCard,
};

const Template = (args: any) => <GiftListCard {...args} />;

export const Normal: any = Template.bind({});

Normal.args = {
  description: "Normal gift list card",
  etiquettes: ["funny", "playfull"],
  title: "The amazing card",
};
