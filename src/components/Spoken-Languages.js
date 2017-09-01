import React from 'react';

function SpokenLanguages ({languages = []}) {
  const languageList = languages
                .filter(item => { return item.name !== '' })
                .map(item => item.name)
                .join('/')
  return (
    <span
      className="detail"
      style={{marginRight: '20px'}}>
        {languageList}
    </span>
  )
}

export default SpokenLanguages;
