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
    orientation: '',
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
      const { innerWidth, innerHeight } = window;
      this.windowWidth = innerWidth;
      this.windowHeight = innerHeight;
      const orientation = window.matchMedia('(orientation: landscape)');
      this.orientation = orientation.matches ? 'landscape' : 'portrait';
      const xxlResult = innerWidth >= this.xlBreakpoint;
      const xlResult = this.inRange(this.lBreakpoint, this.xlBreakpoint, innerWidth);
      const lResult = this.inRange(this.mBreakpoint, this.lBreakpoint, innerWidth);
      const mResult = this.inRange(this.smBreakpoint, this.mBreakpoint, innerWidth);
      const smResult = this.inRange(this.xsmBreakpoint, this.smBreakpoint, innerWidth);
      const xsmResult = innerWidth < this.xsmBreakpoint;
      if (xxlResult) {
        this.sizeType = 'xxl';
      } else if (xlResult) {
        this.sizeType = 'xl';
      } else if (lResult) {
        this.sizeType = 'l';
      } else if (mResult) {
        this.sizeType = 'm';
      } else if (smResult) {
        this.sizeType = 'sm';
      } else if (xsmResult) {
        this.sizeType = 'xsm';
      }
    },
    inRange(minValue, maxValue, value) {
      return minValue <= value && value < maxValue;
    }
  }
}