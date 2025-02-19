import React, { FC } from 'react';


const DownloadBox = (props) => {
  return (
    <>
      <li className="installation-step" style={{marginTop: '20px'}}>
        <div className="row">
          <div className="col-md-1 col-3">
            <span className="fa-stack fa-2x">
                 <i className="fas fa-circle fa-stack-2x sp-color-green"></i>
                 <strong className="fa-stack-1x" style={{color: 'white'}}>1</strong>
            </span>
          </div>
          <div className="col-md-11 col-9">
            Download the latest Apache StreamPipes release and extract the zip file to a directory of your choice.
            <div className="row">
              <table className="table"
                     style={{
                       marginTop: '30px',
                       marginLeft: '20px',
                       marginRight: '20px',
                       border: '1px solid rgb(27, 20, 100)'
                     }}>
                <thead>
                <tr style={{background: 'rgb(27, 20, 100)', color: 'white'}}>
                  <th scope="col" style={{borderBottom: '0px', borderTop: '0px'}}>File</th>
                  <th scope="col" style={{borderBottom: '0px', borderTop: '0px'}}>Version</th>
                  <th scope="col" style={{borderBottom: '0px', borderTop: '0px'}}>Release Date</th>
                  <th scope="col" style={{borderBottom: '0px', borderTop: '0px'}}>Signatures</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td><a
                    href={`https://www.apache.org/dyn/closer.lua?action=download&filename=streampipes/${props.version}/apache-streampipes-${props.version}-source-release.zip`}>apache-streampipes-{props.version}-source-release.zip</a>
                  </td>
                  <td>{props.version}</td>
                  <td>{props.releaseDate}</td>
                  <td>
                    <a
                      href={`https://downloads.apache.org/streampipes/${props.version}/apache-streampipes-${props.version}-source-release.zip.sha512`}>SHA</a>,&nbsp;
                    <a
                      href={`https://downloads.apache.org/streampipes/${props.version}/apache-streampipes-${props.version}-source-release.zip.asc`}>PGP</a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="alert alert-info" role="alert" style={{marginLeft: '20px', marginRight: '20px'}}>
                <p>
                The above release file should be verified using the PGP signatures and the <a
                href="https://downloads.apache.org/streampipes/KEYS">project release KEYS</a>. See the official ASF <a
                target="asf" href="https://www.apache.org/dyn/closer.cgi#verify">verification instructions</a> for a
                description of using the PGP and KEYS files for verification. A SHA512 checksum is also provided as an
                additional verification method.
                </p>
                <p>
                Find the latest release notes here: <a href={`https://github.com/apache/streampipes/blob/dev/RELEASE_NOTES.md`}>Release notes</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export default DownloadBox;

