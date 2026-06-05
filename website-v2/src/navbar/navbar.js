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
    className: "header-link h-twitter",
    "aria-label": "Apache StreamPipes Twitter",
  },
];
