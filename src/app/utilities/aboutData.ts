import { AboutProps } from './dataTypes';

export const useAboutData = () => {
  const aboutData: AboutProps[] = [
    {
      id: '1',
      heading: 'What is IDEA?',
      content: [
        'Idea is a critical tool for product discovery, showing the art of the possible, and providing a shop floor for Identity to showcase the value our infrastructure can bring to the wider business. It has been built to be versatile, scalable and able to pivot at short notice.',
      ],
    },
    {
      id: '2',
      heading: 'What are the aims?',
      content: [
        'To visualise the Sky Identity roadmap.',
        'To build the future.',
        'To establish viable, customer-friendly journeys that maximise user experience and minimise the need for contact centre intervention.',
      ],
    },
    {
      id: '3',
      heading: 'How are they achieved?',
      content: [
        `Using atomic design principles makes our codebase scalable, reusable and easy to navigate.`,
        `We base our app on UX designs that are the product of ongoing research and user feedback.`,
        `Small cross-functional team able to pivot at short notice`,
        `No dedicated backend means less complexity and fewer dependencies, however we are able to integrate with existing Identity services where appropriate and required.`,
      ],
    },
    {
      id: '4',
      heading: 'The team behind the app',
      content: [
        `Team name: Caelus`,
        `Scrum Master: Aamer Younas`,
        `Product owner: Deryn Cullen`,
        `Developers: Mustafa Habashi, Mohammad Shafiul Mirza, Joshlin Raposo, Gokula Selvan`,
      ],
    },
  ];

  return { aboutData };
};
