export default {
  // hostname: "https://newapi.zoodfood.com",
  hostname: 'https://snappfood.ir',
  // hostname: "https://staging.snappfood.ir",

  timeout: 10000,
  validateStatus: status => status >= 200 && status < 302,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  endpoints: [
    {
      key: 'getVendors',
      url: '/mobile/v2/restaurant/vendors-list',
      method: 'GET',
    },
    {
      key: 'getMoreVendors',
      url: '/mobile/v2/restaurant/advanced-search',
      method: 'GET',
    },
    {
      key: 'getFavouriteVendors',
      url: '/mobile/v2/restaurant/favorites',
      method: 'POST',
    },
    {
      key: 'addToFavouriteVendors',
      url: '/mobile/v2/restaurant/favorite/update',
      method: 'POST',
    },
    {
      key: 'getComments',
      url: '/mobile/v1/restaurant/vendor-comment',
      method: 'GET',
    },
    {
      key: 'getAreaByLatLong',
      url: '/mobile/v2/area/getAreaByLatLong',
      method: 'GET',
    },
    {
      key: 'getVendorDetails',
      url: '/mobile/v2/restaurant/new-details',
      method: 'GET',
    },
    {
      key: 'getZooketDetails',
      url: '/mobile/v2/restaurant/zooket-details',
      method: 'GET',
    },
    {
      key: 'getZooketProducts',
      url: '/mobile/v2/product-variation/index',
      method: 'GET',
    },
    {
      key: 'getVendorFilters',
      url: '/mobile/v2/restaurant/filters',
      method: 'GET',
    },
    {
      key: 'loginMobileWithNoPass',
      url: '/mobile/v2/user/loginMobileWithNoPass',
      method: 'POST',
    },
    {
      key: 'loginMobileWithToken',
      url: '/mobile/v2/user/loginMobileWithToken',
      method: 'POST',
    },
    {
      key: 'loginMobileWithPass',
      url: '/mobile/v2/user/loginMobileWithPass',
      method: 'POST',
    },
    {key: 'profile', url: '/mobile/v2/user/profile', method: 'GET'},
    {key: 'editProfile', url: '/mobile/v1/user/edit', method: 'POST'},
    {key: 'reviews', url: '/mobile/v1/user/reviews', method: 'POST'},
    {
      key: 'imageSliders',
      url: '/mobile/v1/user/imageSliders',
      method: 'POST',
    },
    {
      key: 'orderHistory',
      url: '/mobile/v1/order/new-history',
      method: 'GET',
    },
    {
      key: 'increaseCredit',
      url: '/mobile/v2/user/credit/increase',
      method: 'POST',
    },
    {key: 'logout', url: '/mobile/v2/user/logout', method: 'POST'},
    {key: 'editUser', url: '/mobile/v2/user/edit', method: 'POST'},
    {
      key: 'changePassword',
      url: '/mobile/v1/user/password/change',
      method: 'POST',
    },
    {
      key: 'registerWithOptionalPass',
      url: '/mobile/v1/user/registerWithOptionalPass',
      method: 'POST',
    },
    {
      key: 'deleteUserAddress',
      url: '/mobile/v2/user/address/delete',
      method: 'POST',
    },
    {
      key: 'deleteReview',
      url: '/mobile/v1/user/reviews/delete',
      method: 'POST',
    },
    {
      key: 'createUserAddress',
      url: '/mobile/v1/user/address/create',
      method: 'POST',
    },
    {
      key: 'editUserAddress',
      url: '/mobile/v1/user/address/edit',
      method: 'POST',
    },
    {
      key: 'forgetPassword',
      url: '/mobile/v1/user/password/forget',
      method: 'POST',
    },
    {key: 'home', url: '/mobile/v2/user/new-home', method: 'GET'},
    {key: 'cities', url: '/mobile/v2/area/cities', method: 'GET'},
    {key: 'banks', url: '/mobile/v1/order/banks', method: 'POST'},
    {
      key: 'voucherCheck',
      url: '/mobile/v1/order/voucher/check',
      method: 'POST',
    },
    {
      key: 'pendingOrders',
      url: '/mobile/v1/order/userPendingOrders',
      method: 'GET',
    },
    {
      key: 'setDeliverance',
      url: '/mobile/v1/order/setCustomerDeliveredAt',
      method: 'POST',
    },
    {
      key: 'setOrderDelay',
      url: '/mobile/v1/order/setDelayedOrder',
      method: 'POST',
    },
    {
      key: 'getVendorAddress',
      url: '/mobile/v1/user/user-addresses-subscription',
      method: 'GET',
    },
    {
      key: 'getUserAddresses',
      url: '/mobile/v1/user/user-addresses',
      method: 'GET',
    },
    {
      key: 'getOrderInvoice',
      url: '/mobile/v2/order/getOrderInvoiceData',
      method: 'GET',
    },
    {
      key: 'reserveProducts',
      url: '/mobile/v2/restaurant/reserveProduct',
      method: 'POST',
    },
    {key: 'submitOrder', url: '/mobile/v1/order/new', method: 'POST'},
    {
      key: 'getReviewInfo',
      url: '/mobile/v1/order/review/info',
      method: 'GET',
    },
    {
      key: 'submitReview',
      url: '/landing/newReviewSubmit',
      method: 'POST',
    },
    {
      key: 'quickSearch',
      url: '/mobile/v2/restaurant/quick-search',
      method: 'GET',
    },
    {key: 'areaSearch', url: '/mobile/v2/area/search', method: 'GET'},
    {key: 'newSearch', url: '/mobile/v2/search/', method: 'GET'},
    {
      key: 'moreFoods',
      url: '/mobile/v2/product-variation/search',
      method: 'GET',
    },
    {
      key: 'getVendorsWithDish',
      url: '/mobile/v3/restaurant/search',
      method: 'GET',
    },
    {
      key: 'suggestVendors',
      url: '/mobile/v1/restaurant/suggest',
      method: 'POST',
    },
    {
      key: 'getCouponBasedOnBasket',
      url: '/mobile/v1/restaurant/coupons',
      method: 'POST',
    },
    {
      key: 'getProductComments',
      url: '/mobile/v2/restaurant/productReviews',
      method: 'GET',
    },
    {
      key: 'getOrderInfo',
      url: '/mobile/v2/order/getOrderDetailData',
      method: 'GET',
    },
    {
      key: 'getBikerLocation',
      url: '/landing/biker-location',
      method: 'POST',
    },
    {key: 'setAPUser', url: '/mobile/v1/ap/setUser', method: 'POST'},
    {
      key: 'getPaymentResult',
      url: '/mobile/v1/ap/getPaymentResult',
      method: 'POST',
    },
    {
      key: 'getUserPackeges',
      url: '/mobile/v2/user/vip-packages',
      method: 'GET',
    },
    {key: 'buyPackage', url: '/landing/payVIPPlan', method: 'POST'},
    {key: 'snappSSO', url: '/mobile/v2/user/snapp-sso', method: 'GET'},
  ],
  tokenKey: 'login',
}
