import React, { FC } from 'react';
import PageSection from '../PageSection';

const MadeForIIoT = (props) => (
  <>
    <PageSection sectionTitle={"Made for the Industrial IoT"} sectionSubtitle={"Quick-start your IIoT initiative"}
                 backgroundClass={"background-primary-light"} marginBottom={"35px"}>

      <div className={"d-flex align-items-center justify-content-center"}>
        <img src={"/img/architecture/streampipes-architecture-overview.png"} className={"architecture-image"}/>
      </div>
    </PageSection>

  </>
)

export default MadeForIIoT;
