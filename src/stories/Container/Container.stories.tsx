import { Meta, StoryObj } from "@storybook/react";
import { Container } from "../../components/Container/Container";

export default {
    title: "templates/Container",
    component: Container ,
    argTypes: {},
} as Meta<typeof Container >;

type Story = StoryObj<typeof Container >;

const base: any = {
//   sampleTextProp: "Hello world!",
};

export const mockContainerProps = {
    base,
};

export const Base: Story = {
    args: mockContainerProps.base,
    parameters: {},
    play: () => {
    },
};