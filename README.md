# Vue Breakpoint Mixin
This package contains a mixin to watch the different breakpoints for responsiveness. It's based on the same braeakpoints from [Bulma](https://bulma.io/documentation/overview/responsiveness/) but you can customize them as you want. See an example [here](https://github.com/ajomuch92/vue-breakpoint-mixin/tree/main/example).

# Instalation

NPM:  
```bash
npm install --save vue-breakpoint-mixin
```
Import into your Vue component and use it:

```javascript
import VueBreakpointMixin from 'vue-breakpoint-mixin';

export default {
  ...
  mixins: [VueBreakpointMixin],
  ...
}

```

**Data**
|  Name | Value   |
| ------------ | ------------ |
| xlBreakpoint | 1408 |
| lBreakpoint | 1216 |
| mBreakpoint | 1024 |
| smBreakpoint | 768 |
| xsmBreakpoint | 375 |
| windowWidth | undefined (indicate the window width) |
| windowHeight | undefined (indicate the window height) |
| sizeType | xsm, sm, m, l, xl or xxl values (depending of the window size) |

You can change any of these values on created or mounted method to custom the watcher.

**Computed**
|  Name | Description   |
| ------------ | ------------ |
| isMobile | if sizeType is xsm or sm |
| isTablet | if sizeType is m |
| isDesktop | if sizeType is l, xl or xxl  |

## Author
This library is created by [Aarón Montes](https://github.com/ajomuch92 "Aarón Montes"). 

## License
MIT


## Development

Want to contribute? Great!. Open a [new PR here](https://github.com/ajomuch92/vue-breakpoint-mixin/pulls) or a [new issue here](https://github.com/ajomuch92/vue-breakpoint-mixin/issues)