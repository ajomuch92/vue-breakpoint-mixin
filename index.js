export default {
  data: () => ({
    sizeType: '',
    xlBreakpoint: 1408,
    lBreakpoint: 1216,
    mBreakpoint: 1024,
    smBreakpoint: 768,
  }),
  created () {
  },
  mounted () {
    window.addEventListener('resize', this.resizeHandler)
    this.resizeHandler()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeHandler)
  },
  computed: {
    isMobile () {
      return ['sm', 'xsm'].includes(this.sizeType)
    },
    isTablet () {
      return ['m', 'l'].includes(this.sizeType)
    },
    isDesktop () {
      return ['xl', 'l'].includes(this.sizeType)
    }
  },
  methods: {
    resizeHandler () {
      const xlResult = window.matchMedia(`(min-width: ${xlBreakpoint}px)`)
      const lResult = window.matchMedia(`(min-width: ${lBreakpoint}px)`)
      const mResult = window.matchMedia(`(min-width: ${mBreakpoint}px)`)
      const smResult = window.matchMedia(`(min-width: ${smBreakpoint}px)`)
      const xsmResult = window.matchMedia(`(max-width: ${smBreakpoint}px)`)
      if (xlResult.matches) {
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