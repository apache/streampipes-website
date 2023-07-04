import React, { FC } from 'react';

const PageSectionTitle = (props) => {
  const lightMode = props.lightMode;
  const alignCenter = props.alignCenter;
  const titleClass = lightMode ? 'text-light' : '';
  const alignClass = alignCenter ? 'align-center' : 'align-left';
  const alignTextBlockClass = alignCenter ? 'text-block-center' : 'text-block-left';
  const largeSectionClass = props.largeSection ? 'section-title-large' : '';

  return (
    <div className={`section-title ${largeSectionClass} ${alignClass}`}>
      {
        props.subtitle ? (<span className="sub-title">{props.subtitle}</span>) : (<span></span>)
      }
      {
        props.title ? (<h2 className={`${titleClass} mb-4`}>{props.title}</h2>)
          : (
            <h2 className={`${titleClass} mb-4`}>
              {props.titleId}
            </h2>
          )
      }
      <div className={`${alignTextBlockClass} ${titleClass}`}>
        {props.children}
      </div>
    </div>
  )
}

export default PageSectionTitle;
