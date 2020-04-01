import {Helmet} from 'react-helmet'

export default (content, extractor, state) => {
  const helmet = Helmet.renderStatic()
  return `
  <!DOCTYPE html>
    <html dir="rtl" lang="fa">
    <head>
      ${googleTag}
      ${title}
      ${meta}
      ${link}
      ${extractor.getLinkTags()}
      ${extractor.getStyleTags()}
      ${noscript}
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${helmet.style.toString()}
      ${helmet.script.toString()}
      ${helmet.noscript.toString()}
    </head>
    <body>
      <div id="app">${content}</div>
      <script>
        window.__STATE__ = ${JSON.stringify(state)}
      </script>
      ${extractor.getScriptTags()}         
    </body>
    </html>
  `
}

const googleTag = `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WMR86GC')</script>`

const title = `<title>سفارش آنلاین غذا از بهترین رستوران ها و فست فود های تهران | اسنپ‌فود</title>`

const meta = `
  <meta http-equiv="Content-Type" content="text/html;" charset="utf-8" />
  <meta name="theme-color" content="#ED0C6F" />
  <<!--meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <meta name="keywords" content="رستوران های تهران ،رستوران های مشهد ، رستوران های اصفهان ، رستوران های تبریز ،رستوران های کرج ،رستوران های اهواز ، نان سحر، سولدوش، عروس لبنان، شیرینی کوک، قنادی ناتلی، کوکی باکس، شیرینی پوپک، تارتلت، میلاوه‌، سفارش آنلاین کیک، سفارش آنلاین شیرینی، شیرینی خانگی، شیرینی ایرانی، شیرینی عربی، کیک، شیرینی، ژله، نان، خامه، دسر، شکلات، رستوران های پردیس ،رستوران های شهریار ، رستوران های رشت ، رستوران های کاشان, رستوران , رستوران های تهران, لازانیا, تیرامیسو, دسر, شله زرد, انواع کباب, انواع ساندویچ, انواع پیتزا, سفارش اینترنتی غذای سنتی, غذای خانگی, غذای ایرانی, کباب, پیتزا, ساندویچ, رستوران, تهران, رستوران های, اینترنت, انلاین, سفارش آنلاین, سفارش غذا در ایران, ایران, غذاهای دریایی, غذا, سنتی, خانگی, ساندویچ های گرم, ساندویچ های سرد, پیتزا ایتالیایی, رستوران ایتالیایی, سفره خانه, رستوران های ایرانی, رستوران ایرانی, رستوران های فرنگی, رستوران فرنگی, خرید آنلاین, پرداخت آنلاین, شبکه رستوران ها, فست فود, فست فود, زود فود و اسنپ، اسنپ فود ، سرویس جدید اسنپ ، اسنپ غذا ، اسنپ سفارش غذا ، سفارش غذا در اسنپ ، ارسال غذا ، زودفود و اسنپ ، اسنپ فود ، اسنپفود،سفارش غذا با اسنپ" />
  <meta name="description" content="اسنپ فود سایت سفارش آنلاین غذا از بهترین رستوران های تهران، سفارش آنلاین کیک و شیرینی، سوپرمارکت آنلاین و سفارش آنلاین از کافی شاپ است." />-->
  <meta http-equiv="Accept-CH" content="DPR,Viewport-Width,Width" />
  <meta http-equiv="Cache-Control" content="no-store" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="snappfood" content="snappfood" />
  <meta name="google-site-verification" content="voSoozouuCknw0hzLJEt4LL3WM8V2iPFuRIYyZ-qnis" />
`

const link = `
  <link rel="icon" href="./images/favicon.ico" />
  <link rel="preload" href="https://snappfood.ir/pwa/assets/fonts/IRANSansMobile.ttf" as="font" type="font/ttf" crossorigin />
  <link rel="preload" href="https://snappfood.ir/pwa/assets/fonts/IRANSansMobile_Bold.ttf" as="font" type="font/ttf" crossorigin />
  <link rel="preload" href="https://snappfood.ir/pwa/assets/fonts/snappfood.ttf" as="font" type="font/ttf" crossorigin />
  <link rel="canonical" href="https://snappfood.ir" />
  <link rel="preconnect" href="https://sentry.snappfood.ir" />
  <link rel="preconnect" href="https://cdn.snappfood.ir" />
  <link rel="preconnect" href="https://static.zoodfood.com" />
  <link rel="preconnect" href="https://static.snapp-food.com" />
  <link rel="preconnect" href="https://www.google-analytics.com" />
  <link rel="preconnect" href="https://snappfood.ir" />
  <link rel="preconnect" href="https://s1.mediaad.org" />
  <link rel="preconnect" href="https://ua.yektanet.com" />
  <link rel="preconnect" href="https://foodparty.snappfood.ir" />
  <link rel="preconnect" href="https://www.googletagmanager.com" />
`

const noscript = `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WMR86GC" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><noscript>Please enable javascript.</noscript>`
