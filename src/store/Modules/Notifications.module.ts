import { stateBuilder } from './store_config/store.config';
import { INotificationState, INotification } from '@models';

import { timeout } from '@methods';

const TIMEOUT: number = 5000;

//State
const state: INotificationState = {
  notificationCount: 0,
  notificationList: [],
};

const b = stateBuilder<INotificationState>(state, 'NotificationsModule');
const stateGetter = b.state();

// Getters

// Mutations
namespace Mutations {
  function addNotification(state: INotificationState, alert: INotification) {
    state.notificationList.push(alert);
    state.notificationCount++;
  }
  function deleteNotification(state: INotificationState, alert: INotification) {
    var index = state.notificationList.findIndex(element => element.id === alert.id);
    if (index !== -1) {
      state.notificationList.splice(index, 1);
    }
  }

  export const mutations = {
    addNotification: b.commit(addNotification),
    deleteNotification: b.commit(deleteNotification),
  };
}

// Actions
namespace Actions {
  async function addNotification(context, alert: INotification) {
    alert = {
      ...alert,
      id: state.notificationCount,
      isNotif: alert.isNotif || false,
      link: 'zad',
    };
    NotificationsModule.mutations.addNotification(alert);
    await timeout(TIMEOUT);
    NotificationsModule.mutations.deleteNotification(alert);
  }

  export const actions = {
    addNotification: b.dispatch(addNotification),
  };
}

// Module declaration
export const NotificationsModule = {
  get state() {
    return b.state()();
  },
  actions: Actions.actions,
  mutations: Mutations.mutations,
};
