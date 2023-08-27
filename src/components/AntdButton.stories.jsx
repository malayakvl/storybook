import { AntdButton } from "./AntdButton.jsx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: 'AntD Button',
    component: AntdButton,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        primary: true,
        label: 'AntdButton',
    },
};

export const Secondary = {
    args: {
        label: 'AntdButton',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: 'AntdButton',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: 'AntdButton',
    },
};
