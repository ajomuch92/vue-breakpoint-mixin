export default {
  data: () => ({
    sizeType: '',
    xlBreakpoint: 1408,
    lBreakpoint: 1216,
    mBreakpoint: 1024,
    smBreakpoint: 768,
    xsmBreakpoint: 375,
    windowWidth: undefined,
    windowHeight: undefined,
  }),
  mounted () {
    window.addEventListener('resize', this.resizeHandler);
    this.resizeHandler();
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeHandler);
  },
  computed: {
    isMobile () {
      return ['sm', 'xsm'].includes(this.sizeType);
    },
    isTablet () {
      return this.sizeType === 'm';
    },
    isDesktop () {
      return ['xxl', 'xl', 'l'].includes(this.sizeType);
    }
  },
  methods: {
    resizeHandler () {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
      const xxlResult = window.matchMedia(`(min-width: ${this.xlBreakpoint}px`);
      const xlResult = window.matchMedia(`(min-width: ${this.lBreakpoint}px) and (max-width: ${this.xlBreakpoint - 1}px)`);
      const lResult = window.matchMedia(`(min-width: ${this.mBreakpoint}px) and (max-width: ${this.lBreakpoint - 1}px)`);
      const mResult = window.matchMedia(`(min-width: ${this.smBreakpoint + 1}px) and (max-width: ${this.mBreakpoint - 1}px)`);
      const smResult = window.matchMedia(`(min-width: ${this.xsmBreakpoint + 1}px) and (max-width: ${this.smBreakpoint}px)`);
      const xsmResult = window.matchMedia(`(max-width: ${this.xsmBreakpoint}px)`);
      if (xxlResult.matches) {
        this.sizeType = 'xxl';
      } else if (xlResult.matches) {
        this.sizeType = 'xl';
      } else if (lResult.matches) {
        this.sizeType = 'l';
      } else if (mResult.matches) {
        this.sizeType = 'm';
      } else if (smResult.matches) {
        this.sizeType = 'sm';
      } else if (xsmResult.matches) {
        this.sizeType = 'xsm';
      }
    }
  }
}