import {MantineProvider} from '@mantine/core';
import {NotificationsProvider} from '@mantine/notifications';

export const BaseTheme = (props: any) => {
    return (<MantineProvider
        theme={{
            // Override any other properties from default theme
            fontFamily: 'Lato, sans-serif',
            spacing: {xs: 8, sm: 16, md: 24, lg: 32, xl: 40},
            colors: {
                primary: ['#ececfa', '#9f9fe5', '#8c8cdf', '#7979da', '#6565d5', '#5252cf', '#3f3fca', '#3939b6', '#5252cf', '#3232a2'],
                secondary: ['#fef4ed', '#fcc8a3', '#fbbc90', '#fbb17e', '#faa66b', '#fa9b59', '#f99046', '#faa66b', '#e0823f', '#c77338'],
            },
            primaryColor: 'primary',
        }}
    >
        <NotificationsProvider>
            {props.children}
        </NotificationsProvider>
    </MantineProvider>)
};
