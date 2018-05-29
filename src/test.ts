// This file is required by karma.conf.js and loads recursively all the .spec and framework files
// The angular-cli configuration of karma uses the file “test.ts” as the entry point of the tests for the application.
// An environment to run angular tests is being created using all the imports at the begging of the file.
// TestBed is a powerful unit testing tool provided by angular, and it is initialized in this file.
// Finally, karma loads all the tests files of the application matching their names against a
// regular expression. All files inside our app folder that has “spec.ts” on its name are considered a test.

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
