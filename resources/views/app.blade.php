<!DOCTYPE html>
<html dir="rtl" lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="text-gray-900 leading-tight">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="msapplication-starturl" content="/">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#e5e5e5">

  <!-- Title -->
  <title inertia>{{ config('app.name', 'Laravel') }}</title>

  @vite
  @laravelPWA
</head>
<body class="antialiased">
    @inertia
  <!--
      Safari fix (optional)
      <script>!function(){var e=document.createElement("script");if(!("noModule"in e)&&"onbeforeload"in e){var t=!1;document.addEventListener("beforeload",function(n){if(n.target===e)t=!0;else if(!n.target.hasAttribute("nomodule")||!t)return;n.preventDefault()},!0),e.type="module",e.src=".",document.head.appendChild(e),e.remove()}}();</script>
      load both versions
      <script type="module" src="/assets/app.12345678.js"></script>
      <script nomodule src="/assets/app-legacy.12345678.js"></script>
  -->
</body>
</html>
