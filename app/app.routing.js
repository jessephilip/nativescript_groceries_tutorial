"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_component_1 = require("./pages/list/list.component");
var login_component_1 = require("./pages/login/login.component");
exports.routes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'list', component: list_component_1.ListComponent }
];
exports.navigatableComponents = [
    list_component_1.ListComponent,
    login_component_1.LoginComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhEQUE0RDtBQUM1RCxpRUFBK0Q7QUFFbEQsUUFBQSxNQUFNLEdBQUc7SUFDcEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ3ZDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtDQUMzQyxDQUFDO0FBRVcsUUFBQSxxQkFBcUIsR0FBRztJQUNuQyw4QkFBYTtJQUNiLGdDQUFjO0NBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2xpc3QvbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG4gIHsgcGF0aDogJycsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgeyBwYXRoOiAnbGlzdCcsIGNvbXBvbmVudDogTGlzdENvbXBvbmVudCB9XG5dO1xuXG5leHBvcnQgY29uc3QgbmF2aWdhdGFibGVDb21wb25lbnRzID0gW1xuICBMaXN0Q29tcG9uZW50LFxuICBMb2dpbkNvbXBvbmVudFxuXTsiXX0=