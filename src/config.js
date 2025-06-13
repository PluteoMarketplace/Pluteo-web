import * as custom from './marketplace-custom-config.js';
import defaultLocationSearches from './default-location-searches';
import { defaultMCC, stripePublishableKey, stripeCountryDetails } from './stripe-config';
import { currencyConfiguration } from './currency-config';

const env = process.env.REACT_APP_ENV;
const dev = process.env.REACT_APP_ENV === 'development';

const appCdnAssets = {
  translations: 'content/translations.json',
};

const locale = 'en';
const i18n = {
  firstDayOfWeek: 0,
};

const sortSearchByDistance = false;
const bookingProcessAlias = 'flex-default-process/release-1';
const bookingUnitType = 'line-item/night';
const enableAvailability = process.env.REACT_APP_AVAILABILITY_ENABLED === 'true';
const dayCountAvailableForBooking = 90;

const sdkClientId = process.env.REACT_APP_SHARETRIBE_SDK_CLIENT_ID;
const sdkBaseUrl = process.env.REACT_APP_SHARETRIBE_SDK_BASE_URL;
const sdkAssetCdnBaseUrl = process.env.REACT_APP_SHARETRIBE_SDK_ASSET_CDN_BASE_URL;
const sdkTransitVerbose = process.env.REACT_APP_SHARETRIBE_SDK_TRANSIT_VERBOSE === 'true';

const currencyConf = process.env.REACT_APP_SHARETRIBE_MARKETPLACE_CURRENCY;
const currency = currencyConf ? currencyConf.toUpperCase() : currencyConf;
const currencyConfig = currencyConfiguration(currency);

const listingMinimumPriceSubUnits = 0;
const sentryDsn = process.env.REACT_APP_SENTRY_DSN;
const usingSSL = process.env.REACT_APP_SHARETRIBE_USING_SSL === 'true';

const addressCountry = 'AU';
const addressRegion = 'NSW';
const postalCode = '2010';
const streetAddress = '211 Oxford St, Darlinghurst';

const canonicalRootURL = process.env.REACT_APP_CANONICAL_ROOT_URL;

const siteTitle = 'Pluteo – Brand Placement Site';
const siteTwitterHandle = '@pluteomarket';
const siteInstagramPage = 'https://www.instagram.com/pluteomarket/';
const siteFacebookPage = 'https://www.facebook.com/Pluteo/';

const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;

const maps = {
  mapboxAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
  googleMapsAPIKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,

  search: {
    suggestCurrentLocation: process.env.REACT_APP_DEFAULT_SEARCHES_ENABLED === 'true',
    currentLocationBoundsDistance: 1000,
    defaults:
      process.env.REACT_APP_DEFAULT_SEARCHES_ENABLED === 'true' ? defaultLocationSearches : [],
  },

  fuzzy: {
    enabled: false,
    offset: 500,
    defaultZoomLevel: 13,
    circleColor: '#c0392b',
  },

  customMarker: {
    enabled: false,
    url: encodeURI(`${canonicalRootURL}/static/icons/map-marker-32x32.png`),
    width: 32,
    height: 32,
    anchorX: 16,
    anchorY: 32,
  },
};

const config = {
  env,
  dev,
  appCdnAssets,
  locale,
  bookingProcessAlias,
  bookingUnitType,
  enableAvailability,
  dayCountAvailableForBooking,
  i18n,
  sdk: {
    clientId: sdkClientId,
    baseUrl: sdkBaseUrl,
    assetCdnBaseUrl: sdkAssetCdnBaseUrl,
    transitVerbose: sdkTransitVerbose,
  },
  sortSearchByDistance,
  currency,
  currencyConfig,
  listingMinimumPriceSubUnits,
  stripe: {
    defaultMCC: defaultMCC,
    publishableKey: stripePublishableKey,
    supportedCountries: stripeCountryDetails,
  },
  canonicalRootURL,
  address: {
    addressCountry,
    addressRegion,
    postalCode,
    streetAddress,
  },
  siteTitle,
  siteFacebookPage,
  siteInstagramPage,
  siteTwitterHandle,
  facebookAppId,
  sentryDsn,
  usingSSL,
  maps,
  custom,
};

export default config;

