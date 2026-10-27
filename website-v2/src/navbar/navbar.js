module.exports = [
  {
    "to": "/",
    "label": "Home",
    "position": "right"
  },
  {
    "label": "Docs",
    "position": "right",
    "to": "/docs/user-guide-introduction"
  },
  {
    "to": "/download",
    "label": "Download",
    "position": "right"
  },
  {
    "label": "Resources",
    "position": "right",
    items: [
      {
        href: "https://github.com/apache/streampipes/issues",
        label: "Issue Tracker"
      },
      {
        href: "https://github.com/apache/streampipes/discussions",
        label: "Github Discussions Support"
      },
      {
        href: "http://cwiki.apache.org/confluence/display/STREAMPIPES",
        label: "Developer wiki"
      },
    ]
  },
  {
    "to": "blog",
    "label": "Blog",
    "position": "right"
  },
  {
    "label": "Community",
    "position": "right",
    items: [
      {
        "to": "/community/mailing-lists",
        "label": "Mailing Lists",
      },
      {
        "to": "/community/team",
        "label": "Team",
      },
      {
        "to": "/community/get-involved",
        "label": "Get involved",
      }
    ]
  },
  {
    "label": "Apache",
    "position": "right",
    items: [
      {
        href: "https://www.apache.org/",
        label: "Apache Software Foundation"
      },
      {
        href: "https://www.apache.org/foundation/how-it-works.html",
        label: "How Apache Works"
      },
      {
        href: "https://www.apache.org/licenses",
        label: "License"
      },
      {
        href: "https://www.apache.org/security",
        label: "Security"
      },
      {
        href: "https://www.apache.org/foundation/sponsorship.html",
        label: "Sponsoring Apache"
      },
      {
        href: "https://www.apache.org/foundation/thanks.html",
        label: "Thanks"
      }
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
    "aria-label": "Apache StreamPipes Github",
  },
  {
    href: "https://linkedin.com/company/apache-streampipes",
    position: "right",
    className: "header-link h-linkedin",
    "aria-label": "Apache StreamPipes LinkedIn",
  },
  {
    href: "https://twitter.com/streampipes",
    position: "right",
    className: "header-link h-x",
    "aria-label": "Apache StreamPipes on X",
  },
];
