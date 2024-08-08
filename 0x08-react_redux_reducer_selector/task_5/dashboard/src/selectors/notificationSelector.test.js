import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notificationSelector tests', () => {

  const state = {
    notifications: {
      filter: 'unread',
      notifications: [
        { id: 1, message: 'Notification 1', isRead: true },
        { id: 2, message: 'Notification 2', isRead: false },
        { id: 3, message: 'Notification 3', isRead: false },
      ]
    }
  };

  test('filterTypeSelected works as expected', () => {
    const result = filterTypeSelected(state);
    expect(result).toBe('unread');
  });

  test('getNotifications returns a list of the message entities within the reducer', () => {
    const result = getNotifications(state);
    expect(result).toEqual([
      { id: 1, message: 'Notification 1', isRead: true },
      { id: 2, message: 'Notification 2', isRead: false },
      { id: 3, message: 'Notification 3', isRead: false },
    ]);
  });

  test('getUnreadNotifications returns a list of the unread message entities within the reducer', () => {
    const result = getUnreadNotifications(state);
    expect(result).toEqual([
      { id: 2, message: 'Notification 2', isRead: false },
      { id: 3, message: 'Notification 3', isRead: false },
    ]);
  });

});
