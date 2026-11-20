// The released installer and the dev launcher use different bootstrap files.
export const releaseComposeCommand = (version: string, curl = 'curl') =>
  `mkdir streampipes-${version} && cd streampipes-${version} && ${curl} -fsSLO https://raw.githubusercontent.com/apache/streampipes/${version}/installer/compose/docker-compose.yml && ${curl} -fsSLO https://raw.githubusercontent.com/apache/streampipes/${version}/installer/compose/.env && docker compose up -d`;

const nightlyInstaller = 'https://raw.githubusercontent.com/apache/streampipes/dev/installer/compose';
const nightlyCommand = (curl: string, launcher: string, start: string) =>
  `mkdir streampipes-dev && cd streampipes-dev && ${curl} -fsSL --fail-early --remote-name-all "${nightlyInstaller}/{docker-compose.yml,.env.example,configure,${launcher}}" && ${start}`;

export const nightlyComposeCommand = nightlyCommand('curl', 'start', 'sh start');
export const nightlyWindowsCommand = nightlyCommand('curl.exe', 'start.cmd', '.\\start.cmd');
