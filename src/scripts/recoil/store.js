import { atom } from 'recoil';

export const alertState = atom({ key: 'alertState', default: { open: false, severity: 'error', message: '' } });

export const alertDialogState = atom({
  key: 'alertDialogState',
  default: {
    open: false,
    accept: false,
    handleAccept: () => {},
    title: '',
    bodyText: '',
    acceptText: '',
  },
});

export const loadingState = atom({ key: 'loadingState', default: false });

export const updateData = atom({ key: 'updateData', default: false });

export const accordionChange = atom({ key: 'accordionChange', default: false });
