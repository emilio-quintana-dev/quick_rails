import PropTypes from 'prop-types';

import { countries } from '~/assets/data';

import CountrySelect from '~/components/country-select';

// ----------------------------------------------------------------------

export default function FilterLocation({ filterLocation, onChangeLocation, sx }) {
  return (
    <CountrySelect
      fullWidth
      hiddenLabel
      placeholder="Locations"
      value={filterLocation}
      onChange={(event, newValue) => onChangeLocation(newValue)}
      options={countries.map((option) => option.label)}
      getOptionLabel={(option) => option}
      sx={sx}
    />
  );
}

FilterLocation.propTypes = {
  filterLocation: PropTypes.string,
  onChangeLocation: PropTypes.func,
  sx: PropTypes.object,
};
