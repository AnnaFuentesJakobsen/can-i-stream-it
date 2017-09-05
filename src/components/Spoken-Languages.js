import React from 'react';

function SpokenLanguages ({languages = []}) {
  const languageList = languages
                .filter(item => { return item.name !== '' })
                .map(item => item.name)
                .join('/')
  return (
    <span>
        {languageList}
    </span>
  )
}

export default SpokenLanguages;
