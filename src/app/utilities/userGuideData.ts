import { ContentProps, UserGuideProps } from './dataTypes';

export const useUserGuide = () => {
  const guide: UserGuideProps[] = [
    {
      id: '1',
      heading: 'Overview',
      data: [
        {
          cid: '1.1',
          content: `This guide is to assist with use and navigation of the IDEA mobile app, and to clarify which parts of the app are 'just for show' IDEA exists to show the ‘art of the possible’. The content past the first two menu screens is a collection of enhanced (and in some cases entirely new) journeys within Sky apps such as MySky and SkyGo. Users are given an authentic and meaningful experience of these journeys within a working user interface.`,
        },
      ],
    },
    {
      id: '2',
      heading: 'General Comments',
      data: [
        {
          cid: '2.1',
          content: `If you did not allow notifications from the app when you first opened it, or you're not sure, go to your device settings -> notifications -> IDEA and make sure they're enabled.`,
        },
        {
          cid: '2.2',
          content: `Once past the initial 2 menu screens, the Sky logo in the header can be used to return to the IDEA home screen. Use the x button in the headers to return to the journey menu.`,
        },
        {
          cid: '2.3',
          content: `The app does not store any data beyond an existing session. If you want to clear data you've entered (e.g. username/ email address), close the app and reopen it.`,
        },
      ],
    },
    {
      id: '3',
      heading: 'Navigation and Access',
      data: [
        {
          cid: '3.1',
          content: `In the IDP sign in journey, enter an email address (any typical format) or a username (no numbers and no special characters except for - or ').`,
        },
        {
          cid: '3.2',
          content: `Anything outside of the above limitations will trigger an error message.`,
        },
        {
          cid: '3.3',
          content: `To see the error triggered for an invalid email address, enter invalid@test.com.`,
        },
        {
          cid: '3.4',
          content: `Create an account – anything you enter here will be used for the duration of the app session, and can be modified in some of the journeys.`,
        },
        {
          cid: '3.5',
          content: `Non functional links: Forgotten your email or password, Sky Terms and conditions, Privacy & Cookies and Keep me signed in.`,
        },
        {
          cid: '3.6',
          content: `The My Details journeys bypass the sign in screens and take you straight to account management options. You will enter the app as Super User with default profile information, which you can modify.`,
        },
      ],
    },
    {
      id: '4',
      heading: 'Accessibility',
      data: [
        {
          cid: '4.1',
          content: `Throughout development, attention has been paid to making this app as widely accessible as possible. All screens are regularly tested with a screen reader and for responsiveness on different mobile devices. Users’ individual settings are respected.`,
        },
      ],
    },
  ];

  return { guide };
};
