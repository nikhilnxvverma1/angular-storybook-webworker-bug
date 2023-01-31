# Angular Storybook web worker bug reproduction
This repo is a fresh install of storybook on angular(v14). After configuring everything, it demonstrates the errors that arise as a result of using webworkers with storybook.

Most of the errors take the form of typescript conflicts and typing dissatisfications. I have narrowed down the details further in **src/web-worker-stuff/caller.worker.ts**

Turning off this one line fixes the bug. But then we lose web worker support

```
/// <reference lib="webworker" /> 
```

PS: I have tested this both in angular v14 as well as angular v15

# How to reproduce the bug
1. cd _DIRECTORY_
2. npm install
3. npm run storybook

Keep in mind the regular application(lets say ``` ng serve ```) runs just fine.