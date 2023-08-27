import { AntdIconButton} from "./AntdIconButton.jsx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: 'AntD Icon Button',
    component: AntdIconButton,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        primary: true,
        label: 'AntdIconButton',
    },
};

export const Secondary = {
    args: {
        size: 'medium',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: '',
    },
};

export const Small = {
    args: {
        size: 'small',
    },
};
