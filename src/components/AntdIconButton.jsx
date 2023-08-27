import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "antd";
import * as AntdIcons from '@ant-design/icons';

/**
 * Primary UI component for user interaction
 */
export const AntdIconButton = ({ primary, iconName, shape, backgroundColor, size, ...props }) => {
    const AntButtonIcon = AntdIcons[iconName];

    let paddingSpace;
    let marginSpace;
    let borderRadius;
    switch (size) {
        case 'small':
            paddingSpace =  4;
            marginSpace = 4;
            borderRadius = shape === 'round' ? 4 : 16;
            break;
        case 'medium':
            paddingSpace =  8;
            marginSpace = 3;
            borderRadius = shape === 'round' ? 8 : 32;
            break;
        default:
            paddingSpace =  10;
            marginSpace = 3;
            borderRadius = shape === 'round' ? 4 : 16;
            break;
    }

    return (
        <Button
            type={primary ? "primary" : ""}
            style={{ backgroundColor: backgroundColor, paddingInlineStart: `${paddingSpace}px`, paddingInlineEnd: `${paddingSpace}px`, borderRadius: `${borderRadius}px` }}
            size={size}
            shape={shape ? shape : "round"}
            icon={iconName ? <AntButtonIcon style={{ display: 'flex', alignContent: 'center', width: '100%', marginTop: `${marginSpace}px`}} /> : null}
            {...props}
        >
        </Button>
    );
};

AntdIconButton.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * How large should the button be?
     */
    shape: PropTypes.oneOf(['circle', 'round']),
    /**
     * Icon name
     */
    iconName: PropTypes.oneOf(['FireFilled', 'DownCircleFilled', 'PlusOutlined']),
    /**
     * Icon before
     */
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

AntdIconButton.defaultProps = {
    backgroundColor: '#5850EC',
    primary: false,
    iconName: 'PlusOutlined',
    size: 'medium',
    onClick: undefined,
};
