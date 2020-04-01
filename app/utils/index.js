import persian from 'persianjs'

export const isAP =
  WEB_ENV === 'AP'

export const isJEK =
  WEB_ENV === 'JEK'

export const isAPWA =
  WEB_ENV === 'APWA'

export const C = {
  VENDOR_ITEM_WIDTH: 2.3,
  SERVICE_ITEM_WIDTH: 4,
  TEHRAN_LOCATION: {
    lat: 35.6892,
    long: 51.389,
  },
}

export const isSuperMarket = vendorType =>
  vendorType ===
  'SUPERMARKET_TEST'

export const toEnglish = val =>
  persian(val)
    .toEnglishNumber()
    .toString()

export const toPersian = val =>
  persian(val)
    .englishNumber()
    .toString()
