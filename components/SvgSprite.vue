<template>
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="arrow_top_right" viewBox="0 0 36 36"><path d="M2 34 34 2m0 0H10m24 0v24" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></symbol>
    <symbol id="arrow_down_right" viewBox="0 0 16 16">
      <path d="M5.33 16v-2.14h7.04L0 1.49 1.49 0l12.37 12.37V5.33H16V16H5.33Z"/>
    </symbol>
    <symbol id="close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M8.002 9.416a1 1 0 1 1 1.414-1.414l2.59 2.59 2.584-2.584a1 1 0 1 1 1.414 1.414l-2.584 2.584 2.584 2.584a1 1 0 0 1-1.414 1.414l-2.584-2.584-2.584 2.584a1 1 0 0 1-1.414-1.414l2.584-2.584-2.59-2.59Z"/>
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M23 4a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4Zm-2 0a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4Z"/>
    </symbol>
    <symbol id="telegram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
      <path
          d="M18.72.12.92 6.66c-1.2.42-1.2 1.14-.21 1.35l4.47 1.35 1.75 4.98c.22.52.11.72.65.72.44 0 .66-.2.88-.41.11-.1 1.09-1.04 2.18-2.08l4.58 3.22c.88.42 1.42.21 1.64-.73l3.06-13.59c.32-1.14-.44-1.76-1.2-1.35Zm-2.3 3.12L7.91 10.6l-.33 3.43-1.74-4.98 10.04-6.02c.44-.31.87-.1.54.21Z"/>
    </symbol>
    <symbol id="email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
      <path
          d="M19.95 2.16c-.09-.43-.27-.83-.55-1.18-.05-.07-.11-.13-.17-.2A2.62 2.62 0 0 0 17.37 0H2.62C1.92 0 1.26.28.76.78.7.85.64.91.59.99c-.28.34-.46.74-.54 1.17-.04.17-.05.35-.05.53V13.3c0 .37.07.73.21 1.07.13.31.32.6.55.84.06.06.12.11.19.17.47.4 1.06.62 1.67.62h14.75c.61 0 1.21-.23 1.68-.63.06-.05.12-.1.18-.16.22-.24.4-.5.53-.8l.02-.04c.14-.34.22-.69.22-1.07V2.69c0-.18-.02-.35-.05-.53ZM1.36 1.71a1.552 1.552 0 0 1 1.26-.65h14.75a1.552 1.552 0 0 1 1.26.65l.12.15-7.88 7.04a1.326 1.326 0 0 1-1.75 0L1.25 1.87l.11-.16ZM1.04 13.4V2.91l6.1 5.46-6.04 5.4-.06-.37Zm17.12 1.31c-.24.14-.51.22-.79.22H2.62c-.28 0-.55-.08-.79-.22l-.24-.14 6.25-5.58.68.61c.41.36.93.56 1.48.56.54 0 1.06-.2 1.47-.56l.69-.61 6.24 5.58-.24.14Zm.79-1.41v.09l-.05.38-6.05-5.4 6.1-5.46V13.3Z"/>
    </symbol>
    <symbol id="whatsapp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path
          d="M2.09 9c0-4.03 3.18-7.29 7.11-7.29S16.32 4.97 16.32 9c0 4.02-3.19 7.28-7.12 7.28-1.4 0-2.7-.41-3.8-1.13a.831.831 0 0 0-.69-.09l-2.41.73.91-2.17c.11-.26.09-.55-.06-.79A7.413 7.413 0 0 1 2.09 9ZM9.2 0C4.35 0 .41 4.02.41 9c0 1.57.4 3.05 1.1 4.34L.06 16.8c-.13.31-.07.66.15.91.21.25.55.34.86.25l3.77-1.15A8.66 8.66 0 0 0 9.2 18c4.86 0 8.8-4.03 8.8-9 0-4.98-3.94-9-8.8-9Zm1.92 10.87-1.1.79a7.78 7.78 0 0 1-1.65-1.31c-.6-.6-1.04-1.23-1.36-1.81l.7-.61c.3-.26.38-.7.19-1.05l-.89-1.72a.837.837 0 0 0-.58-.44.871.871 0 0 0-.71.2l-.26.24c-.64.56-1.01 1.5-.7 2.44.32.98 1.01 2.52 2.42 3.97 1.52 1.55 3.06 2.16 3.97 2.4.72.19 1.41-.06 1.89-.47l.5-.41c.21-.18.33-.45.31-.73a.863.863 0 0 0-.41-.67l-1.41-.86a.817.817 0 0 0-.91.04Z"/>
    </symbol>
    <symbol id="chevron_right" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m9 6 6 6-6 6m0-6h.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>
  </svg>
</template>

