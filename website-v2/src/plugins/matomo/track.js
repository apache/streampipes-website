import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }
  return {
    onRouteUpdate({location}) {
      // Guard: if the Matomo bootstrap script was blocked, do not crash the page.
      const paq = window._paq;
      if (!Array.isArray(paq)) return;
      paq.push(['setCustomUrl', location.pathname]);
      paq.push(['setDocumentTitle', document.title]);
      paq.push(['trackPageView']);
    },
  };
})();
