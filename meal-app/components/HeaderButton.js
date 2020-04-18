import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';

import Colors from '../constans/Colors';

const CustomHeaderButton = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={ Platform.OS === 'android' ? 'white' : Colors.primaryCollors}
        />
    )
}

export default CustomHeaderButton;

