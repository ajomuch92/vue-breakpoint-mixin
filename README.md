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
| sizeType | xsm, sm, m, l or xl values (depending of the window size) |

You can change any of these values on created or mounted method to custom the watcher.

**Computed**
|  Name | Description   |
| ------------ | ------------ |
| isMobile | Compares screen width with smBreakpoint (as max-width smBreakpoint) |
| isTablet | Compares screen width with mBreakpoint and lBreakpoint (as min-width mBreakpoint or lBreakpoint)  |
| isDesktop | Compares screen width with lBreakpoint  and xlBreakpoint (as min-width lBreakpoint  or xlBreakpoint)  |

## Author
This library is created by [Aarón Montes](https://github.com/ajomuch92 "Aarón Montes"). 

## License
MIT
