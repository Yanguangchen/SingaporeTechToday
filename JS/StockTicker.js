// Configuration object for the TradingView widget
var tradingViewConfig = {
  "symbols": [
      {
      "proName": "BITSTAMP:BTCUSD",
      "title": "Bitcoin"
    },
    {
      "proName": "BITSTAMP:ETHUSD",
      "title": "Ethereum"
    },
    {
      "description": "NASDAQ",
      "proName": "SKILLING:NASDAQ"
    },
    {
      "description": "TESLA",
      "proName": "NASDAQ:TSLA"
    },
    {
      "description": "APPLE",
      "proName": "NASDAQ:AAPL"
    },
    {
      "description": "NVIDIA",
      "proName": "NASDAQ:NVDA"
    },
    {
      "description": "",
      "proName": "NASDAQ:AMD"
    },
    {
      "description": "QUALCOMM",
      "proName": "NASDAQ:QCOM"
    },
    {
      "description": "FACEBOOK",
      "proName": "NASDAQ:META"
    },
    {
      "description": "AMAZON",
      "proName": "NASDAQ:AMZN"
    },
    {
      "description": "GOOGLE",
      "proName": "NASDAQ:GOOGL"
    },
    {
      "description": "CRM",
      "proName": "NYSE:CRM"
    },
    {
      "description": "TENCENT",
      "proName": "SET:TENCENT80"
    }
  ],
  "showSymbolLogo": true,
  "colorTheme": "transparent",
  "isTransparent": true,
  "displayMode": "adaptive",
  "locale": "en"
};

// Loading the external TradingView script
var script = document.createElement('script');
script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
script.async = true;
script.innerHTML = JSON.stringify(tradingViewConfig);
document.getElementsByClassName('tradingview-widget-container')[0].appendChild(script);
