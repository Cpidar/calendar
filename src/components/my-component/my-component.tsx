import { Component, Prop } from '@stencil/core';
import moment from 'moment-jalaali';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    moment.loadPersian()
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}