
# React Native Timer

Timer is a simple countdown app fully build with react native. On the app, you can add, remove and run timers.

<img src="https://i.ibb.co/82NsYq9/Print.png" alt="App print" height="300" />

You can download the latest APK build here: https://github.com/mwss1996/react-native-timer/raw/master/release/Timer.apk


Technical details:

- The app is written in React Native;

   - Class components only are used when a deeper control over the rendering process is required;

-  It follows a strict container pattern to better separate logic and presentation:

   - Container components contain all the app logic, and only logic. They are not allowed to have any UI details.

   - One container should take care of only one operation. One screen can combine multiple containers to compose all his functions.

   - Presentational components only have UI related things, they are not allowed to have any logic or access the store.

   - Presentational components are not allowed to include container components, they only can receive a container component by props.

- It uses Redux to manage its states;

   - The redux store state is normalized to avoid data duplication;

   -  All the reducers receive the full state, this is necessary because actions on a normalized state often require to update multiple parts of the state object;

- There are 14 tests covering all the functions from the presentational components;

   - These tests are written to take just the component behavior in consideration, this way the interface can be updated easily;
