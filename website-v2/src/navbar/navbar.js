module.exports = [
  {
    label: "Platform",
    position: "right",
    items: [
      { label: "Overview", to: "/#platform" },
      { label: "Connectivity", to: "/docs/use-connect/" },
      { label: "Pipelines", to: "/docs/use-pipelines/" },
      { label: "Datasets", to: "/docs/use-datasets/" },
      { label: "Charts", to: "/docs/use-charts/" },
      { label: "Dashboards", to: "/docs/use-dashboards/" },
      { label: "Assets and sites", to: "/docs/use-assets/" },
      { label: "Architecture", to: "/#architecture-overview" },
      { label: "Deployment", to: "/docs/configure-operate-deployment/" },
      { label: "Enterprise readiness", to: "/#enterprise" }
    ]
  },
  {
    label: "Developers",
    position: "right",
    items: [
      { label: "Overview", to: "/#developers" },
      { label: "Python client", href: "https://streampipes.apache.org/docs/docs/python/dev/" },
      { label: "Java client and APIs", to: "/docs/use-programmatic-access/" },
      { label: "Functions", to: "/docs/extend-sdk-functions/" },
      { label: "Extension SDK", to: "/docs/extend-setup/" },
      { label: "Extend the UI", to: "/docs/extend-customize-ui/" },
      { label: "Examples on GitHub", href: "https://github.com/apache/streampipes-examples" }
    ]
  },
  {
    label: "Docs",
    position: "right",
    to: "/docs/user-guide-introduction/"
  },
  {
    label: "Download",
    position: "right",
    to: "/download/"
  },
  {
    label: "Community",
    position: "right",
    items: [
      { label: "Blog", to: "/blog/" },
      { label: "Get involved", to: "/community/get-involved/" },
      { label: "Mailing lists", to: "/community/mailing-lists/" },
      { label: "Team", to: "/community/team/" },
      { label: "GitHub Discussions", href: "https://github.com/apache/streampipes/discussions" },
      { label: "Issue tracker", href: "https://github.com/apache/streampipes/issues" },
      { label: "Get help", to: "/docs/community-get-help/" }
    ]
  },
  {
    label: "Apache",
    position: "right",
    items: [
      { href: "https://www.apache.org/", label: "Apache Software Foundation" },
      { href: "https://www.apache.org/foundation/how-it-works.html", label: "How Apache works" },
      { href: "https://www.apache.org/licenses", label: "License" },
      { href: "https://www.apache.org/security", label: "Security" },
      { href: "https://www.apache.org/foundation/sponsorship.html", label: "Sponsoring Apache" },
      { href: "https://www.apache.org/foundation/thanks.html", label: "Thanks" }
    ]
  },
  {
    type: "html",
    position: "right",
    value: '<button type="button" id="ask-ai-input" class="search-input sp-ask-ai" aria-label="Ask the StreamPipes AI assistant"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Zm6.5 10 .9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9.9-2.3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>Ask AI</button>'
  },
  {
    href: "https://github.com/apache/streampipes",
    position: "right",
    className: "header-link h-github",
    "aria-label": "Apache StreamPipes on GitHub"
  },
  {
    label: "Get started",
    position: "right",
    to: "/docs/quick-start-guide/",
    className: "sp-nav-start"
  }
];
