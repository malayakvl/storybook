import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "antd";
import * as AntdIcons from '@ant-design/icons';
import Icon from "@ant-design/icons";
import { CustomFireSvg } from "./icons/index";

/**
 * Primary UI component for user interaction
 */
export const AntdButton = ({ primary, iconName, iconBefore, iconAfter, shape, backgroundColor, size, label, labelCounter, ...props }) => {
    const AntButtonIcon = AntdIcons[iconName];

    const BtnIcon = (props) => <Icon component={CustomFireSvg} {...props} />;

    return (
        <Button
            type={primary ? "primary" : ""}
            style={{ backgroundColor: backgroundColor }}
            size={size}
            shape={shape ? shape : "round"}
            icon={iconBefore ? <AntButtonIcon style={{ display: 'flex', alignContent: 'center', width: '100%'}} /> : null}
            {...props}
        >
            { label }
            {labelCounter && <em style={{fontStyle: 'normal', marginRight: '5px', opacity: '0.5'}}>{labelCounter ? ` / ${labelCounter}` : ''}</em>}
            {iconAfter && <BtnIcon
                style={{
                    color: 'white',
                }}
            />}
        </Button>
    );
};

AntdButton.propTypes = {
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
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Button counter
     */
    labelCounter: PropTypes.string,
    /**
     * Icon name
     */
    iconName: PropTypes.oneOf(['FireFilled', 'DownCircleFilled', 'PlusOutlined']),
    /**
     * Icon before
     */
    iconBefore: PropTypes.bool,
    /**
     * Icon before
     */
    iconAfter: PropTypes.bool,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

AntdButton.defaultProps = {
    backgroundColor: '#5850EC',
    primary: false,
    iconName: 'FireFilled',
    iconBefore: false,
    iconAfter: false,
    size: 'medium',
    onClick: undefined,
};
