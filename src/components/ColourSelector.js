import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button data-testid = {config.key} style={{background:background}} className={config.className} onClick={() => selectNextBackground({background: background})}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
