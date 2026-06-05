import * as React from 'react';

const DownloadBox = props => {
  const archiveName = `apache-streampipes-${props.version}-source-release.zip`;

  return (
    <div className="download-release-card">
      <div className="download-release-header">
        <div>
          <span className="download-steps-eyebrow">Latest Release</span>
          <h3>Download Apache StreamPipes {props.version}</h3>
        </div>
        <a
          href={`https://www.apache.org/dyn/closer.lua?action=download&filename=streampipes/${props.version}/${archiveName}`}
          className="sp-button sp-button-medium sp-button-blue"
        >
          <i className="fas fa-download"></i> Download ZIP
        </a>
      </div>

      <p className="download-release-copy">
        Download the latest Apache StreamPipes source release and extract the archive to a directory
        of your choice. The package includes the installer and the reference deployment presets.
      </p>

      <div className="download-release-table-wrap">
        <table className="download-release-table">
          <thead>
            <tr>
              <th>File</th>
              <th>Version</th>
              <th>Release Date</th>
              <th>Verification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a
                  href={`https://www.apache.org/dyn/closer.lua?action=download&filename=streampipes/${props.version}/${archiveName}`}
                >
                  {archiveName}
                </a>
              </td>
              <td>{props.version}</td>
              <td>{props.releaseDate}</td>
              <td>
                <a
                  href={`https://downloads.apache.org/streampipes/${props.version}/${archiveName}.sha512`}
                >
                  SHA512
                </a>
                {' · '}
                <a
                  href={`https://downloads.apache.org/streampipes/${props.version}/${archiveName}.asc`}
                >
                  PGP
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="download-note-card">
        <p>
          Verify the release using the published signatures and the{' '}
          <a href="https://downloads.apache.org/streampipes/KEYS">project release KEYS</a>. See the
          official ASF{' '}
          <a href="https://www.apache.org/dyn/closer.cgi#verify" target="_blank" rel="noreferrer">
            verification instructions
          </a>{' '}
          for the recommended procedure.
        </p>
        <p>
          Review the current{' '}
          <a href="https://github.com/apache/streampipes/blob/dev/RELEASE_NOTES.md">release notes</a>{' '}
          before upgrading existing environments.
        </p>
      </div>
    </div>
  );
};

export default DownloadBox;
