import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeState', [
      // transition('*=>*', [
      //   group([
      //     query(
      //       ':enter',
      //       [
      //         // animateChild(),
      //         style({
      //           transform: 'translateY(-400px)',
      //           opacity: 0,
      //         }),
      //         animate('2000ms ease-out'),
      //       ],
      //       { optional: true }
      //     ),
      //     query(
      //       ':leave',
      //       [
      //         animate(
      //           '2000ms ease-out',
      //           style({
      //             transform: 'translateY(600px)',
      //             opacity: 0,
      //           })
      //         ),
      //       ],
      //       { optional: true }
      //     ),
      //   ]),
      // ]),
      transition('rootPage=>usersPage', [
        group([
          query(
            ':enter',
            [
              // animateChild(),
              style({
                transform: 'translateY(-400px)',
                opacity: 0,
              }),
              animate('2000ms ease-out'),
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [
              animate(
                '2000ms ease-out',
                style({
                  transform: 'translateY(600px)',
                  opacity: 0,
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
      transition('usersPage=>rootPage', [
        group([
          query(
            ':enter',
            [
              // animateChild(),
              style({
                transform: 'translateY(-400px)',
                opacity: 0,
              }),
              animate('2000ms ease-out'),
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [
              animate(
                '2000ms ease-out',
                style({
                  transform: 'translateY(600px)',
                  opacity: 0,
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  getAnimationData(outlet: RouterOutlet) {
    const routerData = outlet.activatedRouteData['animation'];
    if (!routerData) {
      return 'rootPage';
    }
    return routerData['page'];
  }
}
